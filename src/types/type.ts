export interface INewsCard {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string | null;
  lastPublished: string | null;
  source: string;
  rank?: number;
}

export interface IHomeCardSection {
  title: string;
  curationId: string;
  curationType: string;
  link: string | null;
  articles: INewsCard[];
}

export interface IDetailsProps {
  type: string;
  url: string;
  width: number;
  height: number;
  caption: string | null;
  altText: string;
  copyrightHolder: string;
  text: string;
}
