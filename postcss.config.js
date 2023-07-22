export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Purge CSS?
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}
