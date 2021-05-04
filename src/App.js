import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
    this.handleClick = this.handleClick.bind();
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

handleClick = () => {

}

render() {
  const { searchText,
    bookmarkedOnly,
    selectedGenre } = this.state;
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ this.onSearchTextChange }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ this.onBookmarkedChange }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ this.onSelectedGenreChange }
      />
      <AddMovie
        onClick={ this.handleClick }
      />
    </div>
  );
}
}

export default App;
