import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

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
    const { movies } = this.props;
    if (!checked) {
      this.setState({ movies });
    } else {
      this.setState({ movies: movies.filter((movie) => movie.bookmarked === checked) });
    }
  }

  onSearchTextChange = ({ target: { value } }) => {
    this.setState({ searchText: value });
    const { movies } = this.props;
    if (value === '') {
      this.setState({ movies });
    } else {
      this.setState({
        movies: movies.filter(({ title }) => title.toUpperCase()
          .includes(value.toUpperCase())) });
    }
  }

  onSelectedGenreChange = ({ target: { value } }) => {
    this.setState({ selectedGenre: value });
    const { movies } = this.props;
    if (value === '') {
      this.setState({ movies });
    } else {
      this.setState({ movies: movies.filter((movie) => movie.genre === value) });
    }
  }

  // filterText = () => {
  //   const { searchText } = this.state;
  //   this.setState({ movies: movies.filter((movie) => movie.title === searchText) });
  // }

  // filterGenre = () => {
  //   const { selectedGenre, movies: filmes } = this.state;
  //   if (selectedGenre === '') {
  //     this.setState({ movies });
  //   }
  //   this.setState({ movies: filmes.filter((movie) => movie.genre === selectedGenre),
  //   });
  // }

  render() {
    const { searchText, movies: filmes, bookmarkedOnly, selectedGenre } = this.state;

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
        <MovieList movies={ filmes } />
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
