import React from 'react'
import * as s from './style'

function Nav() {
  return (
    <>
    <s.h1title>Soft Móveis</s.h1title>
    <s.Header>
    <s.List>
      <s.ListItem><s.listA href="#">Mais Vendidos</s.listA></s.ListItem>
      <s.ListItem><s.listA href="">Casa e decoração</s.listA></s.ListItem>
      <s.ListItem><s.listA href="">Móveis</s.listA></s.ListItem>
      <s.ListItem><s.listA href="">Decoração externa</s.listA></s.ListItem>
    </s.List>
    </s.Header>
    <s.secondText>Eu ouvi Balck Friday??????</s.secondText>
    </>
  );
}

export default Nav;
