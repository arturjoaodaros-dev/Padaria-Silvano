import Foto from './Foto.jsx'
import { valores } from '../data/site.js'
import { useReveal } from '../hooks/useReveal.js'
import './Sobre.css'

export default function Sobre() {
  const refTexto = useReveal()
  const refFotos = useReveal()

  return (
    <section id="sobre" className="sobre">
      <div className="container sobre-grid">
        <div ref={refTexto} className="sobre-texto reveal">
          <h2>Sobre a Padaria Silvano</h2>
          <p>
            Desde 17 de setembro de 1990, a Padaria Silvano oferece pães artesanais frescos,
            feitos todos os dias com ingredientes selecionados. Nossa missão é levar à mesa das
            famílias com cuidado e sabor, unindo receitas tradicionais a um atendimento acolhedor.
            Mais do que uma padaria, um lugar de encontro do bairro.
          </p>

          <ul className="sobre-valores">
            {valores.map((valor) => (
              <li key={valor.titulo}>
                <h3>{valor.titulo}</h3>
                <p>{valor.descricao}</p>
              </li>
            ))}
          </ul>
        </div>

        <div ref={refFotos} className="sobre-fotos reveal">
          <Foto
            src="/Fachada.jpg"
            alt="Fachada da Padaria Silvano"
            largura={1024}
            altura={576}
            className="sobre-foto-principal"
          />
          <figure className="sobre-foto-secundaria">
            <Foto src="/VitrineComidas.jpg" alt="Vitrine de pães e produtos da Padaria Silvano" largura={1200} altura={900} />
            <figcaption>A equipe da Padaria Silvano prepara tudo com cuidado, todos os dias.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
