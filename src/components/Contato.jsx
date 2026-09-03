import { useState } from 'react'
import { contato } from '../data/site.js'
import IconesSociais from './IconesSociais.jsx'
import { useReveal } from '../hooks/useReveal.js'
import './Contato.css'

const vazio = { nome: '', email: '', mensagem: '' }

export default function Contato() {
  const [form, setForm] = useState(vazio)
  const [erros, setErros] = useState({})
  const [enviado, setEnviado] = useState(false)
  const ref = useReveal()

  function validar(dados) {
    const novosErros = {}
    if (!dados.nome.trim()) novosErros.nome = 'Informe seu nome.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dados.email)) novosErros.email = 'Informe um e-mail válido.'
    if (!dados.mensagem.trim()) novosErros.mensagem = 'Escreva sua mensagem.'
    return novosErros
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const novosErros = validar(form)
    setErros(novosErros)
    if (Object.keys(novosErros).length > 0) {
      setEnviado(false)
      return
    }

    const assunto = encodeURIComponent(`Contato pelo site — ${form.nome}`)
    const corpo = encodeURIComponent(`${form.mensagem}\n\nDe: ${form.nome} (${form.email})`)
    window.location.href = `mailto:${contato.email}?subject=${assunto}&body=${corpo}`
    setEnviado(true)
    setForm(vazio)
  }

  return (
    <section id="contato" className="contato">
      <div className="container">
        <h2 className="secao-titulo">Entre em Contato</h2>
        <p className="secao-subtitulo">
          Estamos por perto e prontos para atender você. Venha nos visitar ou mande uma mensagem.
        </p>

        <div ref={ref} className="contato-grid reveal">
          <div className="contato-info">
            <div>
              <h3>Telefone</h3>
              <a href={`tel:${contato.telefoneHref}`}>{contato.telefone}</a>
            </div>
            <div>
              <h3>Endereço</h3>
              <p>{contato.endereco}</p>
            </div>
            <div>
              <h3>Horário de Funcionamento</h3>
              <ul className="contato-horarios">
                {contato.horarios.map((h) => (
                  <li key={h.dia}>
                    <span>{h.dia}</span>
                    <span>{h.horas}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Redes Sociais</h3>
              <IconesSociais redes={contato.redesSociais} />
            </div>

            <iframe
              className="contato-mapa"
              title="Localização da Padaria Silvano"
              src={contato.mapaSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <form className="contato-form" onSubmit={handleSubmit} noValidate>
            <div className="campo">
              <label htmlFor="nome">Nome</label>
              <input id="nome" name="nome" type="text" value={form.nome} onChange={handleChange} />
              {erros.nome && <span className="campo-erro">{erros.nome}</span>}
            </div>

            <div className="campo">
              <label htmlFor="email">E-mail</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
              {erros.email && <span className="campo-erro">{erros.email}</span>}
            </div>

            <div className="campo">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" rows="5" value={form.mensagem} onChange={handleChange} />
              {erros.mensagem && <span className="campo-erro">{erros.mensagem}</span>}
            </div>

            <button type="submit" className="botao botao-primario">
              Enviar Mensagem
            </button>

            {enviado && <p className="contato-sucesso">Abrindo seu aplicativo de e-mail…</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
