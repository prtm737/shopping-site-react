const item = ({ data, addToCart }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
        <div>
          <img
            src={value.urls.small}
            className="h-72 w-full object-cover rounded-lg shadow-md"
            alt={value.alt_description}
          />
        </div>
      </div>
    </>
  );
};

export default item;
