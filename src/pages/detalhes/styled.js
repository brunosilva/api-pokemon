import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    flex-wrap:wrap;
    display:flex;
    align-items:center;
    justify-content:center;
    height:100vh;
    position:absolut;
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