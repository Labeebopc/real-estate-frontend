import Login from "./components/login";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signup from "./components/signUp";
// import Addproperty from "./components/addProperty";
import PropertyDetails from "./components/propertyDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Signup/>}></Route>
        <Route path="/propertyDetails" element={<PropertyDetails/>}></Route>
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
