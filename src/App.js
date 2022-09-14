import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MainNewsFeed from './components/MainNewsFeed';
// import SearchBar from './components/SearchBar';

const App = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('mountains');
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getArticles = async () => {
      const res = await axios.get(`https://newsapi.org/v2/everything?query=${query}&apiKey=382a8c7028af4e9c80194d4000d35aed`, {
        params: query
      })
      const data = await res.json();
      setItems(data.articles);
    }

    getArticles();
    setIsLoading(false);
  }, [query]);

    return (
      <div className='container-lg'>
        <h1 className='bg-primary p-3'>The Hacker News</h1>
        <nav className='navbar navbar-expand-lg bg-light'>My Navbar</nav>
          {/* <SearchBar 
            onSubmit={setItems(items)}
          /> */}
          <form autoComplete='off'>
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Search here...'
              />
          </form>
          isLoading ? (
            <div>Loading</div>
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
            ))
            </section>
          {/* <MainNewsFeed />
          <a href=''></a> */}
      </div>
    );
}

export default App;
