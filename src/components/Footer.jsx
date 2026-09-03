import { navegacao, contato } from '../data/site.js'
import IconesSociais from './IconesSociais.jsx'
import './Footer.css'

export default function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-marca">
          <img src="/Logo.jpg" alt="Padaria Silvano" className="footer-logo" />
          <p>Pães artesanais, qualidade e tradição desde 1990.</p>
        </div>

        <div>
          <h4>Links Rápidos</h4>
          <ul>
            {navegacao.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.rotulo}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contato</h4>
          <ul className="footer-contato">
            <li>{contato.telefone}</li>
            <li>{contato.endereco}</li>
          </ul>
        </div>

        <div>
          <h4>Redes Sociais</h4>
          <IconesSociais redes={contato.redesSociais} />
        </div>
      </div>

      <div className="footer-copyright">
        <p>© {ano} Padaria Silvano. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
