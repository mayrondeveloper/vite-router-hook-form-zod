import {createBrowserRouter} from "react-router-dom";
import React from "react";
import Home from "@/pages/home.tsx";
import Livros from "@/pages/livros.tsx";
import Anotacoes from "@/pages/anotacoes.tsx";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/livros",
        element: <Livros />,
    },
    {
        path: "/anotacoes",
        element: <Anotacoes />,
    },
]);

export default Routes;