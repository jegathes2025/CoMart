import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slice/cart-slice";
import CardTemplateTwo from "../../../shared/components/card/card-template-2";

const SearchProductList = ({ data }) => {
  const dispatch = useDispatch();
  const handleCart = (arg) => {
    dispatch(addToCart(arg));
  };
  return (
    <div className="row gy-4 gx-3">
      {data.map((el) => (
        <div key={el.id} className="col-md-3">
          <CardTemplateTwo {...el} handleClick={handleCart} />
        </div>
      ))}
    </div>
  );
};

export default SearchProductList;
