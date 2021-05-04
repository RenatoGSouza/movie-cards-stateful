import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onBookmarkedChange = ({ target: { checked } }) => {
    this.setState({ bookmarkedOnly: checked });
  }

  onSearchTextChange = ({ target: { value } }) => {
    this.setState({ searchText: value });
  }

  onSelectedGenreChange = ({ target: { value } }) => {
    this.setState({ selectedGenre: value });
  }

  newCardMovie = (movie) => {
    this.setState((oldMovies) => ({ movies: [...oldMovies.movies, movie] }));
  }

  render() {
    const { searchText, movies: filmes, bookmarkedOnly, selectedGenre } = this.state;

    const filterText = filmes
      .filter(({ title, subtitle, storyline }) => (
        title.toUpperCase().includes(searchText.toUpperCase())
      || subtitle.toUpperCase().includes(searchText.toUpperCase())
      || storyline.toUpperCase().includes(searchText.toUpperCase())));

    const filterMarked = filterText
      .filter((movie) => ((bookmarkedOnly === false) ? true : movie.bookmarked));

    const filterGenre = filterMarked
      .filter((movie) => movie.genre.includes(selectedGenre));
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ filterGenre } />
        <AddMovie onClick={ this.newCardMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(Object),
};

MovieLibrary.defaultProps = {
  movies: [],
};

export default MovieLibrary;
