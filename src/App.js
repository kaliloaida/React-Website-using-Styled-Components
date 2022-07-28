// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages'
import SigninPage from './pages/SigninPage'

function App() {
   return (
      <Router>
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signin" element={<SigninPage />} />
         </Routes>
      </Router>
   )
}

export default App
