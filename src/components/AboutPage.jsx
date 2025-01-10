import React from 'react';
import '../style/AboutPage.css'

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>
        About Us <span>Discover a world of flavors</span>
      </h1>
      <p>
        Welcome to <strong>[App Name]</strong> – your passport to the world’s most delicious flavors! 🌍🍴
      </p>
      <p>
        We believe that every city and country has a unique story to tell through its food. At <strong>[App Name]</strong>, we aim to bring these stories to life by helping you discover the best native dishes, authentic recipes, and top-rated restaurants wherever you are.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li>
          <strong>Explore Local Foods:</strong> Discover the most popular traditional dishes from cities and countries around the world.
        </li>
        <li>
          <strong>Authentic Recipes:</strong> Learn how to prepare these dishes with easy-to-follow, authentic recipes sourced from trusted locals and chefs.
        </li>
        <li>
          <strong>Top Restaurant Recommendations:</strong> Find the best places near you or your travel destination to enjoy these native dishes.
        </li>
        <li>
          <strong>Personalized Suggestions:</strong> Save your favorite dishes and get tailored recommendations based on your preferences.
        </li>
      </ul>

      <h2>Our Mission</h2>
      <p>
        At <strong>[App Name]</strong>, we aim to connect people through the universal language of food. By celebrating local cuisines and cultures, we hope to inspire a deeper appreciation for the world’s diverse culinary traditions.
      </p>

      <h2>How It Works</h2>
      <ol>
        <li>
          <strong>Search:</strong> Choose a country or city to explore its signature dishes.
        </li>
        <li>
          <strong>Discover:</strong> Browse recipes and learn about the history behind each dish.
        </li>
        <li>
          <strong>Dine:</strong> Find nearby restaurants serving these dishes or plan your trip with our recommendations.
        </li>
      </ol>

      <h2>Why Choose Us?</h2>
      <ul>
        <li>Curated food recommendations from locals and experts.</li>
        <li>Simple, intuitive design for easy exploration.</li>
        <li>Continuously updated with new recipes and food guides.</li>
      </ul>

      <p className="cta">
        <strong>Join us on this tasty journey!</strong> Food is more than just nourishment – it’s a gateway to culture.
      </p>
    </div>
  );
};

export default AboutPage;