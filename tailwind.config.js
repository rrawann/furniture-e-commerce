/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'card': "url('/public/assets/images/thumbnail-background.svg')",
      },
      colors: {
        customColor: '#FAD7A0',
        iconColor:'#FCCB84',
        bgCustomColor:'#FEF0CD',
        "pale-blue": "#F5F6FF",
      },
      // fontSize: {
      //   xs: ['12px', '16px'],
      //   sm: ['14px', '20px'],
      //   base: ['16px', '19.5px'],
      //   lg: ['18px', '21.94px'],
      //   xl: ['20px', '24.38px'],
      //   '2xl': ['24px', '29.26px'],
      //   '3xl': ['28px', '50px'],
      //   '4xl': ['48px', '58px'],
      //   '8xl': ['96px', '106px']
      // },
    },
  },
  plugins: [],
};
