import { useEffect, useState } from 'react'
import { navegacao } from '../data/site.js'
import './Header.css'

export default function Header() {
  const [rolado, setRolado] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)

  useEffect(() => {
    function onScroll() {
      setRolado(window.scrollY > 80)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setMenuAberto(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuAberto ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuAberto])

  return (
    <header className={`header ${rolado || menuAberto ? 'header-solido' : ''}`}>
      <div className="container header-conteudo">
        <a href="#inicio" className="header-marca" onClick={() => setMenuAberto(false)}>
          <img src="/Logo.jpg" alt="Padaria Silvano" className="header-logo" />
        </a>

        <nav className="header-nav-desktop" aria-label="Navegação principal">
          <ul>
            {navegacao.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.rotulo}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={`header-hamburguer ${menuAberto ? 'aberto' : ''}`}
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuAberto((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="menu-mobile"
        className={`header-nav-mobile ${menuAberto ? 'aberto' : ''}`}
        aria-label="Navegação mobile"
      >
        <ul>
          {navegacao.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setMenuAberto(false)}>
                {item.rotulo}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
