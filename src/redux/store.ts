import {combineReducers, legacy_createStore as createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import {loadState, saveState} from '../utils/localstorage';


const rootReducer = combineReducers({
    counter:counterReducer,
})

export const store = createStore(rootReducer,loadState())


store.subscribe( ()=>{
    saveState({
        counter: store.getState().counter
    });
})

type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>