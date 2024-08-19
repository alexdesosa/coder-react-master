import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../utils/fetchData.js";
import { Spinner } from "../Spinner/Spinner.jsx";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <main>
        <div>
          <h1 style={{ color: "white" }}>ItemDetailContainer</h1>
        </div>
        {loading ? <Spinner /> : <ItemDetail {...product} />}
      </main>
    </div>
  );
};

export default ItemDetailContainer;
