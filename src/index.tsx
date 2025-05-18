import "@/app/styles/index.scss";
import { Sidebar } from "./widgets/sidebar";
import { Header } from "./widgets/header/ui/header";
import ThemeProvider from "./app/providers/ThemeProvider/themeProvider";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "./shared/config/i18n/routing";

export default async function IndexLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const { locale } = params;

    if (!hasLocale(routing.locales, locale)) {
        // notFound();
        // Заглушка
    }

    return (
        <NextIntlClientProvider>
            <ThemeProvider>
                <div className="main_layout">
                    <Sidebar />
                    <div className="layout">
                        <Header />
                        {children}
                    </div>
                </div>
            </ThemeProvider>
        </NextIntlClientProvider>
    );
}
