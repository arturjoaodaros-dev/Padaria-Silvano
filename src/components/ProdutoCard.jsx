import { useState } from 'react'
import Foto from './Foto.jsx'
import { useReveal } from '../hooks/useReveal.js'
import './ProdutoCard.css'

export default function ProdutoCard({ produto }) {
  const [expandido, setExpandido] = useState(false)
  const ref = useReveal()

  return (
    <article ref={ref} className="produto-card reveal">
      <Foto
        src={produto.imagem}
        alt={produto.nome}
        largura={produto.largura}
        altura={produto.altura}
      />
      <div className="produto-card-corpo">
        <h3>{produto.nome}</h3>
        <p>{produto.descricao}</p>
        {expandido && <p className="produto-card-detalhes">{produto.detalhes}</p>}
        <button
          type="button"
          className="produto-card-link"
          aria-expanded={expandido}
          onClick={() => setExpandido((v) => !v)}
        >
          {expandido ? 'Ver Menos' : 'Ver Mais'} <span aria-hidden="true">{expandido ? '←' : '→'}</span>
        </button>
      </div>
    </article>
  )
}
