import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Register from "./components/Register";
import ActivateAccount from "./components/ActivateAccount";
import MenuBar from "./book/components/MenuBar";
import Books from "./book/components/Books";

function Layout() {
  const location = useLocation();
  const hideMenuBar =
    location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/activate-account" ;

  return (
    <>
      {!hideMenuBar && <MenuBar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/activate-account" element={<ActivateAccount />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
