import CartWidget from "../../components/CartWidget/CartWidget.jsx";
import NavbarLink from "../NavbarLink/NavbarLink.jsx";
import logo from "../../assets/logo.jpg";
import { categories } from "../../mock/mockData.js";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import { useEffect } from 'react';
const Navbar = () => {
  // const categories = props.categories;
  // (props) iria dsp del =
  // Código JS
  // Para meternos a un Array, hay que poner props.categories abajo dsp del => {}
  // O tambien usar solo ({categories})

  // const [cats, setCats] = useState([]);
  // useEffect(() => {
  //     /* Lo usaremos para poner un fetch dentro, ya sea una api de una pagina o desde el mismo fetch data con un export  const nombreTitulo*/
  // })
  return (
    <>
      <nav className="navbarContainer">
        <div>
          <Link to="/category">
            <img src={logo} alt="Logo espacial de la pagina" />
          </Link>
        </div>
        <div id="navbar">
          {categories.map((element) => {
            return <NavbarLink key={element} category={element} />;
          })}
          {/* <a href="#" className='navbarLink'> {categories[0]} </a> 
                <a href="#" className='navbarLink'> {categories[1]} </a> 
                <a href="#" className='navbarLink'> {categories[2]} </a> 
                <a href="#" className='navbarLink'> {categories[3]} </a> 
                <a href="#" className='navbarLink'> {categories[4]} </a>  */}
        </div>
        <a href="#" id="cart">
          <CartWidget />
        </a>
      </nav>
    </>
  );
};

export default Navbar;
