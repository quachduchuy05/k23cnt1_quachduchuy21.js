
import './App.css';
import QdhRederCondition from './components/QdhRederCondition';
import QdhRederList from './components/QdhRederList';

function QdhApp() {
  return (
    <div className="container boder mt-3">
      <QdhRederCondition />
      <QdhRederList/>
    </div>
 
  );
}

export default QdhApp;