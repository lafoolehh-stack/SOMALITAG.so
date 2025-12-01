export interface Media {
  type: string;
  url: string;
  caption: string;
}

export interface Relation {
  name: string;
  relation_type: string;
}

export interface ProfileSections {
  early_life?: string;
  education?: string;
  career?: string;
  achievements?: string;
  controversies?: string;
  public_influence?: string;
  [key: string]: string | undefined;
}

export interface Profile {
  id: number;
  name: string;
  is_verified?: boolean;
  aka?: string;
  gender: string;
  dob: string;
  pob: string;
  nationality: string;
  status: 'Alive' | 'Deceased';
  primary_role: string;
  sub_category?: string;
  tags: string[];
  summary: string;
  sections: ProfileSections;
  media: Media[];
  relations: Relation[];
}

export type ViewState = 'profiles' | 'categories' | 'tags' | 'api';

export type Theme = 'light' | 'dark';
export type Language = 'so' | 'en' | 'ar';
