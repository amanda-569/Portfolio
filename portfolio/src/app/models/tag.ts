export interface Tag {
  id: number;
  name: string;
  slug: string;
  pivot?: {
    projects_id: number;
    tags_id: number;
  };
}
