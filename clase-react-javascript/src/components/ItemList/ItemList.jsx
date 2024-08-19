import Item from "../Item/Item.jsx";

const ItemList = ({ products }) => {
  return (
    <>
      <div>
        <div>Item List</div>
        <div className={`d-flex align-items-center space-between`}>
          {products.map((product) => {
            return <Item key={product.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ItemList;
