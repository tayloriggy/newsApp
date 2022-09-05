import axios from 'axios';
import React from 'react';
import MainNewsFeed from './components/MainNewsFeed';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  state = { sloths: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get('https://newsapi.org/v2/everything?q=sloths&apiKey=382a8c7028af4e9c80194d4000d35aed', {
      params: { query: term }
    });

    this.setState({ sloths: response.data.results });
  };




render () {
  return (
    <div className='container-lg'>
      <h1 className='bg-primary p-3'>The Hacker News</h1>
      <nav className='navbar navbar-expand-lg bg-light'>My Navbar</nav>
      <SearchBar onSubmit={this.onSearchSubmit} />
      <MainNewsFeed sloths={this.state.sloths}/>
    </div>
  )};
}

export default App;
