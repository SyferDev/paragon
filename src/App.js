import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./views/Main";
import { ItemDetail } from "./views/item/ItemDetail";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="item/:id" element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
