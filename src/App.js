import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import App1 from './App1';
import { Shop } from './components/Shop';
function App() {
  const amount = useSelector(state=>state.amount);
  return (
    <div className="App">
    Amount {amount}
    <App1/>
    <Shop/>
     </div>
  );
}

export default App;
