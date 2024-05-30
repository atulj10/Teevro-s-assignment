import { Divider } from 'antd';
import './App.css';
import SearchBar from './Components/SearchBar/searchBar';

function App() {
  return (
    <div >
      <Divider style={{fontSize:"2.5rem",fontWeight:"300",borderColor:"black"}}>MOVIES</Divider>
      <SearchBar />
    </div>
  );
}

export default App;
