import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "widgets/PageLoader";
import { routeConfig } from "../config/config";

export const AppRouter = () => (
    <div className="page-wrapper">
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route path={path} element={element} key={path} />
                ))}
            </Routes>
        </Suspense>
    </div>
);
