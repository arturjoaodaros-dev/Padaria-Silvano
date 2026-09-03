import './Hero.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <img src="/Fachada.jpg" alt="Fachada da Padaria Silvano" className="hero-imagem" loading="eager" />
      <div className="hero-camada" />
      <div className="container hero-conteudo">
        <h1>Bem-vindo à Padaria Silvano</h1>
        <p className="hero-subtitulo">Qualidade, Tradição e Frescura desde 1990</p>
        <a href="#produtos" className="botao botao-primario">
          Conheça Nossos Produtos
        </a>
      </div>
    </section>
  )
}
