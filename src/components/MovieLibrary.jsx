import React, { Component } from 'react';
import SearchBar from './SearchBar';
import movies from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      // bookmarkedOnly: false,
      // selectedGenre: '',
      movies,
    };
  }

  render() {
    const { searchText, movies: filmes } = this.state;

    return (
      <div>
        <SearchBar searchText={ searchText } movies={ filmes } />
      </div>
    );
  }
}

export default MovieLibrary;
