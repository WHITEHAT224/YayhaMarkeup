import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Shop from "./Pages/Shop";


function App() {
 

  return (
   <div>
    <BrowserRouter>
       <Navbar />
       <Routes>
        <Route path="/" element={<Shop/>} />
       </Routes>
       <Footer />
    </BrowserRouter>
   </div>

  )
}

export default App
