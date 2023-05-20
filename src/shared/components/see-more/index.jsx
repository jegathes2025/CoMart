import React, { useState } from "react";

const SeeMore = ({ children, list }) => {
  const [isMore, setIsMore] = useState(false);

  return (
    <>
      {list
        .filter((_, idx) => idx < 5 || isMore)
        .map((item) => (
          <div key={item} item={item}>
            {React.cloneElement(children, {
              item,
            })}
          </div>
        ))}

      {list.length > 5 && (
        <small
          role="button"
          onClick={() => setIsMore(!isMore)}
          className="text-primary"
        >
          {isMore ? (
            <span className="material-icons align-middle">arrow_drop_up</span>
          ) : (
            <span className="material-icons align-middle">arrow_drop_down</span>
          )}
          see more
        </small>
      )}
    </>
  );
};

export default SeeMore;
