import { faker } from "@faker-js/faker";
import CardList from "./card-list";

const HomePageCard = () => {
  return (
    <>
      <CardList
        title="Smartphones"
        image={faker.image.business}
        routerPath="phone"
      />
      <CardList
        title="Men's & Women's Dresses"
        image={faker.image.fashion}
        routerPath="dress"
      />
      <CardList image={faker.image.sports} routerPath="shoes" />
    </>
  );
};

export default HomePageCard;
