import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  content: ["./index.html", './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['aqua', 'forest'],
    darkTheme: 'forest',
    base: true,
    styled: true,
    utils: true,
    themeRoot: ":root",
    logs: true,
  },
  plugins: [daisyui]
} satisfies Config;
