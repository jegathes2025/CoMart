import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../redux/slice/cart-slice";
import CardTemplate3 from "../shared/components/card/card-template-3";

const LabelPair = ({ label, value, bold }) => {
  return (
    <div className="d-flex mb-2 align-items-center justify-content-between">
      <div className={bold ? "fw-semibold fs-6" : "fs-6"}>{label}</div>
      <div className={bold ? "fw-semibold fs-6" : "fs-6"}>{value}</div>
    </div>
  );
};
LabelPair.defaultProps = {
  bold: false,
};

const CartPage = () => {
  const dispatch = useDispatch();
  const record = useSelector((state) => state.cart);
  console.log(record);

  const handleRemove = (arg) => {
    console.log(arg);
    dispatch(removeCart(arg));
  };
  return (
    <>
      <div className="fs-5 fw-semibold">
        {record.totalProducts} item in your cart
      </div>
      <small className="text-primary mb-3" role="button">
        select all items
      </small>
      <div className="row my-3 ">
        <div className="col-md-8">
          {record.totalProducts > 0 ? (
            record.products.map((item) => (
              <CardTemplate3
                handleRemove={handleRemove}
                key={item.id}
                {...item}
              />
            ))
          ) : (
            <div className="alert alert-info">No item added in cart</div>
          )}
        </div>
        <div className="col-md-4">
          <div className="bg-info bg-opacity-10  shadow-sm p-3 ">
            <div className="fs-5 fw-semibold mb-3">Order Summary</div>
            <LabelPair label="Item(s) total" value={`$${record.total}`} />
            <LabelPair
              label="Shop discount"
              value={`$${record.discountedTotal}`}
            />
            <hr />
            <LabelPair
              label="Sub total"
              value={`$${record.total + record.discountedTotal}`}
            />
            <LabelPair label="Shipping Fee" value="$24.00" />
            <hr />
            <LabelPair label="Total(2 items)" value="$470.22" bold />
            <div className="d-grid gap-2 mb-2 mt-4">
              <button className="btn btn-warning">Proceed to checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
