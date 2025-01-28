export interface FormData {
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  linkedin: string;
  twitter: string;
  facebook: string;
  instagram: string;
  youtube: string;
  tiktok: string;
  github: string;
  location: string;
  image: string;
  socialMedia?: {
    [key: string]: {
      url: string;
      icon: string;
      name: string;
    };
  };
}

export type SignatureProps = FormData;
