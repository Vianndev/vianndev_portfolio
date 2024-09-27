/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}","./js/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins-regular': ['Poppins Regular', 'sans-serif'],
        'poppins-italic': ['Poppins Italic', 'sans-serif'],
        'poppins-thin': ['Poppins Thin', 'sans-serif'],
        'poppins-thin-italic': ['Poppins Thin Italic', 'sans-serif'],
        'poppins-extralight': ['Poppins ExtraLight', 'sans-serif'],
        'poppins-extralight-italic': ['Poppins ExtraLight Italic', 'sans-serif'],
        'poppins-light': ['Poppins Light', 'sans-serif'],
        'poppins-light-italic': ['Poppins Light Italic', 'sans-serif'],
        'poppins-medium': ['Poppins Medium', 'sans-serif'],
        'poppins-medium-italic': ['Poppins Medium Italic', 'sans-serif'],
        'poppins-semibold': ['Poppins SemiBold', 'sans-serif'],
        'poppins-semibold-italic': ['Poppins SemiBold Italic', 'sans-serif'],
        'poppins-bold': ['Poppins Bold', 'sans-serif'],
        'poppins-bold-italic': ['Poppins Bold Italic', 'sans-serif'],
        'poppins-extrabold': ['Poppins ExtraBold', 'sans-serif'],
        'poppins-extrabold-italic': ['Poppins ExtraBold Italic', 'sans-serif'],
        'poppins-black': ['Poppins Black', 'sans-serif'],
        'poppins-black-italic': ['Poppins Black Italic', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "synthwave", "cupcake"],
  },
}

