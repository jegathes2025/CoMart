const LIST1 = ["Careers", "Blog", "About Contact", "Comart Device"];
const LIST2 = ["Sell on Comert", "Promote Products", "Contact Forms"];
const LIST4 = [
  "Help Center",
  "Trust and Safety",
  "Privacy settings",
  "Terms of User",
];
const LIST3 = [
  "Comert Policies",
  "Investors",
  "Press",
  "Legal Inprint",
  "Terms & Condition",
];

const RenderList = ({ title, list }) => {
  return (
    <div className="col-md-2 ">
      <h6 className="mb-3">{title}</h6>
      {list.map((item) => (
        <div className="fs-6 mb-1" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="row bg-info p-2 justify-content-evenly text-dark bg-opacity-10">
      <RenderList title="Get to know us" list={LIST1} />
      <RenderList title="Make Money with us" list={LIST2} />
      <RenderList title="About Comart" list={LIST3} />
      <RenderList title="Comart Help" list={LIST4} />
    </div>
  );
};

export default Footer;
