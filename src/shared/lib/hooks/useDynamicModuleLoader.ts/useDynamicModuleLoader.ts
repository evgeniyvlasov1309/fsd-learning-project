import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

export function useDynamicModuleLoader(reducers: ReducersList, removeAfterUmmount = true) {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });


        return () => {
            if (removeAfterUmmount) {
                Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        }
    }, []);
}