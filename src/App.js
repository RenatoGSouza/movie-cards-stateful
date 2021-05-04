import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
// import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // searchText: '',
      // bookmarkedOnly: false,
      // selectedGenre: '',
    };
  }

handleClick = () => {

}

render() {
  // const { searchText,
  //   bookmarkedOnly,
  //   selectedGenre } = this.state;
  return (
    <div className="App">
      <Header />
      {/* <SearchBar
        searchText={ searchText }
        onSearchTextChange={ this.onSearchTextChange }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ this.onBookmarkedChange }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ this.onSelectedGenreChange }
      /> */}
      <MovieLibrary movies={ movies } />
      <AddMovie
        onClick={ this.handleClick }
      />
    </div>
  );
}
}

export default App;
