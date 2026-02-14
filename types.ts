export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum SectionId {
  HERO = 'hero',
  SERVICES = 'services',
  PHILOSOPHY = 'philosophy',
  CONTACT = 'contact'
}