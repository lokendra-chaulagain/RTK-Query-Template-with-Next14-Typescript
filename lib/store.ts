import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./features/productSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { committeeApi } from "./features/comitteeSlice";


export const makeStore = () => {
  const store = configureStore({
    reducer: {
      [productsApi.reducerPath]: productsApi.reducer,
      [committeeApi.reducerPath]: committeeApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware, committeeApi.middleware),
  });

  setupListeners(store.dispatch);
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
