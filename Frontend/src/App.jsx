import { BrowserRouter as Router , Routes , Route } from "react-router-dom" 
import RegisterPage from "./components/RegisterPage"
import LandingPage from "./components/LandingPage"
import AdminDashboardPage from "./components/AdminDashboardPage"
import Applications from "./components/Applications"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/admin" element={<AdminDashboardPage/>}/>
        <Route path="/applications" element={<Applications/>}/>
      </Routes>
    </Router>
  )
}
