/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#6834c7',
                'primary-contrast': '#FFF',
                body: '#dfdde8',
            }
        }
    },
    plugins: [],
}
