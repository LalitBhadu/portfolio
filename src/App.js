import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Homepage from "./Components/Homepage";
import Header from "./Components/Header/Header";
import Nabar from "./Components/Navbar/Nabar";
import Apicall from "./Components/AxiosDemo/Apicall";
import Postapi from "./Components/AxiosDemo/Postapi";
import Form from "./Components/Form/Form";
import Todo from "./Components/Todo/Todo";

// import About from "./Components/About/About"
// import Experience from "./Components/Experience/Experience"
// import Services from './Components/Services/Services'
// import Portfolio from './Components/Portfolio/Portfolio'
// import Testimonials from "./Components/Testimonials/Testimonials";
// import Contact from './Components/Contact/Contact'
// import Footer from './Components/Footer/Footer'


function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
    <Route path='/' element={<Homepage/> } />
    <Route path='/header' element={<Header/> } />
      <Route path='/nabar' element={<Nabar/> } />
      {/* <Route path='/about' element={<About/> } />
      <Route path='/experience' element={<Experience/> } />
      <Route path='/services' element={<Services/> } />
      <Route path='/portfolio' element={<Portfolio/> } />
      <Route path='/testimonials' element={<Testimonials/> } />
      <Route path='/contact' element={<Contact/> } />
      <Route path='/footer' element={<Footer/> } /> */}
      <Route path='/apicall' element={<Apicall/> } />
      <Route path='/postapi' element={<Postapi/> } />
      <Route path='/form' element={<Form/> } />
      <Route path='/todo' element={<Todo/> } />




    </Routes>
    </BrowserRouter>
  
   </>
  );
}

export default App;
