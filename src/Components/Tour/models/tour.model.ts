
export interface TourData {
  tour: Tour;
}

export interface Tour {
  id: string;
  title: string;
  slug: string;
  translations: any[];
  tours: Tours;
  language: Language;
}

export interface Language {
  slug: string;
}

export interface Tours {
  main: Main;
  features: Features;
  accomodationAndGroup: AccomodationAndGroup;
}

export interface AccomodationAndGroup {
  accommodation: string[];
  groupSize: number;
}

export interface Features {
  difficulty: string[];
  maxaltitude: number;
}

export interface Main {
  mainImage: MainImage;
  title: string;
  tourprice: number;
  tourDuration: string;
}

export interface MainImage {
  node: Node;
}

export interface Node {
  sourceUrl: string;
}