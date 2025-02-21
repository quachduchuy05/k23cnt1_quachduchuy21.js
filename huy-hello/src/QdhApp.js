import QdhFuncomp from "./components/QdhFuncomp";
import QdhFunComp1 from "./components/QdhFunComp1";

function QdhApp(){
  // object 
  const users = {
    fullName:'quach duc huy',
    age:20,
    phone:"0328966457"
  }
  return(
  <div className="container boder mt-3">
    <h1> demo component -props -state</h1>
    <hr/>
    <div className="alert alert-danger">
      <QdhFuncomp name ="quach huy" address="tân hội " company = "depmaster" />
    <hr/>
    <QdhFuncomp name="quach duc huy" address="dan phuong  " company = "phan long " />
    </div>
    <div className="aler aler-info">
    <QdhFunComp1 renderinfo={users} />
    </div>
  </div>
  )
}
export default QdhApp;