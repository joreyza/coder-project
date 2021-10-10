
import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import {Navbar} from './components/navbar/Navbar';

function App() {
  return (
    <div className='app'>
    <Navbar />
    <ItemListContainer greeting = "Mi E-Commerce" />
    </div>
  );
}

export default App;
