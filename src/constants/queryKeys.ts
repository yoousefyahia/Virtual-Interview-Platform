export const queryKeys = {
  home: {
    stats: ["home", "stats"] as const,
  },

  auth: {
    profile: ["auth", "profile"] as const,
  },

  company: {
    list: ["company"] as const,
    details: (id: string) => ["company", id] as const,
  },

  interview: {
    list: ["interview"] as const,
    details: (id: string) => ["interview", id] as const,
  },
};