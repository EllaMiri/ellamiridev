import Header from "./components/Header";
import Home from "./components/Home";
import MyWork from "./components/MyWork";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "ellamiri";
  }, []);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyWork" element={<MyWork />} />
        {/* <Route path="/" element={<Header />} /> */}
      </Routes>
    </div>
  );
}

export default App;
