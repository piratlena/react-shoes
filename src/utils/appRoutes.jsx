import React, { useContext}from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import { publicRoutes } from "./routes";
import { HOME_ROUTE } from "./consts";

const AppRouter = () => {
   
    return (
        <Routes>
              {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
             <Route path="*" element={<Navigate to={HOME_ROUTE} />} />
        </Routes>
    )
}
export default AppRouter;