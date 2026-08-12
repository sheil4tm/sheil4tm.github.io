export const SECTIONS = [
  'books',
  'film',
  'series',
  'tech',
  'esports',
  'misc',
] as const;

export type Section = (typeof SECTIONS)[number];

export const SECTION_META: Record<
  Section,
  { label: string; description: string; accentClass: string }
> = {
  books: {
    label: 'Books',
    description: 'Stories, pages, and the moods they leave behind.',
    accentClass: 'bg-shelf-books/20 text-lilac-deep',
  },
  film: {
    label: 'Film',
    description: 'Movies worth pausing for — and the ones that linger.',
    accentClass: 'bg-shelf-film/25 text-mochi-deep',
  },
  series: {
    label: 'Series',
    description: 'Long-form worlds, episode by episode.',
    accentClass: 'bg-shelf-series/25 text-matcha-deep',
  },
  tech: {
    label: 'Tech',
    description: 'Tools, ideas, and little experiments in code.',
    accentClass: 'bg-shelf-tech/25 text-lilac-deep',
  },
  esports: {
    label: 'Esports',
    description: 'Matches, metas, and moments from the competitive scene.',
    accentClass: 'bg-shelf-esports/25 text-matcha-deep',
  },
  misc: {
    label: 'Misc',
    description: 'Everything else that belongs on the shelf today.',
    accentClass: 'bg-shelf-misc/30 text-muted',
  },
};

export function isSection(value: string): value is Section {
  return (SECTIONS as readonly string[]).includes(value);
}
