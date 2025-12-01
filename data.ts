import { Profile } from './types';

export const PROFILES: Profile[] = [
  {
    id: 1,
    name: "Mohamed Abdullahi Farmaajo",
    is_verified: true,
    aka: "Farmaajo",
    gender: "Male",
    dob: "1962-05-11",
    pob: "Mogadishu, Somalia",
    nationality: "Somali",
    status: "Alive",
    primary_role: "Politics",
    sub_category: "President of Somalia",
    tags: ["Mogadishu", "Federal Government", "President", "Hawiye?"],
    summary: "Mohamed Abdullahi Mohamed 'Farmaajo' is a Somali politician who served as the President of Somalia.",
    sections: {
      early_life: "Ku dhashay Muqdisho, wuxuuna ku koray deegaan magaalada caasimadda ah...",
      education: "Waxbarashadiisa sare waxa uu ka qaatay jaamacado ku yaalla gudaha iyo dibadda...",
      career: "Shaqooyin badan ayuu ka soo qabtay safaarado, hay'ado caalami ah, iyo xukuumado kala duwan...",
      achievements: "Waxa lagu xusuustaa tallaabooyin la xiriira dagaalka lagula jiro kooxaha hubeysan iyo nidaaminta maaliyadda...",
      controversies: "Waxaa jiray eedeymo siyaasadeed oo ku saabsan muddo-kordhin iyo xiisado doorasho...",
      public_influence: "Saameyn weyn ayuu ku yeeshay doodaha siyaasadeed ee Soomaaliya muddadii uu xilka hayay..."
    },
    media: [
      {type: "photo", url: "https://picsum.photos/400/300?random=1", caption: "Sawir rasmi ah oo xafiiska madaxweynaha."}
    ],
    relations: [
      {name: "Hassan Sheikh Mohamud", relation_type: "Predecessor / Successor"},
      {name: "Cabinet of Somalia", relation_type: "Worked With"}
    ]
  },
  {
    id: 2,
    name: "Asha Ahmed",
    is_verified: true,
    aka: "Asha A.",
    gender: "Female",
    dob: "1984-03-09",
    pob: "Hargeisa, Somalia",
    nationality: "Somali",
    status: "Alive",
    primary_role: "Business",
    sub_category: "Entrepreneur",
    tags: ["Entrepreneur", "Women Leadership", "Mogadishu", "Tech Startup"],
    summary: "Asha Ahmed is a Somali entrepreneur known for founding a technology startup supporting youth employment.",
    sections: {
      early_life: "Waxay ku dhalatay Hargeysa, iyadoo ku barbaartay deegaan ganacsi iyo dhaqan shaqo-jecel...",
      education: "Waxay baratay maaraynta ganacsiga iyo teknoolojiyadda macluumaadka...",
      career: "Waxay aasaastay shirkad dijitaal ah oo shaqo-abuur u sameysa dhalinyarada...",
      achievements: "Waxaa lagu abaal-mariyay billado caalami ah oo la xiriira hal-abuurnimada ganacsiga...",
      public_influence: "Waxay dhiirri-gelisaa gabdhaha Soomaaliyeed ee rabta in ay ganacsi bilaabaan."
    },
    media: [
      {type: "photo", url: "https://picsum.photos/400/300?random=2", caption: "Sawir xaflad abaal-marin ganacsi ah."}
    ],
    relations: [
      {name: "Somali Business Council", relation_type: "Member"},
      {name: "Youth Innovation Hub", relation_type: "Founder"}
    ]
  },
  {
    id: 3,
    name: "Sheikh Abdullahi Hassan",
    aka: "Sh. Abdullahi",
    gender: "Male",
    dob: "1955-01-02",
    pob: "Galkacyo, Somalia",
    nationality: "Somali",
    status: "Deceased",
    primary_role: "Religion",
    sub_category: "Islamic Scholar",
    tags: ["Islamic Scholar", "Quran Teacher", "Galkacyo"],
    summary: "Sheikh Abdullahi Hassan was a respected Somali Islamic scholar and Quran teacher.",
    sections: {
      early_life: "Waxa uu ku dhashay Galkacyo, isagoo yaraantiisii baran jiray Qur'aanka Kariimka...",
      education: "Waxa uu waxbarasho diini ah ku soo qaatay xarumo cilmiga shareecada ah...",
      career: "Sanado badan ayuu ka shaqeeyay mac-hadyada diinta iyo xarumaha Qur'aanka...",
      achievements: "Boqolaal arday ayuu Qur'aan iyo fiqi ku baray gudaha iyo dibadda...",
      public_influence: "Wuxuu caan ku ahaa fatwooyin dhexdhexaad ah iyo wacyigelin nabadeed."
    },
    media: [],
    relations: [
      {name: "Local Mosques Network", relation_type: "Teacher"},
    ]
  },
  {
    id: 4,
    name: "Dr. Ali Jibril",
    is_verified: false,
    aka: "Dr. Ali",
    gender: "Male",
    dob: "1970-11-21",
    pob: "Borama, Somalia",
    nationality: "Somali",
    status: "Alive",
    primary_role: "Science & Technology",
    sub_category: "Medical Doctor",
    tags: ["Healthcare", "Borama", "Public Health", "University Professor"],
    summary: "Dr. Ali Jibril is a leading public health expert and professor at Amoud University.",
    sections: {
      early_life: "Born in Borama, he showed early aptitude for sciences.",
      education: "Studied Medicine in Italy and Public Health in the UK.",
      career: "Returned to Somalia to help establish medical faculties.",
      achievements: "Published over 20 papers on tropical diseases in the Horn of Africa."
    },
    media: [
      {type: "photo", url: "https://picsum.photos/400/300?random=3", caption: "Dr. Ali at a conference."}
    ],
    relations: [
      {name: "Amoud University", relation_type: "Professor"},
      {name: "Ministry of Health", relation_type: "Advisor"}
    ]
  },
  {
    id: 5,
    name: "Fartun Abdi",
    aka: "Fartun",
    gender: "Female",
    dob: "1990-06-15",
    pob: "Kismayo, Somalia",
    nationality: "Somali",
    status: "Alive",
    primary_role: "Sports",
    sub_category: "Athlete",
    tags: ["Kismayo", "Athletics", "Olympics", "Youth Role Model"],
    summary: "Fartun Abdi is a professional sprinter who has represented Somalia in international competitions.",
    sections: {
      early_life: "Started running in local competitions in Kismayo.",
      career: "Trained in difficult conditions to reach national level.",
      achievements: "Won regional medals and participated in the Olympics."
    },
    media: [],
    relations: []
  },
    {
    id: 6,
    name: "Abdi Warsame",
    is_verified: true,
    aka: "Warsame",
    gender: "Male",
    dob: "1950-01-01",
    pob: "Baidoa, Somalia",
    nationality: "Somali",
    status: "Deceased",
    primary_role: "Culture & Arts",
    sub_category: "Poet",
    tags: ["Poetry", "Literature", "Baidoa", "Cultural Heritage"],
    summary: "Abdi Warsame was a renowned poet known for his patriotic verses.",
    sections: {
      early_life: "Grew up in a family of orators.",
      career: "Composed poems that were broadcast nationwide.",
      public_influence: "His poems are still taught in schools."
    },
    media: [
        {type: "photo", url: "https://picsum.photos/400/300?random=4", caption: "Abdi reciting a poem in 1980."}
    ],
    relations: []
  }
];

export const TOP_LEVEL_CATEGORIES = [
  "Politics",
  "Governance",
  "Business",
  "Culture & Arts",
  "Religion",
  "Security & Military",
  "Civil Society",
  "Sports",
  "Science & Technology",
  "History & Legacy People"
];

export const TAGS_LIST = [
  "Mogadishu",
  "Galkacyo",
  "Hargeisa",
  "Kismayo",
  "Baidoa",
  "Borama",
  "Federal Parliament",
  "2026 Elections",
  "Youth Empowerment",
  "Entrepreneur",
  "Islamic Scholar",
  "President",
  "Tech Startup",
  "Healthcare",
  "Education",
  "Poetry",
  "Diaspora"
];