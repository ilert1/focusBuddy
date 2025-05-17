import "@/app/styles/index.scss";
import { Sidebar } from "./widgets/sidebar";
import { Header } from "./widgets/header/ui/header";
import ThemeProvider from "./app/providers/ThemeProvider/themeProvider";
import I18nProvider from "./app/providers/i18nProvider";

export default function IndexLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider>
            <I18nProvider>
                <div className="main_layout">
                    <Sidebar />
                    <div className="layout">
                        <Header />
                        {children}
                    </div>
                </div>
            </I18nProvider>
        </ThemeProvider>
    );
}
