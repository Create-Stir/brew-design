/**
 * Shared dummy data for all Claude Design samples.
 * Field comments describe what each value maps to in production API types.
 */

// ─── MOVIE CARD ───────────────────────────────────────────────
export interface SampleMovie {
  id: number; // campaign content ID
  title: string; // localized_title
  year: string; // release year
  genre: string; // primary genre
  country?: string; // production country ISO
  thumbnail: string; // project_poster URL (portrait 2:3)
  backdrop: string; // project_backdrop URL (landscape 16:9)
  description: string; // short_description / synopsis
  duration?: string; // formatted runtime e.g. "2h 15m"
  vod_tag?: string | null; // "New" | "Trending" | "Hot" | festival name
  progress?: number; // 0–100 watch progress %
  director?: string;
  metadata?: {
    card_style?: "horizontal" | "vertical" | "vhs" | "dvd";
    director_name?: string;
  };
  is_svod?: boolean;
  is_store_content?: boolean;
}

export const SAMPLE_MOVIES: SampleMovie[] = [
  {
    id: 1038392,
    title: "Past Lives",
    year: "2023",
    genre: "Drama",
    country: "US",
    thumbnail: "https://image.tmdb.org/t/p/w500/kxQrKDyq2DW0u2X9AkcRQsKAvbW.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/9DYFYhmbXRGsMhfUgXM3VSP9uLX.jpg",
    description: "Nora and Hae Sung, two deeply connected childhood friends, are wrested apart after Nora's family emigrates from South Korea.",
    duration: "1h 46m",
    vod_tag: "New",
    metadata: { card_style: "vertical" },
  },
  {
    id: 338969,
    title: "The Toxic Avenger",
    year: "2025",
    genre: "Action",
    country: "US",
    thumbnail: "https://image.tmdb.org/t/p/w500/sIonGSpGNtH72OzbJllPOEMNjVU.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/wyg8OaiDFru4NWuEnhCIsF3W1Ek.jpg",
    description: "When a downtrodden janitor is exposed to a catastrophic toxic accident, he's transformed into The Toxic Avenger.",
    duration: "1h 42m",
    vod_tag: "Trending",
    metadata: { card_style: "horizontal" },
  },
  {
    id: 1311031,
    title: "Demon Slayer: Infinity Castle",
    year: "2025",
    genre: "Animation",
    country: "JP",
    thumbnail: "https://image.tmdb.org/t/p/w500/sUsVimPdA1l162FvdBIlmKBlWHx.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/1RgPyOhN4DRs225BGTlHJqCudII.jpg",
    description: "The Demon Slayer Corps are drawn into the Infinity Castle for the final battle against Muzan Kibutsuji.",
    duration: "2h 36m",
    vod_tag: "Hot",
    metadata: { card_style: "vhs", director_name: "Haruo Sotozaki" },
    director: "Haruo Sotozaki",
  },
  {
    id: 755898,
    title: "War of the Worlds",
    year: "2025",
    genre: "Sci-Fi",
    thumbnail: "https://image.tmdb.org/t/p/w500/yvirUYrva23IudARHn3mMGVxWqM.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/iZLqwEwUViJdSkGVjePGhxYzbDb.jpg",
    description: "A top analyst tracks potential threats through mass surveillance until an unknown entity attacks.",
    duration: "1h 31m",
    progress: 62, // continue watching
    metadata: { card_style: "vertical" },
  },
];

// ─── SHOWCASE HERO ────────────────────────────────────────────
export interface SampleShowcaseMovie {
  id: number;
  title: string;
  slug: string;
  backgroundImage: string; // full-width backdrop
  logo?: string; // title treatment PNG
  description: string;
  infoLine: string; // "2023 · Drama · 1h 46m"
  primaryColor: string; // hex for gradient theming
  gradient: string; // CSS gradient string
  ctaText: string; // "Watch Now" | "Rent $4.99" | "Coming Soon"
  vodTag?: string;
  genres?: string[];
  rentPriceFormatted?: string;
  isComingSoon?: boolean;
}

export const SAMPLE_SHOWCASE: SampleShowcaseMovie = {
  id: 1038392,
  title: "Past Lives",
  slug: "past-lives",
  backgroundImage: "https://image.tmdb.org/t/p/original/9DYFYhmbXRGsMhfUgXM3VSP9uLX.jpg",
  logo: "https://createstir.b-cdn.net/stir-static/sample-logo.png",
  description: "Two childhood friends reunite decades later, confronting the paths their lives have taken.",
  infoLine: "2023 · Drama · Romance · 1h 46m",
  primaryColor: "#8B7355",
  gradient: "linear-gradient(to top, #8B7355 0%, transparent 60%)",
  ctaText: "Watch Now",
  vodTag: "New",
  genres: ["Drama", "Romance"],
  rentPriceFormatted: "$4.99",
};

// ─── CAST ─────────────────────────────────────────────────────
export interface SampleCastMember {
  id: number;
  full_name: string;
  avatar_url: string;
  job: string | string[]; // "Actor" | ["Director", "Writer"]
  characters?: string[]; // role names
}

