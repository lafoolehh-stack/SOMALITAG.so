import React, { useState, useMemo, useEffect } from 'react';
import { PROFILES, TOP_LEVEL_CATEGORIES, TAGS_LIST } from './data';
import { Profile, ViewState, Theme, Language } from './types';
import ProfileModal from './components/ProfileModal';
import { TRANSLATIONS } from './translations';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('profiles');
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  // Settings State
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'dark';
  });
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('language') as Language) || 'so';
  });

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Effects for Settings
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.setAttribute('lang', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = TRANSLATIONS[language];

  // Derived Data
  const filteredProfiles = useMemo(() => {
    return PROFILES.filter((p) => {
      const matchesSearch =
        searchQuery === '' ||
        (p.name + ' ' + (p.aka || '') + ' ' + p.primary_role + ' ' + (p.sub_category || '') + ' ' + p.tags.join(' '))
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      
      const matchesRole = roleFilter === '' || p.primary_role === roleFilter;
      const matchesStatus = statusFilter === '' || p.status === statusFilter;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [searchQuery, roleFilter, statusFilter]);

  const paginatedProfiles = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredProfiles.slice(start, start + pageSize);
  }, [filteredProfiles, currentPage]);

  const totalPages = Math.ceil(filteredProfiles.length / pageSize);

  // Handlers
  const handleNavClick = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (category: string) => {
    setRoleFilter(category);
    setCurrentView('profiles');
    setSearchQuery('');
    setCurrentPage(1);
    window.scrollTo({ top: document.getElementById('main-content')?.offsetTop || 0, behavior: 'smooth' });
  };

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
    setRoleFilter('');
    setCurrentView('profiles');
    setCurrentPage(1);
    window.scrollTo({ top: document.getElementById('main-content')?.offsetTop || 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-950 text-slate-200 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row h-auto md:h-16 items-center justify-between py-3 md:py-0 gap-3 md:gap-0">
            
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer w-full md:w-auto justify-between md:justify-start">
              <div className="flex items-center gap-3" onClick={() => handleNavClick('profiles')}>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 shadow-lg shadow-amber-500/20">
                  <span className="font-extrabold text-slate-950 tracking-tighter">ST</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold tracking-tight text-slate-200 leading-none">{t.appTitle}</h1>
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">{t.knowledgeHub}</span>
                </div>
              </div>

              {/* Mobile Controls (Theme/Lang) */}
              <div className="flex md:hidden items-center gap-2">
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-amber-400 transition-colors"
                >
                  {theme === 'dark' ? '☀️' : '🌙'}
                </button>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="bg-slate-800 text-slate-300 text-xs rounded-lg px-2 py-1.5 border border-slate-700 outline-none"
                >
                  <option value="so">🇸🇴</option>
                  <option value="en">🇬🇧</option>
                  <option value="ar">🇸🇦</option>
                </select>
              </div>
            </div>

            {/* Nav & Desktop Controls */}
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
              <nav className="flex gap-1 md:gap-2 overflow-x-auto max-w-full pb-1 md:pb-0 scrollbar-hide">
                {(['profiles', 'categories', 'tags', 'api'] as ViewState[]).map((view) => (
                  <button
                    key={view}
                    onClick={() => handleNavClick(view)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap capitalize ${
                      currentView === view
                        ? 'bg-amber-400/10 text-amber-400 ring-1 ring-amber-400/50'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                    }`}
                  >
                    {t.nav[view]}
                  </button>
                ))}
              </nav>

              {/* Desktop Settings Controls */}
              <div className="hidden md:flex items-center gap-3 pl-4 border-l border-slate-800">
                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/50 transition-all"
                    title="Toggle Theme"
                  >
                    {theme === 'dark' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    )}
                </button>
                <div className="relative">
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as Language)}
                    className="appearance-none bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium rounded-lg pl-3 pr-8 py-1.5 focus:outline-none focus:border-amber-500/50 cursor-pointer hover:bg-slate-800 transition-colors"
                  >
                    <option value="so">Soomaali</option>
                    <option value="en">English</option>
                    <option value="ar">العربية</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-slate-500">
                    <svg className="w-3 h-3 rtl:mr-auto rtl:ml-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full" id="main-content">
        {/* Hero Section */}
        {currentView === 'profiles' && !searchQuery && !roleFilter && (
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="lg:col-span-7 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="text-xs font-bold text-amber-500 tracking-[0.2em] uppercase mb-3">{t.hero.kicker}</div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                    {t.hero.titleStart}<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">{t.hero.titleHighlight}</span>{t.hero.titleEnd}
                  </h2>
                  <p className="text-slate-400 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                    {t.hero.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button 
                      onClick={() => document.getElementById('search-input')?.focus()}
                      className="px-6 py-2.5 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold rounded-full hover:shadow-lg hover:shadow-amber-500/20 transition-all active:scale-95"
                    >
                      {t.hero.searchBtn}
                    </button>
                    <button 
                      onClick={() => handleNavClick('api')}
                      className="px-6 py-2.5 bg-slate-800 text-slate-200 font-semibold rounded-full border border-slate-700 hover:bg-slate-700 transition-all"
                    >
                      {t.hero.apiBtn}
                    </button>
                  </div>
                </div>
             </div>

             <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{t.hero.statProfiles}</div>
                  <div className="text-2xl font-bold text-white mb-2">{PROFILES.length}</div>
                  <div className="text-xs text-amber-500/80">{t.hero.statProfilesDesc}</div>
                </div>
                 <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{t.hero.statCategories}</div>
                  <div className="text-2xl font-bold text-white mb-2">{TOP_LEVEL_CATEGORIES.length}</div>
                  <div className="text-xs text-amber-500/80">{t.hero.statCategoriesDesc}</div>
                </div>
                 <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{t.hero.statTags}</div>
                  <div className="text-2xl font-bold text-white mb-2">{TAGS_LIST.length}</div>
                  <div className="text-xs text-amber-500/80">{t.hero.statTagsDesc}</div>
                </div>
                 <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none"></div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{t.hero.apiStatus}</div>
                  <div className="text-2xl font-bold text-green-400 mb-2">{t.hero.apiReady}</div>
                  <div className="text-xs text-slate-500 font-mono ltr:text-left rtl:text-right">{t.hero.apiPath}</div>
                </div>
             </div>
           </div>
        )}

        {/* Profiles View */}
        {currentView === 'profiles' && (
          <div className="animate-in fade-in duration-300">
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-6 gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">{t.profiles.title}</h3>
                <p className="text-sm text-slate-400">{t.profiles.subtitle}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="relative flex-1 min-w-[280px]">
                <input
                  id="search-input"
                  type="text"
                  placeholder={t.profiles.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-full px-4 py-2.5 ltr:pl-10 rtl:pr-10 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all"
                />
                <svg
                  className="absolute ltr:left-3.5 rtl:right-3.5 top-3 text-slate-500"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <select
                value={roleFilter}
                onChange={(e) => {
                  setRoleFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              >
                <option value="">{t.profiles.allRoles}</option>
                {TOP_LEVEL_CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
               <select
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              >
                <option value="">{t.profiles.allStatus}</option>
                <option value="Alive">{t.profiles.alive}</option>
                <option value="Deceased">{t.profiles.deceased}</option>
              </select>
            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left rtl:text-right text-sm text-slate-400">
                  <thead className="bg-slate-950/50 uppercase text-xs font-semibold tracking-wider text-slate-500">
                    <tr>
                      <th className="px-6 py-4">{t.profiles.tableHeaders.name}</th>
                      <th className="px-6 py-4">{t.profiles.tableHeaders.role}</th>
                      <th className="px-6 py-4 hidden md:table-cell">{t.profiles.tableHeaders.subCategory}</th>
                      <th className="px-6 py-4 hidden lg:table-cell">{t.profiles.tableHeaders.tags}</th>
                      <th className="px-6 py-4 hidden sm:table-cell">{t.profiles.tableHeaders.status}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {paginatedProfiles.length > 0 ? (
                      paginatedProfiles.map((profile) => (
                        <tr
                          key={profile.id}
                          onClick={() => setSelectedProfile(profile)}
                          className="group hover:bg-slate-800/50 transition-colors cursor-pointer"
                        >
                          <td className="px-6 py-4">
                            <div className="font-medium text-slate-200 group-hover:text-amber-400 transition-colors flex items-center">
                              {profile.name}
                              {profile.is_verified && (
                                <svg className="w-4 h-4 text-[#22c55e] ml-1.5 rtl:ml-0 rtl:mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.491 4.491 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                </svg>
                              )}
                            </div>
                             <div className="sm:hidden text-xs mt-1 text-slate-500">{profile.primary_role}</div>
                          </td>
                          <td className="px-6 py-4">
                             <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                               {profile.primary_role}
                             </span>
                          </td>
                          <td className="px-6 py-4 hidden md:table-cell">{profile.sub_category || '—'}</td>
                          <td className="px-6 py-4 hidden lg:table-cell">
                            <div className="flex flex-wrap gap-1">
                              {profile.tags.slice(0, 3).map((tag) => (
                                <span key={tag} className="inline-flex items-center px-2 py-0.5 rounded text-[10px] bg-slate-800/50 text-slate-400 border border-slate-700/50">
                                  <span className="w-1 h-1 rounded-full bg-amber-500/50 mr-1.5 rtl:mr-0 rtl:ml-1.5"></span>
                                  {tag}
                                </span>
                              ))}
                              {profile.tags.length > 3 && (
                                <span className="text-[10px] text-slate-500 self-center">+{profile.tags.length - 3}</span>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 hidden sm:table-cell">
                             <span className={`inline-flex items-center gap-1.5 ${profile.status === 'Alive' ? 'text-green-400' : 'text-red-400'}`}>
                               <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                               {profile.status}
                             </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                          {t.profiles.noResults}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/30 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  {t.profiles.showing} <span className="font-medium text-slate-300">{paginatedProfiles.length}</span> {t.profiles.of} <span className="font-medium text-slate-300">{filteredProfiles.length}</span> {t.profiles.items}
                </span>
                <div className="flex gap-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    className="px-3 py-1 text-xs font-medium rounded-md border border-slate-700 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {t.profiles.prev}
                  </button>
                  <button
                    disabled={currentPage === totalPages || totalPages === 0}
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    className="px-3 py-1 text-xs font-medium rounded-md border border-slate-700 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {t.profiles.next}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Categories View */}
        {currentView === 'categories' && (
          <div className="animate-in fade-in duration-300 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white mb-2">{t.categories.title}</h2>
              <p className="text-slate-400">{t.categories.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {TOP_LEVEL_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className="group flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-800/50 transition-all text-left rtl:text-right"
                >
                  <span className="font-medium text-slate-200 group-hover:text-amber-400 transition-colors">{cat}</span>
                  <svg className="w-4 h-4 text-slate-600 group-hover:text-amber-500 transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
            <div className="mt-8 p-4 bg-slate-900/50 border border-slate-800 rounded-lg text-sm text-slate-500">
               <strong className="text-slate-300">{t.categories.noteTitle}</strong> {t.categories.noteBody}
            </div>
          </div>
        )}

        {/* Tags View */}
        {currentView === 'tags' && (
          <div className="animate-in fade-in duration-300 max-w-4xl mx-auto">
             <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white mb-2">{t.tags.title}</h2>
              <p className="text-slate-400">{t.tags.subtitle}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {TAGS_LIST.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:border-amber-500 hover:text-amber-400 hover:bg-slate-800 transition-all text-sm"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* API View */}
        {currentView === 'api' && (
          <div className="animate-in fade-in duration-300 max-w-3xl mx-auto">
             <div className="mb-8 border-b border-slate-800 pb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{t.api.title}</h2>
              <p className="text-slate-400 leading-relaxed">
                {t.api.subtitle}
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-amber-400 mb-4">{t.api.coreSchema}</h3>
                <div className="bg-slate-950 rounded-xl border border-slate-800 p-6 font-mono text-xs md:text-sm text-slate-300 overflow-x-auto shadow-inner ltr:text-left rtl:text-left">
                  <div className="space-y-2">
                    <div className="flex"><span className="text-blue-400 w-32 shrink-0">profiles</span> <span>(id, name, slug, role, status, dob, summary, ...)</span></div>
                    <div className="flex"><span className="text-blue-400 w-32 shrink-0">categories</span> <span>(id, name, parent_id, slug)</span></div>
                    <div className="flex"><span className="text-blue-400 w-32 shrink-0">tags</span> <span>(id, name, slug)</span></div>
                    <div className="flex"><span className="text-blue-400 w-32 shrink-0">relations</span> <span>(source_id, target_id, type)</span></div>
                    <div className="flex"><span className="text-blue-400 w-32 shrink-0">media</span> <span>(profile_id, type, url, caption)</span></div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-amber-400 mb-4">{t.api.endpoints}</h3>
                <div className="space-y-3 ltr:text-left rtl:text-left">
                   <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-900 border border-slate-800">
                     <span className="px-2 py-1 rounded text-xs font-bold bg-green-900/50 text-green-400 border border-green-800">GET</span>
                     <code className="text-sm text-slate-200">/api/v1/profiles</code>
                     <span className="text-xs text-slate-500 ml-auto rtl:mr-auto rtl:ml-0">{t.api.endpointList}</span>
                   </div>
                   <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-900 border border-slate-800">
                     <span className="px-2 py-1 rounded text-xs font-bold bg-green-900/50 text-green-400 border border-green-800">GET</span>
                     <code className="text-sm text-slate-200">/api/v1/profiles/{'{id}'}</code>
                     <span className="text-xs text-slate-500 ml-auto rtl:mr-auto rtl:ml-0">{t.api.endpointDetails}</span>
                   </div>
                   <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-900 border border-slate-800">
                     <span className="px-2 py-1 rounded text-xs font-bold bg-green-900/50 text-green-400 border border-green-800">GET</span>
                     <code className="text-sm text-slate-200">/api/v1/search?q={'{query}'}</code>
                     <span className="text-xs text-slate-500 ml-auto rtl:mr-auto rtl:ml-0">{t.api.endpointSearch}</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
             <div className="h-6 w-6 rounded bg-gradient-to-br from-amber-500 to-orange-600"></div>
             <span className="font-bold tracking-tight text-white">{t.appTitle}</span>
          </div>
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} {t.footer}
          </p>
        </div>
      </footer>

      {/* Modal */}
      <ProfileModal 
        profile={selectedProfile} 
        onClose={() => setSelectedProfile(null)} 
        language={language}
      />
    </div>
  );
};

export default App;