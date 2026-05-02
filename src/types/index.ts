export interface TimelineEvent {
  id: string;
  image: string;
  alt: string;
  caption: string;
}

export interface VideoEvent {
  id: string;
  src: string;
  caption: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface TimelineSection {
  id: string;
  title: string;
  events: TimelineEvent[];
  videos?: VideoEvent[];
}
