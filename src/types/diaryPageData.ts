export interface DiaryPageData {
  id: string; // Unique identifier for the diary entry
  location: string; // Location of the diary entry
  title: string; // Title of the diary entry
  description: string; // Description of the diary entry
  date: Date; // Date of the diary entry
  featured?: boolean; // Whether the diary entry is featured
  imageUrl: string; // URL of the preview image for the diary entry
  route: string; // Route to the diary entry page
}

export interface Meta {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  location: string;
  date: string | number;
  route: string;
}
