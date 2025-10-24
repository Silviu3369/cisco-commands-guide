import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: "class", // Permite modul dark bazat pe clasa HTML
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Include paginile (dacă vei folosi directorul pages)
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Include componentele
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Include directorul app (pentru App Router)
  ],
  theme: {
      extend: {
          colors: { // Culori definite pentru temă (folosind variabile CSS definite în globals.css)
              background: 'hsl(var(--background))',
              foreground: 'hsl(var(--foreground))',
              card: {
                  DEFAULT: 'hsl(var(--card))',
                  foreground: 'hsl(var(--card-foreground))'
              },
              popover: {
                  DEFAULT: 'hsl(var(--popover))',
                  foreground: 'hsl(var(--popover-foreground))'
              },
              primary: {
                  DEFAULT: 'hsl(var(--primary))',
                  foreground: 'hsl(var(--primary-foreground))'
              },
              secondary: {
                  DEFAULT: 'hsl(var(--secondary))',
                  foreground: 'hsl(var(--secondary-foreground))'
              },
              muted: {
                  DEFAULT: 'hsl(var(--muted))',
                  foreground: 'hsl(var(--muted-foreground))'
              },
              accent: {
                  DEFAULT: 'hsl(var(--accent))',
                  foreground: 'hsl(var(--accent-foreground))'
              },
              destructive: {
                  DEFAULT: 'hsl(var(--destructive))',
                  foreground: 'hsl(var(--destructive-foreground))'
              },
              border: 'hsl(var(--border))',
              input: 'hsl(var(--input))',
              ring: 'hsl(var(--ring))',
              chart: { // Culori pentru grafice (dacă sunt folosite)
                '1': 'hsl(var(--chart-1))',
                '2': 'hsl(var(--chart-2))',
                '3': 'hsl(var(--chart-3))',
                '4': 'hsl(var(--chart-4))',
                '5': 'hsl(var(--chart-5))'
              }
          },
          borderRadius: { // Definirea razelor de bordură pe baza variabilei --radius
              lg: 'var(--radius)',
              md: 'calc(var(--radius) - 2px)',
              sm: 'calc(var(--radius) - 4px)'
          },
          keyframes: { // Adăugat din tailwindcss-animate (exemplu)
             "accordion-down": {
                from: { height: "0" },
                to: { height: "var(--radix-accordion-content-height)" },
             },
             "accordion-up": {
               from: { height: "var(--radix-accordion-content-height)" },
               to: { height: "0" },
             },
             // Alte keyframes definite de shadcn/ui pot fi aici
           },
           animation: { // Adăugat din tailwindcss-animate (exemplu)
             "accordion-down": "accordion-down 0.2s ease-out",
             "accordion-up": "accordion-up 0.2s ease-out",
           },
      }
  },
  plugins: [
      tailwindcssAnimate, // Plugin pentru animații
      // Poți adăuga alte plugin-uri Tailwind aici (ex: @tailwindcss/typography)
  ],
};
export default config;
