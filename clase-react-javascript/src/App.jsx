import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nabvar from "./components/Navbar/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import { categories } from "./mock/mockData.js";
import Layout from "./components/pages/Layout.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Error404 from "./components/Error404/Error404.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";

function App() {
  const title = "Bienvenidos a un nuevo mundo intergalactico"; //Variable y lo de abajo es un prop.title
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path="/category/:id"
              element={<ItemListContainer title={title} />}
            />
            <Route
              path="/category/:id"
              element={<ItemListContainer title={title} />}
            />
            <Route
              path="/category/detail/:id"
              element={<ItemDetailContainer />}
            />
            <Route path="/category/contact" element={<Contact />} />
            <Route path="/category/about" element={<AboutUs />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          {/* switch (page) {
          case 'home':
              <ItemListContainer title = {title} /> 
            break;
          case 'about':
            <ItemListContainer title = {title} /> 
          break;
          default:
            break;
        } */}
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
