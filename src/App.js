import SearchBar from './components/searchbar/searchbar.component';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path='/' element={<SearchBar/>}/>
    </Routes>
    
      
    
  );
}

export default App;
