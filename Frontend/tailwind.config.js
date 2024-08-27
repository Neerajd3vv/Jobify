/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily:{
        Hind: ["Manrope", "sans-serif"],
        Actor: ["Actor", "sans-serif"],
        Afacad: ["Afacad", "sans-serif"],
        Fjalla: ["Fjalla One", "sans-serif"],
        Abril: ["Abril Fatface", "serif"],
        Protest: ["Protest Strike", "sans-serif"],
        rubikone: ["Rubik Mono One", "monospace"],
        Merri: ["Merriweather", "serif"],
        Poppins: ["Manrope", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Mullish: ["Mulish", "sans-serif"],
        Bebus: ["Bebas Neue", "sans-serif"],
        Kanit: ["Kanit", "sans-serif"],
        Sora: ["Sora", "sans-serif"],
        rowdies: ["Rowdies", "sans-serif"],
        proteststrike: ["Protest Strike", "sans-serif"],
        passion: ["Passion One", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        railway: ["Raleway", "sans-serif"],
        playflair: ["Playfair Display", "serif"],
        ptserif: ["PT Serif", "serif"],
        lora: ["Lora", "serif"],
        Gelasio: ["Gelasio", "serif"],
        rubikonee:  ["Rubik Mono One", "monospace"],

      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}