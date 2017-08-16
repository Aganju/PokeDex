import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const allPokemon = this.props.pokemon.map( poke => {
      return (
        <li key={ poke.id }>
          <a>
            { poke.id }
            <img src={poke.image_url} />
            { poke.name }
          </a>
        </li>
      );
    });

    return (
      <aside>
        <ul>{ allPokemon }</ul>
      </aside>
    );
  }
}

export default PokemonIndex;
