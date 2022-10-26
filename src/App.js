import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import './style.css';
import TopStories from './components/TopStories';

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
              <article className='card cards-everything' key='cards'>   
                {items.slice(0, 10).map(({ author, urlToImage, publishedAt, title, url, id }) => (
                  <div key={id} className='card-body'>
                    <h2 id='title'>{title}</h2>
                    <ul>
                      <li key={'author'}>By {author}</li>
                      <img id="image" src={urlToImage} key='img'></img>
                      <li key={'linky'}>
                        <a href={url} target='_blank' rel='noreferrer'>
                        Read Full Article
                        </a>
                      </li>
                    </ul>
                    <p>Published {format(new Date(publishedAt), 'MM/dd/yyyy')}</p>
                  </div>
                ))}
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
