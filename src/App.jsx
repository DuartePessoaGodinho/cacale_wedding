import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./assets/HomePage";
import TopBar from "./assets/TopBar";
import Form from "./assets/Form";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <>
      {/* <TopBar /> */}
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
