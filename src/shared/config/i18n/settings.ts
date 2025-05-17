import path from "path";

export const fallbackLng = "en";
export const languages = [fallbackLng, "ru"];
export const defaultNS = "common";

export function getOptions(
    lng = fallbackLng,
    ns: string | string[] = defaultNS
) {
    return {
        debug: false,
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns,
        backend: {
            loadPath: path.resolve("./public/locales/{{lng}}/{{ns}}.json"),
        },
        interpolation: {
            escapeValue: false,
        },
    };
}
