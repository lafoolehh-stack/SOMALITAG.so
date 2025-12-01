import { Language } from './types';

export const TRANSLATIONS = {
  so: {
    appTitle: "SOMALITAG",
    knowledgeHub: "Xarunta Aqoonta",
    nav: {
      profiles: "profiles",
      categories: "qeybaha",
      tags: "tags",
      api: "api"
    },
    hero: {
      kicker: "Qaramo • Xog • Xiriir",
      titleStart: "SomaliTag waa ",
      titleHighlight: "Wikipedia + WikiData",
      titleEnd: " ee Soomaaliya.",
      subtitle: "Isku xirka Profiles, Categories, iyo Tags si loo abuuro shabakad xogeed oo la isku halleyn karo oo ay adeegsadaan cilmi-baarayaasha iyo bulshada.",
      searchBtn: "🔍 Raadi Profile",
      apiBtn: "⚙ Eeg API",
      statProfiles: "Profiles",
      statProfilesDesc: "Siyaasad • Ganacsi • Dhaqan",
      statCategories: "Qeybaha",
      statCategoriesDesc: "Qaab Dhismeed Geed",
      statTags: "Tags",
      statTagsDesc: "Xog Xiriirsan",
      apiStatus: "Xaaladda API",
      apiReady: "Diyaar",
      apiPath: "/api/profiles/v1"
    },
    profiles: {
      title: "Diiwaanka Profiles-ka",
      subtitle: "Raadi oo shaandhee shaqsiyaadka caanka ah ee Soomaalida.",
      searchPlaceholder: "Ku raadi magac, xil, ama tag...",
      allRoles: "Dhamaan Xilalka",
      allStatus: "Dhamaan Xaaladaha",
      alive: "Nool",
      deceased: "Geeriyooday",
      showing: "Wuxuu muujinayaa",
      of: "oo ka mid ah",
      items: "profiles",
      prev: "Hore",
      next: "Dambe",
      noResults: "Lama helin profile u dhigma raadintaada.",
      tableHeaders: {
        name: "Magaca",
        role: "Doorka",
        subCategory: "Qeyb-hoosaad",
        tags: "Tags",
        status: "Xaaladda"
      }
    },
    categories: {
      title: "Qeybaha Aqoonta",
      subtitle: "Baadh profiles-ka iyadoo loo eegayo qeybta ay khuseeyaan.",
      noteTitle: "Fiiro Gaar ah:",
      noteBody: "Backend-ka wuxuu taageeraa `parent_id` si loo sameeyo qeybo-hoosaadyo. Tusaale: Siyaasadda → Laanta Fulinta → Wasiirrada."
    },
    tags: {
      title: "Daruurta Tag-yada",
      subtitle: "Baadh xogta isku xiran ee gobollada, dhacdooyinka, iyo ururrada."
    },
    api: {
      title: "Dukumentiga API & Qaab-dhismeedka",
      subtitle: "SomaliTag waxaa loo qaabeeyey inay noqoto xog-bixiye (headless data provider). Frontend kasta wuxuu xogtan ku heli karaa REST ama GraphQL.",
      coreSchema: "Qaab-dhismeedka Muhiimka ah",
      endpoints: "Jidadka (Endpoints)",
      endpointList: "Liiska oo bogag leh",
      endpointDetails: "Faahfaahin buuxda + xiriirrada",
      endpointSearch: "Raadinta guud"
    },
    modal: {
      aka: "AKA",
      role: "Doorka",
      born: "Dhashay",
      place: "Goobta",
      status: "Xaaladda",
      tags: "Tags",
      relations: "Xiriirrada",
      summary: "Guudmar",
      media: "Keydka Sawirrada",
      close: "Xir"
    },
    footer: "SomaliTag. Hindisaha Aqoonta Furan."
  },
  en: {
    appTitle: "SOMALITAG",
    knowledgeHub: "Knowledge Hub",
    nav: {
      profiles: "profiles",
      categories: "categories",
      tags: "tags",
      api: "api"
    },
    hero: {
      kicker: "Nation • Data • Connect",
      titleStart: "SomaliTag is the ",
      titleHighlight: "Wikipedia + WikiData",
      titleEnd: " for Somalia.",
      subtitle: "Connecting Profiles, Categories, and Tags to create a trusted, linked data knowledge graph for researchers and the public.",
      searchBtn: "🔍 Search Profiles",
      apiBtn: "⚙ View API",
      statProfiles: "Profiles",
      statProfilesDesc: "Politics • Business • Culture",
      statCategories: "Categories",
      statCategoriesDesc: "Tree-based Graph",
      statTags: "Tags",
      statTagsDesc: "Linked Data Nodes",
      apiStatus: "API Status",
      apiReady: "Ready",
      apiPath: "/api/profiles/v1"
    },
    profiles: {
      title: "Profiles Directory",
      subtitle: "Search and filter Somali public figures.",
      searchPlaceholder: "Search by name, role, or tag...",
      allRoles: "All Roles",
      allStatus: "All Status",
      alive: "Alive",
      deceased: "Deceased",
      showing: "Showing",
      of: "of",
      items: "profiles",
      prev: "Previous",
      next: "Next",
      noResults: "No profiles found matching your criteria.",
      tableHeaders: {
        name: "Name",
        role: "Role",
        subCategory: "Sub-Category",
        tags: "Tags",
        status: "Status"
      }
    },
    categories: {
      title: "Knowledge Categories",
      subtitle: "Browse profiles by their primary domain. This structure supports a hierarchical tree.",
      noteTitle: "Technical Note:",
      noteBody: "The backend supports `parent_id` for nested sub-categories. E.g., Politics → Executive Branch → Ministers."
    },
    tags: {
      title: "Tag Cloud",
      subtitle: "Explore connected data nodes across regions, events, and organizations."
    },
    api: {
      title: "API Documentation & Schema",
      subtitle: "SomaliTag is designed as a headless data provider. Any frontend can consume this data via REST or GraphQL endpoints.",
      coreSchema: "Core Schema",
      endpoints: "Endpoints",
      endpointList: "List with pagination",
      endpointDetails: "Full details + relations",
      endpointSearch: "Global search"
    },
    modal: {
      aka: "AKA",
      role: "Role",
      born: "Born",
      place: "Place",
      status: "Status",
      tags: "Tags",
      relations: "Relations",
      summary: "Summary",
      media: "Media Gallery",
      close: "Close"
    },
    footer: "SomaliTag. Open Knowledge Initiative."
  },
  ar: {
    appTitle: "الصومال تاج",
    knowledgeHub: "مركز المعرفة",
    nav: {
      profiles: "ملفات",
      categories: "فئات",
      tags: "وسوم",
      api: "واجهة برمجة"
    },
    hero: {
      kicker: "أمة • بيانات • تواصل",
      titleStart: "الصومال تاج هو ",
      titleHighlight: "ويكيبيديا + ويكي داتا",
      titleEnd: " للصومال.",
      subtitle: "ربط الملفات الشخصية والفئات والوسوم لإنشاء رسم بياني معرفي موثوق للباحثين والجمهور.",
      searchBtn: "🔍 بحث في الملفات",
      apiBtn: "⚙ عرض الـ API",
      statProfiles: "ملفات شخصية",
      statProfilesDesc: "سياسة • أعمال • ثقافة",
      statCategories: "فئات",
      statCategoriesDesc: "رسم بياني شجري",
      statTags: "وسوم",
      statTagsDesc: "عقد بيانات مترابطة",
      apiStatus: "حالة النظام",
      apiReady: "جاهز",
      apiPath: "/api/profiles/v1"
    },
    profiles: {
      title: "دليل الملفات الشخصية",
      subtitle: "بحث وتصفية الشخصيات العامة الصومالية.",
      searchPlaceholder: "ابحث بالاسم، الدور، أو الوسم...",
      allRoles: "جميع الأدوار",
      allStatus: "جميع الحالات",
      alive: "على قيد الحياة",
      deceased: "متوفى",
      showing: "إظهار",
      of: "من",
      items: "ملفات",
      prev: "السابق",
      next: "التالي",
      noResults: "لم يتم العثور على ملفات مطابقة لبحثك.",
      tableHeaders: {
        name: "الاسم",
        role: "الدور",
        subCategory: "الفئة الفرعية",
        tags: "الوسوم",
        status: "الحالة"
      }
    },
    categories: {
      title: "فئات المعرفة",
      subtitle: "تصفح الملفات حسب المجال الرئيسي. هذا الهيكل يدعم التسلسل الهرمي.",
      noteTitle: "ملاحظة فنية:",
      noteBody: "الخلفية تدعم `parent_id` للفئات الفرعية المتداخلة. مثال: السياسة ← السلطة التنفيذية ← الوزراء."
    },
    tags: {
      title: "سحابة الوسوم",
      subtitle: "استكشف عقد البيانات المتصلة عبر المناطق والأحداث والمنظمات."
    },
    api: {
      title: "وثائق API والمخطط",
      subtitle: "تم تصميم SomaliTag كمزود بيانات مستقل. يمكن لأي واجهة أمامية استهلاك هذه البيانات عبر نقاط نهاية REST أو GraphQL.",
      coreSchema: "المخطط الأساسي",
      endpoints: "نقاط النهاية",
      endpointList: "قائمة مع ترقيم الصفحات",
      endpointDetails: "تفاصيل كاملة + علاقات",
      endpointSearch: "بحث شامل"
    },
    modal: {
      aka: "معروف بـ",
      role: "الدور",
      born: "تاريخ الميلاد",
      place: "المكان",
      status: "الحالة",
      tags: "الوسوم",
      relations: "العلاقات",
      summary: "ملخص",
      media: "معرض الوسائط",
      close: "إغلاق"
    },
    footer: "SomaliTag. مبادرة المعرفة المفتوحة."
  }
};
