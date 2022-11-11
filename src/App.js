import './App.css';
import Data from './Component/Data/Data';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import Learn from './Component/Learn/Learn';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Data/>} />
          <Route path='/learn/:car' element={<Learn/>} />
          <Route path='/shop/:car' element={<Shop/>} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
