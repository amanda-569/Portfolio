import { Category } from '../models/category';
export const CATEGORY: Category[] = [
  { "id": 1, "slug": "back-end", "name": "Back End" },
  { "id": 2, "slug": "front-end", "name": "Front End" },
  { "id": 3, "slug": "full-stack", "name": "Full Stack" }
]

export function getCategoryNameBySlug(slug: string) : Category | undefined{
  for (var category of CATEGORY) {
    if (category.slug === slug) {
      return category;
    }
  }

  return undefined;
}