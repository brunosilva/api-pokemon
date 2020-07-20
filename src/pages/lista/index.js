import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function App(props) {
  const history = useHistory();
  const [ erro, setErro ] = useState(false);
  const [ pokemon, setPokemon ] = useState([]);

  function handlePesquisa(){
    axios.get(`https://pokeapi.co/api/v2/pokemon/`).then(response => {
      setPokemon(response.data.results);

      console.log(setPokemon(response.data.results));
      localStorage.setItem('lista', JSON.stringify(setPokemon(response.data.results)));
      setErro(false);

      // history.push('/detalhes');
    })
    .catch(err => {
      setErro(true);
    });
  }

  return (
    <S.HomeContainer>
      <S.Content>
        <S.Button type="button" onClick={handlePesquisa}>Listar Pokémons</S.Button>
      </S.Content>

      {pokemon.map((item) => (
        <S.cardPokemon>
          <S.Title>
            { item.name }
          </S.Title>
          <S.Link>
            { item.url }
          </S.Link>
        </S.cardPokemon>
      ))}
    </S.HomeContainer>
  );
}

export default App;
