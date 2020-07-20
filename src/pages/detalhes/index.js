import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as S from './styled';


export default function Detalhes(){
    const history = useHistory();
    const [ repositories, setRepositories ] = useState([]);
    const [ erro, setErro ] = useState(false);
    const [ detalhes, setDetalhes ] = useState([]);

    function detalhesPokemon(url){
        axios.get(`https://pokeapi.co/api/v2/pokemon/{url}`).then(response => {
            setDetalhes(response.data.results);

        })
        .catch(err => {
            setErro(true);
        });
    }


    useEffect(() => {
        let lista = localStorage.getItem('lista');
        
        if(lista != null){
            lista = JSON.parse(lista);
            setRepositories(lista);
            localStorage.clear();
        } else {
            history.push('/');
        }
    }, []);

    return(
        <S.Container>
            <S.Content>
                <S.Button type="button">Listar Pokémons</S.Button>
            </S.Content>

        </S.Container>
    )
}