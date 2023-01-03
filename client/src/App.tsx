import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/transaction" element={<Transaction />}  */}
      </Routes>
    </div>
  );
}

export default App;
