export interface Brain {
  name: string;
  role: string;
  /** Path or URL to avatar image. Falls back to `color` if omitted. */
  image?: string;
  /** Fallback avatar background color (used when no image). */
  color: string;
  bio?: string;
  linkedin?: string;
}

export const brains: Brain[] = [
  {
    name: 'Frank Ngoga',
    role: 'Chief God Mode',
    color: '#00c8a0',
  },
  {
    name: 'Loic Ishimwe',
    role: 'Chief Magician',
    color: '#ff3399',
  },
];
