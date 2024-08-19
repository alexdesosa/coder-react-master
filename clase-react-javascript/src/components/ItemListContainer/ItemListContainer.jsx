import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.jsx";
// import ItemCount from "../ItemCount/ItemCount.jsx";
// import { items } from '../../mock/mockData';
import "./ItemListContainer.css";
import { getProducts } from "../../utils/fetchData.js";
import { useParams } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner.jsx";

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);
  // const [cat, setCat] = useState("Triangulo");
  //Ciclos de vida de useEffect, 1.- cuando se monta el componente, 2.- cuando se actualiza, 3.- cuando se desmonta el componente
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Se monta el componente");
    setLoading(true);
    getProducts(id)
      .then((res) => {
        console.log("Se resolvio la promesa");
        setProducts(res);
        console.log("Se actualizo el estado");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("Finalizo la promesa");
        setLoading(false);
      });

    return () => {
      console.log("Se desmonto el componente");
    };
  }, [id]);

  // Promesa, dsp hace lo que haya en Then y si hay un error, lo agarra catch y luego finally que dependiendo del resultado, va a terminar con finally
  return (
    <main>
      <div>
        <h1 id="titulo">{title}</h1>
      </div>
      {loading ? <Spinner /> : <ItemList products={products} />}
      {/* //{" "}
      <button onClick={() => setCat("Via Lactea")}>Set Cat = Via Lactea</button>
      //{" "}
      <button onClick={() => setCat("Andromeda")}>Set Cat = Andromeda</button>
      //{" "}
      <button onClick={() => setCat("Triangulo")}>Set Cat = Triangulo</button>
      //{" "}
      <button onClick={() => setCat("Magallanes")}>Set Cat = Magallanes</button> */}
      /*
      {/* <ItemCount stock={10} initial={1} /> */}
    </main>
  );
};

export default ItemListContainer;
