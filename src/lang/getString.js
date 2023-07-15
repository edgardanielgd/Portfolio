import es from "./langs/es";
import en from "./langs/en";

let langs = {
    es, en
};

const getString = (lang, key) => {
    const targetLang = langs[lang] || langs.en;

    return targetLang[key];
}

export default getString;