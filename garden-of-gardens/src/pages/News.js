import React from 'react';

const News = () => {
  return (
    <div className="news-page">
      <h1>News & Updates</h1>
      <div className="news-item">
        <h2>Exciting New Arrivals!</h2>
        <p>We are pleased to announce our latest collection of exotic plants. Check them out now!</p>
        <p>Published on: January 15, 20XX</p>
      </div>
      <div className="news-item">
        <h2>Upcoming Sale Event</h2>
        <p>Get ready for our annual Spring Sale Event. Huge discounts on all plants!</p>
        <p>Published on: February 25, 20XX</p>
      </div>
      {/* Add more news articles as needed */}
    </div>
  );
};

export default News;
