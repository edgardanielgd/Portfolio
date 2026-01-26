type Theme = "light" | "dark";

export const config: Record<string, Record<Theme, string>> = {
    "--portfolio-background-color": { light: "#bcf7db", dark: "#353b34" },
    "--portfolio-navbar-background-color": { light: "#29f293", dark: "#171a16" },
    "--portfolio-primary-text-color": { light: "#2c6919", dark: "#ffffff" },
    "--portfolio-secondary-text-color": { light: "#ffffff", dark: "#2c6919" },
    "--portfolio-secondary-background-color": { light: "#2c6919", dark: "#ffffff" },
    "--portfolio-background-image": {
        light: "url('https://i.imgur.com/5XZQ1YF.png')",
        dark: "url('Background-dark.png')"
    },
    "--portfolio-animation-color": { light: "#87deb5", dark: "#525752" },
};

export const updateTheme = (theme: string): void => {
    const themeColor: Theme = (["light", "dark"].includes(theme) ? theme : "light") as Theme;

    for (const key in config) {
        const value = config[key];
        document.documentElement.style.setProperty(key, value[themeColor]);
    };
}

export default updateTheme;

