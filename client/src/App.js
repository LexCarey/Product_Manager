import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/products" element={<Main/>} />
            <Route path="/products/:id" element={<Detail/>} />
            <Route path="/products/:id/edit" element={<Update/>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
