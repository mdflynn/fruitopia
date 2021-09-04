const fetchFruitInformation = async () => {
  const baseUrl = "https://www.fruityvice.com/api/fruit";

  // all for HomePage view, id/name for FruitView
  const response = await fetch(`${baseUrl}/all`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

