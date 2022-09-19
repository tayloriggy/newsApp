import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MainNewsFeed from './components/MainNewsFeed';
import SearchBar from './components/SearchBar';

const App = (setText, text) => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getArticles = async (text) => {
      const res = await axios.get('https://newsapi.org/v2/everything?q=baseball&apiKey=382a8c7028af4e9c80194d4000d35aed', {
        params: {
          query: text
        }
      });
      setItems(res.data.articles);
    }
    getArticles(text)
    setIsLoading(false)
  }, [query]);

  function handleSubmit (e) {
    e.preventDefault();
    
    setQuery(text);
    setText('');
  }

    return (
      <div className='container-lg'>
        <h1 className='bg-primary p-3'>The Hacker News</h1>
        <nav className='navbar navbar-expand-lg bg-light'>My Navbar</nav>
          <SearchBar 
          onSubmit={handleSubmit} 
          />
          {isLoading ? (
            <div>Loading...</div>
            ) : (
            <section>
            <>
              <article className='cards'>   
                {items.map(({ author, publishedAt, title, url, id }) => (
                  <div key={id}>
                    <h2>{title}</h2>
                    <ul>
                      <li>By {author}</li>
                      <li>
                        <a href={url} target='_blank' rel='noreferrer'>
                        Read Full Article
                        </a>
                      </li>
                    </ul>
                    <p>{publishedAt}</p>
                  </div>
                ))}
              </article>
            </>
            </section>
            )}
      </div>
    );
}

export default App;
