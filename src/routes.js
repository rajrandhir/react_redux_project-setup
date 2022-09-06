import { lazy } from "react";

const Main = lazy(() => import('./app/main'));
const Page404 = lazy(() => import('./app/pages/page404/Page404'));

const routes = [
    { path: '/',  component: Main },
    { path: '*' , component: Page404 },
]

export default routes;