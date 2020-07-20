import styled from 'styled-components';

export const HomeContainer = styled.div`
    width:100%;
    flex-wrap:wrap;
    display:flex;
    align-items:center;
    justify-content:center;
    height:100vh;
    position:relative;
`;

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items:center;
    justify-content:center;
`;

export const Button = styled.button`
    height: 2.1rem;
    cursor:pointer;
    border: 1px solid #000;
    background: #000;
    color:#fff;
    border-radius:0;

    &:focus,
    &:active{
        outline:none;
        box-shadow: none;
    }
`;

export const Title = styled.span`
    display: block;
    font-size:1.65rem;
    color: black;
    font-weight:700;
    margin-top:1rem;
`;

export const Link = styled.span`
    display: block;
    font-size:0.65rem;
    color: blue;
    font-weight:700;
    margin-top:1rem;
`;


export const cardPokemon = styled.div`
    widh:200px;
    heigth: 200px;
    border-radius:5px
    background-color: #ddd;
    border:1px solid #ddd;
    margin: 20px;
    padding: 10px;
    cursor:pointer;
`;