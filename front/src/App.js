import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import CreateAttendance from './components/Attendance/CreateAttendance'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/Dashboard' element={<Dashboard/>} />
          <Route path='/tomarAsistencia' element={<CreateAttendance/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
