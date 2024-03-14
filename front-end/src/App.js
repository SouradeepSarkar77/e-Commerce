import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import PrivateComponent from "./components/PrivateComponent";
import SignUp from "./components/SignUp";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={PrivateComponent}>
            <Route path="/" element={<h1>Product Listing Component</h1>} />
            <Route path="/add" element={<h1>Add Listing Component</h1>} />
            <Route path="/update" element={<h1>Update Listing Component</h1>} />
            <Route path="/logout" element={<h1>Log Out Component</h1>} />
            <Route path="/profile" element={<h1>Profile Component</h1>} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
