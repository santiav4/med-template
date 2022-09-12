/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                hero: "url('/src/images/hero.jpg')",
                hero1: "url('/src/images/hero1.jpg')",
                hero2: "url('/src/images/hero2.jpg')",
                hero3: "url('/src/images/hero3.jpg')",
                hero4: "url('/src/images/hero4.jpg')",
                hero5: "url('/src/images/hero3.svg')",
                hero6: "url('/src/images/hero6.svg')",
                hero7: "url('/src/images/hero7.jpg')",
                hero8: "url('/src/images/hero8.svg')",
            },
        },
        backgroundSize: {
            auto: "auto",
            cover: "cover",
            contain: "contain",
            "100%": "100%",
            16: "4rem",
        },
    },
    plugins: [],
};
