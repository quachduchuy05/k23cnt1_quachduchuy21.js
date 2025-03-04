import React, { Component } from 'react'
class QdhRederListStudent extends Component{
    constructor (props){
        super(props);
        this.state = {
            QdhStudents:[
                {QdhId:"SV001",QdhName:"quach duc huy",QdhAge:45,QdhLass:"K23cnt1",}
                {QdhId:"SV002",QdhName:"nguyen thi hai",QdhAge:22,QdhLass:"K23cnt1",}
                {QdhId:"SV003",QdhName:"nguyn hai",QdhAge:21,QdhLass:"K23cnt1",}
                {QdhId:"SV004",QdhName:"quach  huy",QdhAge:23,QdhLass:"K23cnt1",}
                
               
            ]

        }

    }
    reder(){
        // reder data
        const QdhElement = this.state.QdhStudents.map(QdhItem, index)=>{
            return(
                <tr>
                    <td>{index+1}</td>
                    <td>{QdhItem.QdhId}</td>
                    <td>{QdhItem.QdhName}</td>
                    <td>{QdhItem.QdhAge}</td>
                    <td>{QdhItem.QdhClass}</td>
                    <td>
                        <button>Sửa</button>
                        <button>Xóa</button>
                    </td>
                </tr>
            )
        }
        return(
            <div>
                <h2>danh sach sinh vien </h2>
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>QdhID</th>
                            <th>QdhName</th>
                            <th>QDhAge</th>
                            <th>QdhClass</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {QdhElement}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default QdhRederListStudent


   