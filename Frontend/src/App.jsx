import { BrowserRouter as Router , Routes , Route } from "react-router-dom" 
import RegisterPage from "./components/RegisterPage"
import LandingPage from "./components/LandingPage"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </Router>
  )
}
