import React from 'react'

import * as s from './styled'


function Email(){
   function handle(){
    
    let email = document.getElementById('email').value;
    let data = {
      
      email,
    }
    
    
    if(email.indexOf('@') == -1){
        alert('Não foi identificado um @, por favor digite novamente')
    } else{
        let convertData = JSON.stringify(data)
        localStorage.setItem('Nome',  convertData) 
    }
    document.getElementById('email').value='';
    
   
   }
    return (
        
        <s.container>
            <s.h1Text>Receba as ofertas relampago por email !</s.h1Text>
            <form>
            <s.mailInput id="email" placeholder="seuemail@email.com"/>
            <s.mailButton type="button" onClick={handle}>Enviar</s.mailButton>
            </form>
        </s.container>
        
    );
}

export default Email;
