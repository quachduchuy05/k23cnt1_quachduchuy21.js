import React, { Component } from 'react'
import QdhControl from './QdhControl';

export default class QdhRederCondition extends Component {
    constructor (props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    //ham su ly su kien login
    QdhHandleLogin = (ev)=>{
        ev.prevenDefault();
        this.setSate({
            isLoggedIn:true
        })
    }
    // ham su lys su kien logout
    QdhHandleLogout =(event)=>{
        event.prevenDefault();
        this.setSate({
            isLoggedIn:false
        })
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <QdhControl isLoggedIn={this.state.isLoggedIn}/>
        {
            this.state.isLoggedIn?
            <button className='btn-danger' conClick={''} >Logout </button>
            :<button className='btn-primary' conClick={this.QdhHandleLogin} >Logout </button>
        }
      </div>
    );
  }
}
