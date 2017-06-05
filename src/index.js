import initApp from './app/initApp';
import {combineReducers} from 'redux';
import {Route} from 'react-router';

import Layout from './pages/Layout.jsx';


const AGENT_STATUS_ACTIVE = 'active';
const AGENT_STATUS_REGISTRATION = 'registration';


// reducers
import layoutReducer from './app/layout/index';

const rootReducer = combineReducers({
    layoutReducer
});

function onLayoutInit(){
    console.log("onInit")
}

function createRoutes(store){

    ///
    const onLayoutInit = () => store.dispatch([
        // selectAuth(store.getState()).isAuthenticated && whatsNewStatistic(),
        selectAuth(store.getState()).isAuthenticated && inboxStats()
    ].filter(Boolean));
    const defaultRedirect = (_, replace, cb) => {
        replace();
        switch (agent.status) {
            case AGENT_STATUS_REGISTRATION:
                replace('/registration');
                break;
            case AGENT_STATUS_STUDY:
                replace('/start');
                break;
            case AGENT_STATUS_ACTIVE:
            default:
                replace('/applications');
                break;
        }
        cb();
    };


    return (
        <Route onInit={onLayoutInit} store={store} component={Layout}>
            <Route auth="user" path="/" onEnter={defaultRedirect} />
        </Route>
    )
}


initApp(createRoutes, rootReducer);