/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './assets/js/**/*.js'],
    theme: {
        extend: {
            colors: {
                brand: '#f97316',
                ink: '#181818',
                surface: '#f6f6f4'
            },
            fontFamily: {
                sans: ['Inter', 'Arial', 'sans-serif'],
                display: ['Inter Tight', 'Inter', 'Arial', 'sans-serif'],
                arabic: ['IBM Plex Sans Arabic', 'Arial', 'sans-serif']
            }
        }
    },
    plugins: []
};
