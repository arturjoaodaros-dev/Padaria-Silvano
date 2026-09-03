import { produtos } from '../data/site.js'
import ProdutoCard from './ProdutoCard.jsx'
import './Produtos.css'

export default function Produtos() {
  return (
    <section id="produtos" className="produtos">
      <div className="container">
        <h2 className="secao-titulo">Nossos Produtos Especiais</h2>
        <p className="secao-subtitulo">
          Cada item é feito com amor e ingredientes frescos, do pão de todo dia às encomendas especiais.
        </p>
        <div className="produtos-grid">
          {produtos.map((produto) => (
            <ProdutoCard key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
    </section>
  )
}
