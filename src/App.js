// import logo from './logo.svg';
import './App.css';
import Navbar from './component/NavBar/navbar';
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos"}/>
    </div>
    );
  
}

export default App;
