import { useNavigate } from "react-router-dom";
import CardTemplateOne from "../../../shared/components/card/card-template-one";

const CardList = ({ title, image, routerPath }) => {
  console.log(routerPath);
  const navigate = useNavigate();
  return (
    <div className="row row-cols-10  gx-3 my-5">
      <div className="card bg-warning bg-opacity-10 col-md-2 d-flex align-items-center justify-content-center">
        <div className="fs-5 mb-2 text-center text-capitalize">{title}</div>
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate(`search/${routerPath}`);
          }}
        >
          view all
        </button>
      </div>
      {Array(5)
        .fill(1)
        .map((_, idx) => {
          return (
            <div key={idx} className="col-md-2">
              <CardTemplateOne thumbnail={image(640, 480, true)} />
            </div>
          );
        })}
    </div>
  );
};

export default CardList;
CardList.defaultProps = {
  title: "Show all Shoe's",
  routerPath: "smartphones",
};
