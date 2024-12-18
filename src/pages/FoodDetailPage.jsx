import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMealDetailsById } from '../api';
import '../style/FoodDetailPage.css';

const FoodDetailPage = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const data = await getMealDetailsById(id);
        if (data) {
          setMeal(data);
        }
      } catch (error) {
        console.error('Error fetching meal details:', error);
      }
    };
    fetchMeal();
  }, [id]);

  if (!meal) {
    return <div className="loading-message">Loading...</div>;
  }

  // Extracting ingredients from the meal data
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: meal[`strIngredient${i}`],
        measure: meal[`strMeasure${i}`],
      });
    }
  }

  return (
    <div className="food-detail-container">
      <div className="food-header">
        <h1>{meal.strMeal}</h1>
        <p className="meal-area">Cuisine: {meal.strArea}</p>
      </div>
      <div className="food-content">
        <div className="food-image-container">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="food-image"
          />
        </div>
        <div className="food-description">
          <h2>Recipe Instructions</h2>
          <p>{meal.strInstructions}</p>

          {meal.strSource && (
            <a
              href={meal.strSource}
              target="_blank"
              rel="noopener noreferrer"
              className="view-recipe-link"
            >
              View Full Recipe
            </a>
          )}

          <h3>Ingredients</h3>
          <ul className="ingredients-list">
            {ingredients.map((item, index) => (
              <li key={index}>
                <strong>{item.ingredient}</strong>: {item.measure}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {meal.strYoutube && (
        <div className="youtube-container">
          <h3>Watch the Recipe</h3>
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            Watch on YouTube
          </a>
        </div>
      )}
    </div>
  );
};

export default FoodDetailPage;
