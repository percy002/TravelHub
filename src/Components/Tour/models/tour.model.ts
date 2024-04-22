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
  introduction: Introduction;
  tourInfo: TourInfo;
}

export interface TourInfo {
  overview: string;
  itineraryContent: ItineraryContent;
}

export interface ItineraryContent {
  day1: Day1;
}

export interface Day1 {
  titulo: string;
  theBestOfTheDay: string;
  content: string;
  image1: null;
}

export interface Introduction {
  introductionContent: IntroductionContent;
  map: Map;
}

export interface IntroductionContent {
  secondaryTitle: string;
  content: null;
}
export interface Map {
  node: NodeMap;
}

export interface NodeMap {
  sourceUrl: string;
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



