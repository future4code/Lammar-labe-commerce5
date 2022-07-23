import React from "react";

export const Produto=(props) => {
    const componentsProdutos=props.myProdutos.map((item, index)=>{
      return <section key={item.id}>
        <img src={item.imagem}/>
        <p>{item.nome}</p>
        <p>{item.preco}</p>
        <button>Adicionar ao Carrinho</button>
      </section> 
    })
    
    return (
      <div>
        {componentsProdutos}
      </div>
    );
}
