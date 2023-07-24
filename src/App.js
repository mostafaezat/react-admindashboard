import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Main from "./pages/mainlayout/Main";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/single/:id/" element={<Single />}></Route>
          <Route path="/user" element={<List />}></Route>
          <Route path="/new" element={<New />}></Route>
          <Route path="/new/:id/" element={<New />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
