export const photo_URL =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const MOVIE_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + import.meta.env.VITE_TMDB_TOKEN,
  },
};
export const IMG_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/GB-en-20260105-TRIFECTA-perspective_9567625f-6eee-4698-956c-bc23e5bcf3df_large.jpg";

export const SUPPORTED_LANG = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "chineese", name: "Chineese" },
];

export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;
