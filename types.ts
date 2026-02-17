export type Category = 'Keynote' | 'Workshop';

export interface Takeaway {
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  category: Category;
  title: string;
  targetAudience: string;
  shortDescription: string; // For the card preview
  hook: string; // The Hook / Reality Check
  abstract: string; // The Abstract
  whyCurrent: string; // Why It Feels Current
  experience: string; // Experience
  takeawaysTitle: string; // "Key Takeaways" or "Hands-On Modules"
  takeaways: Takeaway[];
  technicalTakeaway?: string; // Optional for Workshops
}