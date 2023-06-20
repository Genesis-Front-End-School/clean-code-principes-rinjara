declare interface Course {
  id: string;
  title: string;
  launchDate: string;
  tags: string[];
  status: string;
  description: string;
  duration: number;
  lessons: Lesson[];
  lessonsCount: number;
  containsLockedLessons: boolean;
  previewImageLink: string;
  rating: number;
  meta: CourseMeta | null;
}

interface CourseMeta {
  slug: string;
  skills?: string[];
  courseVideoPreview?: {
    link: string;
    duration: number;
    previewImageLink: string;
  };
}

interface Lesson {
  id: string;
  title: string;
  duration: number;
  order: number;
  type: string;
  status: string;
  link: string;
  previewImageLink: string;
  meta: CourseMeta | null;
}
