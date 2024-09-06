import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Amazon} from "./pages/Amazon.js";
import { Checkout } from "./pages/Checkout";
import "./styles/general.css"


export default function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Amazon />} />
          <Route path="/amazon" element={<Amazon />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}