export const SAMPLE_CAST: SampleCastMember[] = [
  {
    id: 1,
    full_name: "Greta Lee",
    avatar_url: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    job: "Actor",
    characters: ["Nora"],
  },
  {
    id: 2,
    full_name: "Teo Yoo",
    avatar_url: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    job: "Actor",
    characters: ["Hae Sung"],
  },
  {
    id: 3,
    full_name: "Celine Song",
    avatar_url: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    job: ["Director", "Writer"],
  },
];

// ─── DIRECTOR SHOWCASE ────────────────────────────────────────
export interface SampleDirector {
  name: string;
  movie: string;
  year: string;
  poster: string;
  slug: string;
}

export const SAMPLE_DIRECTORS: SampleDirector[] = [
  {
    name: "Wong Kar-wai",
    movie: "In the Mood for Love",
    year: "2000",
    poster: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    slug: "in-the-mood-for-love",
  },
  {
    name: "Bong Joon-ho",
    movie: "Parasite",
    year: "2019",
    poster: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    slug: "parasite",
  },
];

// ─── LIBRARY ──────────────────────────────────────────────────
export interface SampleLibraryMovie extends SampleMovie {
  purchase_type: "rent" | "buy"; // how user acquired
  order_expires_at?: string | null; // ISO date for rental expiry
  progress?: number;
}

export const SAMPLE_LIBRARY_MOVIE: SampleLibraryMovie = {
  ...SAMPLE_MOVIES[3],
  purchase_type: "rent",
  order_expires_at: "2026-06-20T00:00:00Z",
  progress: 62,
};

// ─── REVIEWS ──────────────────────────────────────────────────
export interface SampleReview {
  id: number;
  user_name: string;
  rating: number; // 0–10 scale
  heading: string;
  body: string;
  created_at: string;
}

export const SAMPLE_REVIEW: SampleReview = {
  id: 1,
  user_name: "FilmLover42",
  rating: 9,
  heading: "A quiet masterpiece",
  body: "Celine Song captures the ache of paths not taken with devastating precision.",
  created_at: "2026-03-15",
};

// ─── SUBSCRIPTION ─────────────────────────────────────────────
export interface SampleSubscriptionPlan {
  id: number;
  name: string; // "Monthly" | "Yearly"
  description: string | null;
  price: number;
  perceived_price: number | null; // strikethrough price
  currency_symbol: string;
  interval_unit: "monthly" | "yearly";
}

export const SAMPLE_PLANS: SampleSubscriptionPlan[] = [
  {
    id: 1,
    name: "Monthly",
    description: "Full access to Brew+ catalog",
    price: 9.99,
    perceived_price: null,
    currency_symbol: "$",
    interval_unit: "monthly",
  },
  {
    id: 2,
    name: "Yearly",
    description: "Best value — 2 months free",
    price: 99.99,
    perceived_price: 119.88,
    currency_symbol: "$",
    interval_unit: "yearly",
  },
];

// ─── EDITORIAL (SUBTEXT) ──────────────────────────────────────
export interface SampleBlogArticle {
  slug: string;
  title: string;
  subtitle?: string;
  cover_img: string;
  badge_text?: string; // category tag e.g. "Essay"
  tagline?: string;
}

export const SAMPLE_BLOG_ARTICLES: SampleBlogArticle[] = [
  {
    slug: "slow-cinema-returns",
    title: "Why Slow Cinema Is Having a Moment",
    subtitle: "The patience economy of independent film",
    cover_img: "https://image.tmdb.org/t/p/original/9DYFYhmbXRGsMhfUgXM3VSP9uLX.jpg",
    badge_text: "Essay",
    tagline: "On the resurgence of long takes and quiet frames",
  },
  {
    slug: "directors-to-watch-2026",
    title: "10 Directors to Watch in 2026",
    cover_img: "https://image.tmdb.org/t/p/original/wyg8OaiDFru4NWuEnhCIsF3W1Ek.jpg",
    badge_text: "List",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────
export interface SampleFaqItem {
  question: string;
  answer: string; // supports HTML
}

export const SAMPLE_FAQ: SampleFaqItem[] = [
  {
    question: "How long do I have to watch a rental?",
    answer: "You have 48 hours to finish watching once you press play. The rental period starts at first playback, not purchase.",
  },
  {
    question: "Can I download movies for offline viewing?",
    answer: "Offline downloads are available on iOS and Android apps. Web playback requires an active internet connection.",
  },
  {
    question: "What's included in Brew+?",
    answer: "Brew+ gives you unlimited streaming access to our curated SVOD catalog of independent and world cinema.",
  },
];

// ─── TESTIMONIAL ──────────────────────────────────────────────
export interface SampleTestimonial {
  name: string;
  role: string;
  image: string;
  review: string;
  rating?: number;
}

export const SAMPLE_TESTIMONIAL: SampleTestimonial = {
  name: "IndieWire",
  role: "Publication",
  image: "https://createstir.b-cdn.net/stir-static/sample-logo.png",
  review: "A platform that treats independent cinema with the respect it deserves.",
  rating: 9,
};
