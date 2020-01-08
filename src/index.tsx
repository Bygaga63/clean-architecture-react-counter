import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from "react-redux";
import {configureStore} from "./core/frameworks";
import AppPresenter from "./infrastructure/components/AppPresenter";

ReactDOM.render(
    <Provider store={configureStore() as any}><AppPresenter />
    </Provider>, document.getElementById('root'));
