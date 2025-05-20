export enum AppRoutes {
    MAIN = "main",
    SETTINGS = "settings",
    ABOUT = "about",
    PROFILE = "profile",
    ARTICLES = "articles",
    ARTICLE_DETAILS = "article_details",
    ARTICLE_CREATE = "article_create",
    ARTICLE_EDIT = "article_edit",
    ADMIN_PANEL = "admin_panel",
    FORBIDDEN = "forbidden",
    // last
    NOT_FOUND = "not_found",
}

export const getRouteMain = () => "/";
export const getRouteSettings = () => "/settings";
export const getRouteAbout = () => "/about";
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => "/articles";
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => "/articles/new";
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdmin = () => "/admin";
export const getRouteForbidden = () => "/forbidden";

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteSettings()]: AppRoutes.SETTINGS,
    [getRouteAbout()]: AppRoutes.ABOUT,
    [getRouteProfile(":id")]: AppRoutes.PROFILE,
    [getRouteArticles()]: AppRoutes.ARTICLES,
    [getRouteArticleDetails(":id")]: AppRoutes.ARTICLE_DETAILS,
    [getRouteArticleCreate()]: AppRoutes.ARTICLE_CREATE,
    [getRouteArticleEdit(":id")]: AppRoutes.ARTICLE_EDIT,
    [getRouteAdmin()]: AppRoutes.ADMIN_PANEL,
    [getRouteForbidden()]: AppRoutes.FORBIDDEN,
};

// export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
//     [AppRoutes.MAIN]: {
//         path: getRouteMain(),
//         element: <MainPage />,
//     },
//     [AppRoutes.SETTINGS]: {
//         path: getRouteSettings(),
//         element: <SettingsPage />,
//     },
//     [AppRoutes.ABOUT]: {
//         path: getRouteAbout(),
//         element: <AboutPage />,
//     },
//     [AppRoutes.PROFILE]: {
//         path: getRouteProfile(":id"),
//         element: <ProfilePage />,
//         authOnly: true,
//     },
//     [AppRoutes.ARTICLES]: {
//         path: getRouteArticles(),
//         element: <ArticlesPage />,
//         authOnly: true,
//     },
//     [AppRoutes.ARTICLE_DETAILS]: {
//         path: getRouteArticleDetails(":id"),
//         element: <ArticleDetailsPage />,
//         authOnly: true,
//     },
//     [AppRoutes.ARTICLE_CREATE]: {
//         path: getRouteArticleCreate(),
//         element: <ArticleEditPage />,
//         authOnly: true,
//     },
//     [AppRoutes.ARTICLE_EDIT]: {
//         path: getRouteArticleEdit(":id"),
//         element: <ArticleEditPage />,
//         authOnly: true,
//     },
//     [AppRoutes.ADMIN_PANEL]: {
//         path: getRouteAdmin(),
//         element: <AdminPanelPage />,
//         authOnly: true,
//         roles: [UserRole.MANAGER, UserRole.ADMIN],
//     },
//     [AppRoutes.FORBIDDEN]: {
//         path: getRouteForbidden(),
//         element: <ForbiddenPage />,
//     },
//     // last
//     [AppRoutes.NOT_FOUND]: {
//         path: "*",
//         element: <NotFoundPage />,
//     },
// };
