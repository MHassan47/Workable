import { Route, Routes } from "react-router-dom";
import Login from "../src/components/Auth/Login";
import Register from "../src/components/Auth/Register";
import JobPostings from "./components/Home/JobPostings";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
