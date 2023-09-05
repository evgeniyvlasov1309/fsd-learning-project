import type {
    ReduxStoreWithManager,
    StateSchema,
    ThunkConfig,
} from "./config/StateSchema";
import { AppDispatch, createReduxStore } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";

export {
    AppDispatch,
    ReduxStoreWithManager,
    StateSchema,
    StoreProvider,
    ThunkConfig,
    createReduxStore,
};
