import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";
import MainLayout from "./layout/MainLayout";
import Locations from "./pages/Locations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/locations" element={<Locations />} />
          {/* <Route path="/contact" element={<ContactPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
