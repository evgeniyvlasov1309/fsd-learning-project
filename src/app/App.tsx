import { getUserInited, userActions } from "entities/User";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { ErrorBoundary } from "./providers/ErrorBoundry";
import { useTheme } from "./providers/Theme";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";

export default function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames("app", {}, [theme])}>
            <ErrorBoundary>
                <Suspense fallback="">
                    <Navbar />

                    <div className="content-page">
                        <Sidebar />
                        {inited && <AppRouter />}
                    </div>
                </Suspense>
            </ErrorBoundary>
        </div>
    );
}
