const fetchFruitInformation = async () => {
  const baseUrl = "https://www.fruityvice.com/api/fruit";

  const response = await fetch(baseUrl);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};
