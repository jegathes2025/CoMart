import CatergoriesFilter from "./categories-filter";

const FilterSection = () => {
  return (
    <div className="card bg-info bg-opacity-10">
      <div className="card-header fw-semibold">Filters</div>
      <div className="card-body">
        <CatergoriesFilter />
      </div>
    </div>
  );
};

export default FilterSection;
