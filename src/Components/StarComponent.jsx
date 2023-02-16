const StarComponent = ({ totalStars, selectedStars }) => {
  console.log(totalStars);
  console.log(selectedStars);

  return (
    <h1>
      {[...Array(totalStars)].map((_, i) => (i < selectedStars ? "#" : "0"))}
    </h1>
  );
};

export default StarComponent;
