export const config = {
    "--portfolio-background-color": { light: "#bcf7db", dark: "#353b34" },
    "--portfolio-navbar-background-color": { light: "#29f293", dark: "#171a16" },
    "--portfolio-primary-text-color": { light: "#2c6919", dark: "#ffffff" },
    "--portfolio-secondary-text-color": { light: "#ffffff", dark: "#2c6919" },
    "--portfolio-secondary-background-color": { light: "#2c6919", dark: "#ffffff" },
    "--portfolio-background-image": {
        light: "url('https://i.imgur.com/5XZQ1YF.png')",
        dark: "url('Background-dark.png')"
    },
    "animation-color": { light: "#77c95d", dark: "#999696" },
};

export const updateTheme = (theme) => {
    // Update css global variables
    const themeColor = ["light", "dark"].includes(theme) ? theme : "light";

    for (const key in config) {
        const value = config[key];
        document.documentElement.style.setProperty(key, value[themeColor]);
    };
}

export default updateTheme;