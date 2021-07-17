import React from 'react'
import * as s from './style'

function Home(){
    return (
        <s.PrincipalContainer>
        <s.Container>
        <s.prodText>Cadeira Star Wars</s.prodText>
        
        <s.imgProd src="https://www.oversodoinverso.com.br/wp-content/uploads/2019/06/1-12.jpg"></s.imgProd>
       <p>R$: 220,00</p>
        </s.Container>

        <s.Container>
        <s.prodText>Estante moderna</s.prodText>
        <s.imgProd src="https://casaeconstrucao.org/wp-content/uploads/2017/11/Estantes-Modernas-9.jpg"></s.imgProd>
        <p>R$ 140,00</p>
        </s.Container>

        

        
        
        </s.PrincipalContainer>
    );
}

export default Home;