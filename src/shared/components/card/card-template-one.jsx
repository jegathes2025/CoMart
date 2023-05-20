import { faker } from "@faker-js/faker";

const CardTemplateOne = ({ title, thumbnail, brand, catergories, offer }) => {
  return (
    <div className="text-center ">
      <img src={thumbnail} alt={title} width="100%" height="150" />
      <div className=" text-muted text-truncate mb-2">{brand}</div>
      <div className="fs-5 fw-semibold">{catergories}</div>
      <div className="fs-5 text-success fw-semibold">{offer}</div>
    </div>
  );
};

export default CardTemplateOne;

CardTemplateOne.defaultProps = {
  brand: "Nike,Puma ,Reebok",
  catergories: "Mens' & Women's Sports Shoe",
  offer: "upto 75%",
  thumbnail: faker.image.sports(640, 480, true),
};
