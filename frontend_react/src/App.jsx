import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './layout/AppLayuot'
import HomePage from './pages/HomePage'
import ProtectedHomePage from './pages/ProtectedHomePage'
import SingleApartmentPage from './pages/SingleApartmentPage'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>

            <Route path='/' element={<HomePage />} />
            <Route path="/apartments/:id" element={<SingleApartmentPage />} />
            <Route path='/protected' element={<ProtectedHomePage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
