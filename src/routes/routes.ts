import { lazy, LazyExoticComponent } from "react";
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
const Lazy1 = lazy(()=> import(/* webpackChunkName: "Lazypage1" */'../01-lazyload/pages/LazyPage1'))
const Lazy2 = lazy(()=> import(/* webpackChunkName: "Lazypage2" */ '../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(()=> import(/* webpackChunkName: "Lazypage3" */ '../01-lazyload/pages/LazyPage3'))

export const routes: Route[] = [
{
    to: '/lazy1',
    paht: 'lazy1',
    Component: Lazy1,
    name: 'lazy-1',
    id: 1
},

{
    to: '/lazy2',
    paht: 'lazy2',
    Component: Lazy2,
    name: 'lazy-2',
    id: 2
},
{
    to: '/lazy3',
    paht: 'lazy3',
    Component: Lazy3,
    name: 'lazy-3',
    id: 3
}
]