import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.css';
import TopStories from './components/TopStories';
import MainCard from './components/MainCard';

const App = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState();
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getArticles = async (text) => {
      const res = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=382a8c7028af4e9c80194d4000d35aed`, {
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
    
    if (!text) {
      alert('You must enter some text!');
    }
    else {
      setQuery(text);
      setText('');
    }
  }

    return (
      <div key={'articles'}>
        <h1 className='title'>THE HACKER NEWS</h1>
        <nav className='navbar'>My Navbar</nav>
        <br />
        <form autoComplete='off' onSubmit={handleSubmit}>
        <div>
          <input 
            type='text'
            id='search'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Search Here...'
          />
        </div>
      </form>          
      <br />
        {isLoading ? (
            <div>Loading...</div>
            ) : (
            <section className='col-8'>
              <article key={'article'} className='cards-everything'>   
                {items.slice(0, 10).map((item, index) => 
                  <MainCard key={index} item={item} />
                )}
              </article>
            </section>
            )}
            <div id='topStories'>
             <TopStories />
            </div>
      </div>
      
    );
}

export default App;
