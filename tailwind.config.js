/** @type {import('tailwindcss').Config} */

export const tailwindColors = {
  "Gray-1": "#14080E", //Licorice
  "Gray-2": "#212121", //Eerie Black
  "Gray-3": "#333333", //Jet
  "Gray-4": "#666666", //Dim Gray
  "Gray-5": "#7D7E7F", //Gray
  "Gray-6": "#9C9D9E", //Cadet Gray
  "Gray-7": "#ABA8B2", //French Gray
  "Gray-8": "#CED0D0", //Timberwolf
  "Gray-9": "#D7DEE0", //Platinum
  "Gray-10": "#F0F0F0", //Anti-Flash White
  "Gray-11": "#F6F6F6", //Seasalt
};
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...require("tailwindcss/colors"),
      ...tailwindColors,
    },
    extend: {},
  },
  plugins: [],
};
