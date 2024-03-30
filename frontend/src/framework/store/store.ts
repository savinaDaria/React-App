import { configureStore } from '@reduxjs/toolkit';
import { AppEnvironment } from '../enums/app-environment.enum';

import { TaskListApiService } from '~/bundles/task-list/api/list-api';
import { reducer as taskListReducer } from '~/bundles/task-list/store/slice';
import { reducer as taskReducer } from '~/bundles/task-card/store/slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { TaskApiService } from '~/bundles/task-card/api/task-api';

type RootReducer = {
    taskLists: typeof taskListReducer,
    task: typeof taskReducer 
};

const ExtraArguments = {
    listApi: new TaskListApiService(import.meta.env.VITE_APP_PROXY_SERVER_URL),
    taskApi: new TaskApiService(import.meta.env.VITE_APP_PROXY_SERVER_URL)
};

const store = configureStore({
    devTools: import.meta.env.VITE_APP_NODE_ENV!== AppEnvironment.PRODUCTION,
    reducer: {
      taskLists: taskListReducer ,
      task:taskReducer 
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            thunk: {
                extraArgument: ExtraArguments,
            },
        }),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

type AsyncThunkConfig = {
    state: RootState;
    dispatch: AppDispatch;
    extra: typeof ExtraArguments; 
};

const useAppDispatch: () => AppDispatch = () =>
    useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector;

export { type RootReducer , type RootState, type AsyncThunkConfig, store, useAppDispatch,useAppSelector };
