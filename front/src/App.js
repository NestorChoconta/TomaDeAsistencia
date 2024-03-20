import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import CreateAttendance from './components/Attendance/CreateAttendance'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/tomarAsistencia' element={<CreateAttendance/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
