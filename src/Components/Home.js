import React, { useState }  from "react";
import { Produto } from "./Produto";
import { produtos } from "../MockDeDados";

export function Home() {
    const [produtosAtuais,setProdutosAtuais]=useState(produtos)
    return (
      <div>
        <Produto myProdutos={produtosAtuais}/>
      </div>
    );
}
  