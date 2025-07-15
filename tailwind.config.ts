import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bg:{
          DEFAULT:'#101820'
        },
        gold:{
          DEFAULT:'#FFD700'
        },
        pink:{
          DEFAULT:'#F72585'
        },
        purple:{
          DEFAULT:'#8A2BE2'
        },
        blue:{
          DEFAULT:'#1F3A93'
        },
        neonPurple:{
          DEFAULT: "#9400ff",
        },
        neonPink:{
          DEFAULT:  "#ff00ff",
        },
        neongreen:{
          DEFAULT: "#00FF66",
        },
        neonblue:{
          DEFAULT: "#00FFFF",
        },
        
      },
      textShadow: {
        neon: "0 0 5px #00eaff, 0 0 10px #00eaff, 0 0 15px #00eaff",
        pinkGlow: "0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 15px #ff00ff",
      },
          },
  },
  plugins: [],
} satisfies Config;
