import { configureStore, combineReducers, AnyAction, Reducer } from "@reduxjs/toolkit";
import { cardReducer } from "./cardReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  card: cardReducer, // ✅ locationReducer удален
});

// ✅ Исправленный persistedReducer
const persistedReducer = persistReducer<ReturnType<typeof rootReducer>, AnyAction>(
  persistConfig,
  rootReducer as unknown as Reducer<ReturnType<typeof rootReducer>, AnyAction>
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false, // ✅ Отключаем проверку на сериализуемые значения
    }),
});

export const persistor = persistStore(store);

// ✅ Корректный тип RootState
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;