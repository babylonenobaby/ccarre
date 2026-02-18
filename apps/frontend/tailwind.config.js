/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/app/**/*.{ts,tsx}",
        "./src/components/**/*.{ts,tsx}",
        "./src/pages/**/*.{ts,tsx}", // au cas où
        "./src/widgets/**/*.{ts,tsx}" // si tu crées d’autres dossiers
    ],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
