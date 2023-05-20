import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AxiosInstance from "../axios";
import FilterSection from "../features/search-page/components/filter-section";
import SearchProductList from "../features/search-page/components/search-product-list";

const SearchPage = () => {
  const { query } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    /**
     * baseurl alreadt add in common file, same instance here we are using
     */
    AxiosInstance.get(`/products/search?q=${query}&limit=12`)
      .then((res) => {
        setData(res.data.products);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  return (
    <>
      <div className="row my-3 justify-content-end">
        <div className="col-md-3">
          <select
            defaultValue="REL"
            className="form-select"
            aria-label="Sort By"
          >
            <option value="REL">Sort by Relevance</option>
            <option value="ASC">Sort By ASC</option>
            <option value="DESC">Sort By Desc</option>
          </select>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-3">
          <FilterSection />
        </div>
        <div className="col-md-9">
          {data.length > 0 ? (
            <SearchProductList data={data} />
          ) : (
            <div className="alert alert-info">No records found!</div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
