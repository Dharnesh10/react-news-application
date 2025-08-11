import React, { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import NewsList from './NewsList';

const News = ({category}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error("Failed to fetch news");
        return response.json();
      })
      .then(data => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 p-3">
        The Great <Badge>American</Badge> News
      </h2>

      {loading && (
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="border" variant="danger" />
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      <div className="row g-4">
        {articles.map((news, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
            <NewsList
              title={news.title || "No Title"}
              author={news.author || "Unknown"}
              description={news.description || "No Description"}
              content={news.content || ""}
              image={news.urlToImage || "https://via.placeholder.com/300x200"}
              url={news.url || "#"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
