import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    RouterProvider,
} from "react-router-dom";
import "../app/globals.css"
import Routes from "@/routes/routes.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <div className={'h-screen bg-primary '}>
          <RouterProvider router={Routes} />
      </div>
  </React.StrictMode>,
)
