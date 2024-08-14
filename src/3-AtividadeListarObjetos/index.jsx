import { useState } from "react";

export default function Home () {

  const [listaProdutos, setProdutos] = useState ([
    {id: 1, nome: 'Bola Oficial de Voleibol Mikasa V200W', preco: 'R$ 949,99'},
    {id: 2, nome: 'Bola Vôlei Penalty 8.0 Pró Ix', preco: 'R$ 498,99'},
    {id: 3, nome: 'Joelheira com Proteção - Linha SPRY Preto', preco: 'R$ 259,00'},
    {id: 4, nome: 'Joelheira com Proteção - Linha SPRY Branco', preco: 'R$ 259,00'},
    {id: 5, nome: 'Protetor de Antebraço - Linha CBV Preto', preco: 'R$ 201,00'},
    {id: 6, nome: 'Protetor de Antebraço - Linha CBV Branco', preco: 'R$ 201,00'},
    {id: 7, nome: 'Tênis Nike Giannis Immortality 3 Masculino - Branco e Azul ', preco: 'R$ 599,99'},
    {id: 8, nome: 'Tênis Nike Kyrie 7 Masculino - Copa', preco: 'R$ 799,99'}
  ])

  return (
    <div>
      <h1> Itens para volei</h1>
      {
        listaProdutos.map((produto) => 
          <div key={produto.id}>
            <p>{produto.nome}</p>
            <p>{produto.preco}</p>
          </div>
        )
      }
    </div>
  );
}