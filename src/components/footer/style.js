import styled from "styled-components";

export const footerBase = styled.footer`
height: 100px;
display: flex;
justify-content: center;
align-items: center;
color: white;
font-family: sans-serif;
background-color: rgb(85, 78, 84);`

export const icone = styled.a`
margin-left: 10px;
color: black;
font-size: 50px;
transition:  0.3s;
&:hover{
    color: grey;
}
`