import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './layout/AppLayuot'
import HomePage from './pages/HomePage'
import ProtectedHomePage from './pages/ProtectedHomePage'
import SingleApartmentPage from './pages/SingleApartmentPage'
import PrivateRoute from './components/LoginComponents/PrivateRoute'
import LoginPage from './pages/Loginpage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>

            <Route path='/' element={<HomePage />} />
            <Route path="/apartments/:id" element={<SingleApartmentPage />} />
            <Route path='/protected' element={
              <PrivateRoute>
                <ProtectedHomePage />
              </PrivateRoute>} />
            <Route path='/login' element={<LoginPage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
