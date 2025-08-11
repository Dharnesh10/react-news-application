import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import News from './components/News';
import NavBar from './components/NavBar';

function App() {

  const [category, setCategory] = useState("general");
  
  return (
    <div>
      <NavBar category={category} setCategory={setCategory} />
      <News category={category} />
    </div>
  );
}

export default App;
