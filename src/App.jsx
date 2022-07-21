import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import Missing from './pages/missing/Missing';
import Dashboard from './pages/dashboard/Dashboard';
import Layout from './components/layout/Layout';
import RequireAuth from './components/requireAuth/RequireAuth';
import AlreadyAuth from './components/alreadyAuth/AlreadyAuth';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          {/* public routes */}
          <Route path='/' element={<Home/>}/>

          {/* if user already authenticated */}
          <Route element={<AlreadyAuth />}>
            <Route path='login' element={<Login/>} />
            <Route path='signup' element={<SignUp/>} />
          </Route>

          {/* protected routes */}
          <Route element={<RequireAuth/>}>
            <Route path='dashboard'element={<Dashboard />} />
          </Route>

          {/* catch all */}
          <Route path='*' element={<Missing />}/>
        </Route>
      </Routes>
  );
}

export default App;
