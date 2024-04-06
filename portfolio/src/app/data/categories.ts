import { Category } from '../models/category';
export const CATEGORY: Category[] = [
  { "id": 1, "slug": "full-stack", "name": "Full Stack" },
  { "id": 2, "slug": "front-end", "name": "Front End" }
]

export function getCategoryNameBySlug(slug: string) : Category | undefined{
  for (var category of CATEGORY) {
    if (category.slug === slug) {
      return category;
    }
  }

  return undefined;
}