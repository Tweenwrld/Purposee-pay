
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        playfair: ["'Playfair Display'", "serif"],
      },
      colors: {
        // Purpose Pay Brand Colors
        primary: {
          DEFAULT: "#28A745", // Green
          foreground: "#ffffff",
          50: "#f0f9f4",
          100: "#dcf2e3",
          200: "#bbe5cb",
          300: "#8fd1a7",
          400: "#5cb67d",
          500: "#28A745",
          600: "#228B3D",
          700: "#1e7235",
          800: "#1a5a2e",
          900: "#164b27",
        },
        secondary: {
          DEFAULT: "#0A3D62", // Navy
          foreground: "#ffffff",
          50: "#f0f4f8",
          100: "#d9e5f0",
          200: "#b3cce0",
          300: "#7da6cb",
          400: "#4a7db0",
          500: "#0A3D62",
          600: "#093556",
          700: "#082d4a",
          800: "#07263e",
          900: "#061f32",
        },
        accent: {
          DEFAULT: "#F39C12", // Orange
          foreground: "#ffffff",
          50: "#fef7ed",
          100: "#fdecd4",
          200: "#fbd6a8",
          300: "#f8b871",
          400: "#f59738",
          500: "#F39C12",
          600: "#e8880a",
          700: "#c06d0a",
          800: "#98530f",
          900: "#7a4410",
        },
        muted: {
          DEFAULT: "#F5F6FA", // Light Gray
          foreground: "#374151",
        },
        background: "#ffffff",
        foreground: "#1f2937",
        border: "#e5e7eb",
        input: "#f9fafb",
        ring: "#28A745",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#1f2937"
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#1f2937"
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff"
        },
        sidebar: {
          DEFAULT: "#ffffff",
          foreground: "#1f2937",
          primary: "#28A745",
          'primary-foreground': "#ffffff",
          accent: "#F39C12",
          'accent-foreground': "#ffffff",
          border: "#e5e7eb",
          ring: "#28A745"
        }
      },
      borderRadius: {
        lg: '8px',
        md: '6px',
        sm: '4px',
        xl: '12px',
        '2xl': '16px'
      },
      boxShadow: {
        'purpose': "0 4px 6px -1px rgba(40, 167, 69, 0.1), 0 2px 4px -1px rgba(40, 167, 69, 0.06)",
        'purpose-lg': "0 10px 15px -3px rgba(40, 167, 69, 0.1), 0 4px 6px -2px rgba(40, 167, 69, 0.05)",
        'lift': "0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 10px -3px rgba(0, 0, 0, 0.05)",
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      minWidth: {
        '44': '11rem', // 44px tap targets
      },
      minHeight: {
        '44': '11rem', // 44px tap targets
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(40, 167, 69, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(40, 167, 69, 0.6)' }
        },
        'lift': {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-2px)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'slide-out-right': 'slide-out-right 0.3s ease-out',
        'slide-up': 'slide-up 0.4s ease-out',
        'fade-in-up': 'fade-in-up 0.6s cubic-bezier(.16,1,.3,1)',
        'glow': 'glow 2s ease-in-out infinite',
        'lift': 'lift 0.2s ease-out forwards'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
