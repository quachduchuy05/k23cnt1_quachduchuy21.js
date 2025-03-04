import React from 'react'

export default function QdhRederList() {
    const QdhNumbers =["huy","thinh","tuyen","dung"];
    // hien thi gia tri cua mang 
    const QdhElementNumber = QdhNumbers.map((item)=>{
        return<li>{item}</li>
    })
    
  return (
    <div>
        <h2>hoi nhung thg nghien</h2>
        {QdhElementNumber}
    </div>
  )
}
