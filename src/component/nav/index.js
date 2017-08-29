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

export default class Nav extends React.Component{

    constructor(props){
        super(props)
        console.log(props)
        this.state={
            isShow:props.isShow
        }
    }
    i='init'
    componentDidMount(){
        this.i='updated'
    }

    componentWillReceiveProps(nextProps){
        this.state={
            isShow:nextProps.isShow
        }
    }

    closeNav=()=>{
        this.setState({
            isShow:false
        })
    }



    render() {
        console.log('asd',style.nav+" "+(this.i=='updated' && (this.state.isShow ? style.show:style.hide)))
        return <nav id="nav" className={style.nav+" "+(this.i=='updated' && (this.state.isShow ? style.show:style.hide))}>
            <div className={style.navTop}><a onClick={(e)=>{this.closeNav(e)}}>
                <img src={catalog}/>
                <span>Lantern Pro</span></a></div>
            <ul>
                <li>
                    <img src={user}/>
                    <span>账号管理</span></li>
                <li>
                    <img src={user}/>
                    <span>授权其他设备使用专业版</span></li>
                <li>
                    <img src={user}/>
                    <span>账号管理</span></li>
                <li>
                    <img src={user}/>
                    <span>账号管理</span></li>
                <li>
                    <img src={user}/>
                    <span>账号管理</span></li>
                <li>
                    <img src={user}/>
                    <span>账号管理</span></li>
                <li>
                    <img src={user}/>
                    <span>账号管理</span></li>
                <li>
                    <img src={user}/>
                    <span>账号管理</span></li>
            </ul>
        </nav>
    }
}