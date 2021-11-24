
import { createStore, applyMiddleware, compose } from "redux";
import reducers from '../app.reducers'
import { apiMiddleware,  } from 'redux-api-middleware';



const middlewares = [
    apiMiddleware,
]
const initialState = {
};

const enhancers = []
enhancers.push(applyMiddleware(...middlewares))


// const persistConfig = {
//     key: 'root',
//     storage: storage,
//     blacklist: ['login']
//   }

// const pReducer = persistReducer(persistConfig, reducers);

export const Store = createStore(reducers, initialState, compose(...enhancers));
// export const persistor = persistStore(Store);


