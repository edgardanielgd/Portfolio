import es from "./langs/es";
import en from "./langs/en";

type Lang = "es" | "en";

let langs: Record<Lang, Record<string, string>> = {
    es, en
};

const getString = (lang: string, key: string): string => {
    const targetLang = langs[lang as Lang] || langs.en;

    return targetLang[key] || "";
}

export default getString;

