import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AxiosInstance from "../axios";
import { addToCart } from "../redux/slice/cart-slice";
import Ratings from "../shared/components/ratings";
// DEFAULT ={
//   id: 1,
//   title: "iPhone 9",
//   description: "An apple mobile which is nothing like apple",
//   price: 549,
//   discountPercentage: 12.96,
//   rating: 3.69,
//   stock: 94,
//   brand: "Apple",
//   category: "smartphones",
//   thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//   images: [
//     "https://i.dummyjson.com/data/products/1/1.jpg",
//     "https://i.dummyjson.com/data/products/1/2.jpg",
//     "https://i.dummyjson.com/data/products/1/3.jpg",
//     "https://i.dummyjson.com/data/products/1/4.jpg",
//     "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//   ],
// }

const Price = ({ price, discountPercentage }) => {
  const discount = () => price - price * (discountPercentage / 100);
  return (
    <div className="d-flex align-items-baseline">
      <div className="fs-4 fw-semibold">${discount().toFixed(2)}</div>
      &nbsp;&nbsp;
      <div className="fs-6 text-decoration-line-through">{price}</div>
      &nbsp;&nbsp;
      <div className="fs-6 text-success fw-semibold">
        {discountPercentage}%off
      </div>
    </div>
  );
};

const SingleProduct = () => {
  const [state, setState] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  useEffect(() => {
    AxiosInstance.get(`/products/${productId}`)
      .then((res) => setState(res.data))
      .catch((err) => {});
  }, [productId]);
  return (
    <div className="row mt-5" style={{ height: "60vh" }}>
      {state && (
        <>
          <div className="col-md-7">
            <img
              src={state.thumbnail}
              alt={state.title}
              width="100%"
              height="400"
            />
          </div>
          <div className="col-md-5">
            <div className="fs-4 fw-semibold">{state.title}</div>
            <small>{state.brand}</small>
            <div className="mt-1">
              <Ratings count={state.rating} /> &nbsp;({state.stock})
            </div>
            state
            {state.discountPercentage ? (
              <>
                <div className="text-success fw-semibold mt-3 mb-1">
                  Special Price
                </div>
                <Price
                  discountPercentage={state.discountPercentage}
                  price={state.price}
                />
              </>
            ) : (
              <div className="fs-4 fw-semibold">${state.price}</div>
            )}
            <div className="d-flex gap-3 align-items-baseline mt-3 ">
              <label className="form-label ">Qty:</label>
              <select
                className="form-select form-select-sm "
                defaultValue="1"
                style={{ width: "70px" }}
                aria-label="Default select example"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="row mt-3 gx-2">
              <div className="d-grid gap-2 col-6 mx-auto">
                <button
                  onClick={() => dispatch(addToCart(state))}
                  className="btn btn-warning"
                >
                  Add to Cart
                </button>
              </div>
              <div className="d-grid gap-2 col-6 mx-auto">
                <button
                  className="btn btn-success"
                  onClick={() => navigate("/cart")}
                >
                  Buy Now
                </button>
              </div>
            </div>
            <div className="fs-5 mt-5 text-decoration-underline pb-1">
              Description
            </div>
            <p>{state.description}</p>
          </div>
        </>
      )}
    </div>
  );
};
export default SingleProduct;
