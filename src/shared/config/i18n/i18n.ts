import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-fs-backend";
import { getOptions } from "./settings";

const initI18next = async (lng: string, ns: string | string[] = ["common"]) => {
    if (!i18next.isInitialized) {
        await i18next
            .use(Backend)
            .use(initReactI18next)
            .init({
                ...getOptions(lng, ns),
            });
    }
    return i18next;
};

export const useServerTranslation = async (
    lng: string,
    ns: string | string[] = ["common"]
) => {
    const i18n = await initI18next(lng, ns);
    return {
        t: i18n.getFixedT(lng, ns),
    };
};
