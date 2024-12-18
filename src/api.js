// api.js
import axios from 'axios';

const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const getMealsByArea = async (area) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/filter.php`, {
      params: { a: area },
    });
    console.log("API response:", response.data);
    return response.data.meals;
  } catch (error) {
    console.error('Error fetching meals by area:', error);
    return [];
  }
};

export const getMealDetailsById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/lookup.php`, {
      params: { i: id },
    });
    return response.data.meals[0];
  } catch (error) {
    console.error('Error fetching meal details:', error);
    return null;
  }
};
