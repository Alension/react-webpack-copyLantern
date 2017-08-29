import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Home from '../home/index'
import style from './style.scss';
import catalog from '../../images/catalog.svg'
import user from '../../images/user.svg'

export default class RootRouter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        }
    }


    render() {

        return <Router>
            <div>
                <Route exact path='/' component={Home}/>
            </div>
        </Router>
    }
}