import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    daisyui: {
      darkTheme: 'forest',
      themes: ['aqua', 'forest'],
      base: true,
      styled: true,
      utils: true,
      themeRoot: ":root"
    }
  },
  plugins: [daisyui]
} satisfies Config;
