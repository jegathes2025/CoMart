const Ratings = ({ count }) => {
  const COUNT = Math.ceil(Number(count));

  return (
    <>
      {Array(5)
        .fill(1)
        .map((el, idx) => (
          <span
            key={idx.toString()}
            style={{ fontSize: "1rem" }}
            className={
              COUNT !== idx
                ? "text-warning material-icons"
                : "text-warning material-icons-outlined "
            }
          >
            grade
          </span>
        ))}
    </>
  );
};

export default Ratings;
