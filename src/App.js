import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/posts" element={<Home />} />
          <Route exact path="/posts/:id" element={<Detail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
