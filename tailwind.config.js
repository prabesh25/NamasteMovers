// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/app/**/*.{js,jsx}",
//     "./src/components/**/*.{js,jsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         brand: {
//           50: "#f1f6ff",
//           100: "#e1ebff",
//           200: "#c2d7ff",
//           300: "#9fbfff",
//           400: "#6f9cff",
//           500: "#3b78ff",
//           600: "#1f5ae6",
//           700: "#1645b4",
//           800: "#12388f",
//           900: "#0f2f75",
//         },
//       },
//       boxShadow: {
//         soft: "0 10px 40px rgba(0,0,0,0.08)",
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f1f6ff",
          100: "#e1ebff",
          200: "#c2d7ff",
          300: "#9fbfff",
          400: "#6f9cff",
          500: "#3b78ff",
          600: "#1f5ae6",
          700: "#1645b4",
          800: "#12388f",
          900: "#0f2f75",
        },
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};