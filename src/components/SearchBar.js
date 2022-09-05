import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);  
  }

  render () {
    return (
    <div>
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input 
            type='text'
            value={this.state.term}
            placeholder='Search Here...'
            onChange={e => this.setState({ term: e.target.value })}
          />
        </div>
      </form>
    </div>
  )};
}

export default SearchBar;