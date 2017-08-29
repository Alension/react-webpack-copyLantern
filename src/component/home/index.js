import React from 'react'
import Header from '../header/index'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import style from './style.scss'
import back from '../../images/back.png'
import Nav from "../nav/index";

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isShowNav:false
        }
    }

    showNav=()=>{
        this.setState({
            isShowNav:true
        })
    }
    closeNav=()=>{
        if(this.state){
            this.setState({
                isShowNav:false
            })
        }

    }

    componentDidMount(){
        //document.querySelector('#home').addEventListener('click',this.closeNav);
    }

    render(){
        return <div id="home" className={style.home}>
            <Header showNav={this.showNav}>
            </Header>
            <Nav isShow={this.state.isShowNav}>
            </Nav>
            <img onClick={this.closeNav} className={style.backImg} src={back}/>
        </div>
    }
}