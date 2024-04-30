import { Tag } from '../models/tag';

export const TAGS: Tag[] = [
  { "id": 1, "name": "JavaScript", "slug": "javascript" },
  { "id": 2, "name": "CSS", "slug": "css" },
  { "id": 3, "name": "React", "slug": "react" },
  { "id": 4, "name": "C#", "slug": "csharp" },
  { "id": 5, "name": "SQL", "slug": "sql" },
  { "id": 6, "name": "MVC", "slug": "mvc" },
]
export function getTagNameBySlug(slug : string) : Tag | undefined{
  for (var tag of TAGS) {
    if (tag.slug === slug) {
      return tag;
    }
  }
  return undefined;
}