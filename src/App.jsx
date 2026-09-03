import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Produtos from './components/Produtos.jsx'
import Sobre from './components/Sobre.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Produtos />
        <Sobre />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
