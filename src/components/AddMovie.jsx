import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleInput = ({ target: { value, id } }) => {
    this.setState({ [id]: value });
  }

  handleSelect= ({ target: { value, id } }) => {
    this.setState({ [id]: value });
  }

  createInput = (value, nameLabel, id, type) => (
    <input
      type={ type }
      id={ id }
      value={ value }
      data-testid={ `${nameLabel}-input` }
      onChange={ this.handleInput }
    />
  )

  createTextArea = (storyline) => (
    <textarea
      data-testid="storyline-input"
      name="sinopse"
      id="storyline"
      className="storyline"
      value={ storyline }
      onChange={ this.handleInput }
      cols="30"
      rows="3"
    />
  )

  createSelect = (genre) => (
    <select
      id="genre"
      value={ genre }
      data-testid="genre-input"
      onChange={ this.handleSelect }
    >
      <option data-testid="genre-option" value="action">Ação</option>
      <option data-testid="genre-option" value="comedy">Comédia</option>
      <option data-testid="genre-option" value="thriller">Suspense</option>
    </select>
  )

  handleClick = () => {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  createButton = (click) => (
    <button
      type="button"
      id="btn"
      onClick={ () => {
        click(this.state);
        this.setState({
          subtitle: '',
          title: '',
          imagePath: '',
          storyline: '',
          rating: 0,
          genre: 'action',
        });
      } }
      value="Adicionar filme"
      data-testid="send-button"
    >
      Adicionar filme
    </button>
  )

  render() {
    const { subtitle, title, imagePath, rating, genre, storyline } = this.state;
    const { onClick } = this.props;
    return (
      <form action="" data-testid="add-movie-form" className="add-movie">
        <div>
          <label htmlFor="title" data-testid="title-input-label">
            Título
            {this.createInput(title, 'title', 'title', 'text')}
          </label>
          <label htmlFor="subTitle" data-testid="subtitle-input-label">
            Subtítulo
            {this.createInput(subtitle, 'subtitle', 'subtitle', 'text')}
          </label>
          <label htmlFor="img" data-testid="image-input-label">
            Imagem
            {this.createInput(imagePath, 'image', 'imagePath', 'text')}
          </label>
        </div>
        <div>
          <label htmlFor="sinopse" data-testid="storyline-input-label">
            Sinopse
            {this.createTextArea(storyline)}
          </label>
          <section>
            <label htmlFor="rating" data-testid="rating-input-label">
              Avaliação
              {this.createInput(rating, 'rating', 'rating', 'number')}
            </label>
            <label htmlFor="select" data-testid="genre-input-label">
              Gênero
              {this.createSelect(genre)}
            </label>
          </section>
        </div>
        {this.createButton(onClick)}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: () => {},
};

export default AddMovie;
