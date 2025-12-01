import React, { useEffect } from 'react';
import { Profile, Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface ProfileModalProps {
  profile: Profile | null;
  onClose: () => void;
  language: Language;
}

const VerifiedBadge = () => (
  <svg 
    className="w-4 h-4 text-[#22c55e] inline-block align-text-bottom ml-1.5 rtl:mr-1.5 rtl:ml-0" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    aria-label="Verified Profile"
  >
    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.491 4.491 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

const ProfileModal: React.FC<ProfileModalProps> = ({ profile, onClose, language }) => {
  const t = TRANSLATIONS[language].modal;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (profile) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [profile, onClose]);

  if (!profile) return null;

  const initials = profile.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-[780px] max-h-[90vh] bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950 shadow-sm z-10 shrink-0">
          <h2 className="text-lg font-bold text-slate-200 flex items-center">
            {profile.name}
            {profile.is_verified && <VerifiedBadge />}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 rounded-full hover:bg-slate-800 hover:text-slate-200 transition-colors"
            aria-label={t.close}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Meta Info */}
            <div className="md:col-span-5 lg:col-span-4 space-y-6">
              <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-3xl font-bold text-slate-950 shadow-lg shadow-amber-500/20 mb-4">
                    {initials}
                  </div>
                  <h3 className="font-bold text-lg flex items-center justify-center text-slate-200">
                    {profile.name}
                    {profile.is_verified && <VerifiedBadge />}
                  </h3>
                  <p className="text-sm text-slate-400">{profile.sub_category || profile.primary_role}</p>
                </div>

                <div className="space-y-3 text-sm text-slate-400">
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span>{t.aka}</span>
                    <span className="text-slate-200">{profile.aka || '—'}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span>{t.role}</span>
                    <span className="text-slate-200">{profile.primary_role}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span>{t.born}</span>
                    <span className="text-slate-200">{profile.dob}</span>
                  </div>
                   <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span>{t.place}</span>
                    <span className="text-right text-slate-200 max-w-[50%] ltr:text-right rtl:text-left">{profile.pob}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span>{t.status}</span>
                    <span
                      className={`font-medium ${
                        profile.status === 'Alive' ? 'text-green-400' : 'text-red-400'
                      }`}
                    >
                      {profile.status}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">{t.tags}</h4>
                <div className="flex flex-wrap gap-2">
                  {profile.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full bg-slate-900 border border-slate-700 text-slate-300"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 mr-1.5 rtl:ml-1.5 rtl:mr-0"></span>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

               {profile.relations.length > 0 && (
                <div>
                   <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">{t.relations}</h4>
                   <div className="space-y-2">
                     {profile.relations.map((rel, idx) => (
                       <div key={idx} className="text-sm p-3 rounded-lg bg-slate-900/30 border border-slate-800/50">
                         <div className="font-medium text-slate-200">{rel.name}</div>
                         <div className="text-xs text-slate-500">{rel.relation_type}</div>
                       </div>
                     ))}
                   </div>
                </div>
              )}
            </div>

            {/* Detailed Info */}
            <div className="md:col-span-7 lg:col-span-8 space-y-8">
              <section>
                <h3 className="text-lg font-bold text-amber-400 mb-2">{t.summary}</h3>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">{profile.summary}</p>
              </section>

              {profile.media.length > 0 && (
                 <section>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">{t.media}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {profile.media.map((m, idx) => (
                        <div key={idx} className="group relative aspect-video rounded-lg overflow-hidden bg-slate-900 border border-slate-800">
                          <img src={m.url} alt={m.caption} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/90 to-transparent">
                            <p className="text-xs text-white truncate">{m.caption}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                 </section>
              )}

              <div className="space-y-6">
                {Object.entries(profile.sections).map(([key, content]) => {
                  if (!content) return null;
                  const title = key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
                  return (
                    <section key={key} className="relative ltr:pl-6 rtl:pr-6 ltr:before:left-0 rtl:before:right-0 before:absolute before:top-1 before:bottom-1 before:w-[2px] before:bg-slate-800">
                      <h4 className="font-bold text-slate-200 mb-2">{title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{content}</p>
                    </section>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;