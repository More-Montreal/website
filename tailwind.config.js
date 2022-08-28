module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
  safelist: [
    // key points
    'bg-gray-50', 'bg-red-50', 'bg-blue-50', 'bg-indigo-50', 'bg-green-50',
    'text-gray-900', 'text-red-900', 'text-blue-900', 'text-indigo-900', 'text-green-900',
    // political parties
    'bg-red-100','bg-orange-100','bg-yellow-100','bg-lime-100','bg-green-100',
    'bg-teal-100','bg-cyan-100','bg-blue-100','bg-indigo-100','bg-purple-100','bg-pink-100',

    'bg-red-500','bg-orange-500','bg-yellow-500','bg-lime-500','bg-green-500',
    'bg-teal-500','bg-cyan-500','bg-blue-500','bg-indigo-500','bg-purple-500','bg-pink-500',

    'text-red-800','text-orange-800','text-yellow-800','text-lime-800','text-green-800',
    'text-teal-800','text-cyan-800','text-blue-800','text-indigo-800','text-purple-800','text-pink-800',
  ],
  theme: {
    fontFamily: {
      display: ['Montserrat', 'sans-serif'],
      sans: ['Inter', 'sans-serif'],
      mono: ['monospace']
    },
    extend: {
      colors: {},
    },
  },
};