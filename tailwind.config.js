module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                pop: ["Poppins", "sans-serif"],
                sora: ["Sora", "sans-serif"],
            },
            animation: {
                "spin-slow": "spin 20s linear infinite",
            },
        },
    },
    plugins: [],
};
