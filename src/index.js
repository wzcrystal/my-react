import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './component/Login';
import ModalGallery from './component/modal';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" component={App}/>
        </Switch>
    </Router>
), document.getElementById('root'));

/*ReactDOM.render(<ModalGallery></ModalGallery>, document.getElementById('root'));*/
registerServiceWorker();
