import React from 'react'
import QdhLoginComp from './QdhLoginComp'
import QdhlogoutComp from './QdhlogoutComp'

export default function QdhControl(props) {
    const QdhElement = props.isloggedin? <QdhLoginComp /> : <QdhlogoutComp />

    //const Qdhlogin = ()=>{
      //  if (props.isLogoutComp)
        //    return < QdhLogoutComp/>
        // else 
       // return <QdhLoginComp/>
    //}
  return (
    <div>
        {QdhElement}
    </div>
  )
}
