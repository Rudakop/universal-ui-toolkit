const API_BASE_URL = 'http://localhost:5000';

export const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Error fetching data from ${endpoint}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

