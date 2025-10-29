export const getProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 3600 },
      cache: "force-cache",
    });

    if (!response.ok) throw new Error("Failed to fetch products");

    return await response.json();
  } catch (err) {
    console.error("Product fetch error:", err);
    return [];
  }
};
