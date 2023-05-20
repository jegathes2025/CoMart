import SeeMore from "../../../shared/components/see-more";

const CATG = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting",
];

const BRAND = [
  "Nike",
  "Puma",
  "Reebok",
  "File",
  "Adidas",
  "Sneakers",
  "Bata",
  "Clarks",
];
const Ratings = ["4", "3", "2", "1"];
const CheckBoxLabel = ({ item }) => (
  <div className="form-check mb-1">
    <input className="form-check-input" type="checkbox" id={`catg_${item}`} />
    <label
      className="form-check-label text-capitalize text-secondary"
      htmlFor={`catg_${item}`}
    >
      {item}
    </label>
  </div>
);

const RadioLabel = ({ item }) => (
  <div className="form-check mb-1">
    <input
      className="form-check-input"
      name="ratings"
      type="radio"
      id={`catg_${item}`}
    />
    <label className="form-check-label text-secondary" htmlFor={`catg_${item}`}>
      <span>{item}</span>
      <span
        style={{ fontSize: "1rem", verticalAlign: "middle" }}
        className="material-icons text-warning"
      >
        star
      </span>
      <span>& above</span>
    </label>
  </div>
);
const CatergoriesFilter = () => {
  return (
    <div className="">
      <div className="fs-6  fw-semibold mb-2">Category</div>
      <SeeMore list={CATG}>
        <CheckBoxLabel />
      </SeeMore>
      <div className="fs-6 fw-semibold my-2">Brand</div>
      <SeeMore list={BRAND}>
        <CheckBoxLabel />
      </SeeMore>
      <div className="fs-6 fw-semibold my-2">Customer's Ratings</div>
      <SeeMore list={Ratings}>
        <RadioLabel />
      </SeeMore>
    </div>
  );
};

export default CatergoriesFilter;
