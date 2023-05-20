const CardTemplate3 = (props) => {
  const { thumbnail, title, brand, handleRemove, price } = props;
  return (
    <div className="row mb-4">
      <div className="col-md-3">
        <img src={thumbnail} alt={title} height="100%" width="100%" />
      </div>
      <div className="col-md-9">
        <div className="row">
          <div className="col-md-9">
            <div className="fs-4 fw-semibold">{title}</div>
            <div className="fs-6 fw-semibold text-muted">{brand}</div>
          </div>
          <div className="col-md-3">
            {
              <>
                <div className="fs-4 fw-semibold">USD {price}</div>
                <small className="text-mutes">(USD 29.00 each)</small>
              </>
            }
          </div>
        </div>
        <p>
          Color: <b>Gray & Yellow</b>
        </p>
        <div className="row align-items-baseline">
          <div className="col-4 border-end">
            <select
              className="form-select form-select-sm border-end"
              defaultValue="1"
              style={{ width: "70px" }}
              aria-label="Default select example"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          {/* <div role="button" className="col-3 fs-6 border-end text-primary text">
            Edit
          </div> */}
          <div
            role="button"
            onClick={() => handleRemove(props)}
            className="col-4 fs-6 border-end text-primary text-center"
          >
            Remove
          </div>
          <div role="button" className="col-4 fs-6 text-primary text-center">
            Save for Later
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTemplate3;

CardTemplate3.defaultProps = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  discountPercentage: 12.96,
  rating: 3.69,
  stock: 94,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  ],
};
