import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';

function App1() {
  const amount = useSelector(state=>state.amount);
  return (
    <div className="App">
    Amount {amount}
     </div>
  );
}

export default App1;
