import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  createSelect = (selectedGenre, onSelectedGenreChange) => (
    <select
      value={ selectedGenre }
      onChange={ onSelectedGenreChange }
      name=""
      id="selectedGenre"
      data-testid="select-input"
    >
      <option data-testid="select-option" value="">Todos</option>
      <option data-testid="select-option" value="action">Ação</option>
      <option data-testid="select-option" value="comedy">Comédia</option>
      <option data-testid="select-option" value="thriller">Suspense</option>
    </select>
  )

  filterMovie = () => {

  }

  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form" className="search-bar">
        <h6>Pesquisar filme:</h6>
        <label htmlFor="text" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            type="text"
          />
        </label>
        <label htmlFor="checkbox" data-testid="checkbox-input-label">
          <input
            id="checkbox"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
          Mostrar somente favoritos
        </label>
        <label htmlFor="genero" data-testid="select-input-label">
          Filtrar por gênero
          {this.createSelect(selectedGenre, onSelectedGenreChange)}
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};
SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: () => {},
  bookmarkedOnly: false,
  onBookmarkedChange: () => {},
  selectedGenre: '',
  onSelectedGenreChange: () => {},
};

export default SearchBar;
