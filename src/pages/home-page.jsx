import HomePageCard from "../features/home-page/components";

const BANNERADDRS =
  "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80";
const Homepage = () => {
  return (
    <div className="container">
      <img
        src={BANNERADDRS}
        alt="bannerLogo"
        style={{ height: "40vh" }}
        className="mt-2"
        width="100%"
      />
      <HomePageCard />
    </div>
  );
};

export default Homepage;
