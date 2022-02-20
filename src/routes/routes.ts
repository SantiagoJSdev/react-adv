import { lazy, LazyExoticComponent } from "react";
import { NolLazy } from "../01-lazyload/pages/NolLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";


type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    paht: string;
    Component:  LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string,
    id: number
}
// para trabajar con lazy se hace la exportacion por defecto
// puedo renombrar los chunk
const LazyLayout = lazy(()=> import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'))
// const Lazy2 = lazy(()=> import(/* webpackChunkName: "Lazypage2" */ '../01-lazyload/pages/LazyPage2'))
// const Lazy3 = lazy(()=> import(/* webpackChunkName: "Lazypage3" */ '../01-lazyload/pages/LazyPage3'))

export const routes: Route[] = [
{
    to: '/lazyload/',
    paht: '/lazyload/*',
    Component: LazyLayout,
    name: 'LazyLayout',
    id: 1
},

{
    to: '/no-lazy',
    paht: 'no-lazy',
    Component: NolLazy,
    name: 'No lazy',
    id: 2
},

]