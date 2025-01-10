import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/home'
import FlaviaPage from './pages/flavia'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/flavia" element={<FlaviaPage/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
