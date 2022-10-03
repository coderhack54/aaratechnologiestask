import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import CategoryList from "./pages/CategoryList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Otp from "./pages/Otp";
import Loginuser from "./pages/Loginuser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<CategoryList />} path="/category" />
          <Route element={<Otp />} path="/otp" />
          <Route element={<Loginuser />} path="/loginuser" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
