import { Route, Routes } from "react-router-dom";
import Login from "../src/components/Auth/Login";
import Register from "../src/components/Auth/Register";
import PrivateRoutes from "./components/Other/PrivateRoute";
import CreateJob from "./pages/CreateJob";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/create" element={<CreateJob />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
