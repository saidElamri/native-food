// Home.jsx
import React, { useState } from 'react';
import { getMealsByArea } from '../api';
import { Link } from 'react-router-dom';
import '../style/Home.css';

const Home = () => {
  const [area, setArea] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Supported regions
  const regions = [
    'American',
    'British',
    'Canadian',
    'Chinese',
    'Croatian',
    'Dutch',
    'Egyptian',
    'Filipino',
    'French',
    'Greek',
    'Indian',
    'Irish',
    'Italian',
    'Jamaican',
    'Japanese',
    'Kenyan',
    'Malaysian',
    'Mexican',
    'Moroccan',
    'Polish',
    'Portuguese',
    'Russian',
    'Spanish',
    'Thai',
    'Tunisian',
    'Turkish',
    'Vietnamese',
  ];

  const handleAreaChange = async (e) => {
    const selectedArea = e.target.value;
    setArea(selectedArea);

    if (!selectedArea) {
      setMeals([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const mealData = await getMealsByArea(selectedArea);

      if (mealData) {
        setMeals(mealData);
      } else {
        setMeals([]);
        setError('No meals found for the selected area. Please try another.');
      }
    } catch (err) {
      console.error('Error fetching meals:', err);
      setError('Failed to load meals. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <h1>Food Explorer</h1>

      <div className="area-dropdown">
        <label htmlFor="area">Select a Region or Country: </label>
        <select id="area" value={area} onChange={handleAreaChange}>
          <option value="">Select a Region</option>
          {regions.map((region, index) => (
            <option key={index} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      {loading && <p>Loading meals...</p>}
      {error && <p className="error">{error}</p>}

      <div className="meals-list">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div key={meal.idMeal} className="meal-card">
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h2>{meal.strMeal}</h2>
              <Link to={`/meal/${meal.idMeal}`}>View Recipe</Link>
            </div>
          ))
        ) : (
          <p>No meals found for the selected area.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
