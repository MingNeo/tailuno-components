module.exports = {
  content: [
    './docs/**/*.{js,ts,vue,md}',
    './packages/**/*.{js,ts,vue,md}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        // primary: '#3f51b5',
        secondary: '#ff9800',
        accent: '#795548',
        error: '#f44336',
        warning: '#ffeb3b',
        info: '#2196f3',
        success: '#4caf50',
      }
    },
  },
  plugins: [],
}
