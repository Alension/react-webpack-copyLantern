import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import style from './style.scss'
import catalog from '../../images/catalog.svg'

export default class Header extends React.Component{
    onclick=()=>{
        this.props.showNav()
    }
    render(){
        return <header className={style.header}>
            <div className={style.left}>
                <img src={catalog} onClick={this.onclick}/>
                <span>Lantern Pro</span>
            </div>
        </header>
    }
}