import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Header />} /> */}
      </Routes>
    </div>
  );
}

export default App;
