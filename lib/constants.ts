export const CATEGORIES = [
  'Epstein Files',
  'Trump',
  'American Politics',
  'Investigations',
  'Deep State',
  'Opinion',
]

export function slugifyCategory(category: string): string {
  return category
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

const CATEGORY_COLORS: Record<string, string> = {
  'epstein-files': '#B91C1C',
  'trump': '#1D4ED8',
  'american-politics': '#166534',
  'investigations': '#B45309',
  'deep-state': '#475569',
  'opinion': '#7C3AED',
}

export function getCategoryColor(category: string): string {
  return CATEGORY_COLORS[slugifyCategory(category)] ?? '#B91C1C'
}

export const ACCENT_COLORS = [
  { label: 'Crimson', value: '#B91C1C' },
  { label: 'Navy', value: '#1D4ED8' },
  { label: 'Forest', value: '#166534' },
  { label: 'Amber', value: '#B45309' },
  { label: 'Slate', value: '#475569' },
  { label: 'Burgundy', value: '#9D174D' },
  { label: 'Teal', value: '#0E7490' },
  { label: 'Violet', value: '#7C3AED' },
]
