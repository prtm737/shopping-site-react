const Fakestoreapi = {
  fetchAllProducts: async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const results = res.json();
    return results;
  },
  fetchProductById: async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const results = res.json();
    return results;
  },
  fetchProductBySearchQuery: async (query) => {
    const res = await fetch("https://fakestoreapi.com/products");
    const results = await res.json();
    return results.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
  },
};

export default { Fakestoreapi };
