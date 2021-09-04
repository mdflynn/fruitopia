const fetchFruitInformation = async () => {

  const corsProxy = "https://evening-lake-85504.herokuapp.com/"
  const baseUrl = "https://www.fruityvice.com/api/fruit"

  const response = await fetch(`${corsProxy}${baseUrl}/all`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export default fetchFruitInformation;