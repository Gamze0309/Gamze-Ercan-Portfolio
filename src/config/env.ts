/**
 * Environment configuration
 * Centralized access to environment variables with fallbacks
 */

export const config = {
  contact: {
    email: import.meta.env.VITE_EMAIL || "gamze@example.com",
    linkedinUrl:
      import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com/in/gamze",
    githubUrl:
      import.meta.env.VITE_GITHUB_URL || "https://github.com/Gamze0309",
  },
  site: {
    url:
      import.meta.env.VITE_SITE_URL || "https://gamze0309.github.io/Portfolio/",
  },
} as const;
