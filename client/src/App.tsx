import { Route, Routes } from "react-router-dom";
import Login from "../src/components/Auth/Login";
import Register from "../src/components/Auth/Register";
import JobPostings from "./components/Home/JobPostings";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </div>
  );
}

export default App;
