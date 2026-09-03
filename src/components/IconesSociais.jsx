const icones = {
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5h2.5l.5-3H13.5V8.5c0-.9.25-1.5 1.55-1.5H16.6V4.35C16.3 4.3 15.3 4.2 14.15 4.2c-2.4 0-4.05 1.47-4.05 4.15V10.5H7.6v3h2.5V21h3.4z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 20.5l4.4-1.3A8.4 8.4 0 1 0 12 3.5zm0 1.6a6.8 6.8 0 0 1 5.9 10.2 6.8 6.8 0 0 1-9.9 2.4l-.3-.2-2.6.8.8-2.5-.2-.3A6.8 6.8 0 0 1 12 5.1zm-2.9 3.5c-.2 0-.4.1-.5.3-.2.2-.7.7-.7 1.6s.7 1.9.8 2c.1.1 1.4 2.2 3.4 3 .5.2.9.3 1.2.4.5.2 1 .1 1.3-.1.4-.2.7-.9.8-1.2.1-.3.1-.5 0-.6-.1-.1-.2-.2-.5-.3l-1.4-.7c-.2-.1-.4-.1-.5.1l-.4.5c-.1.1-.2.2-.4.1-.2-.1-.8-.3-1.5-1-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.3.1-.4l.3-.4c.1-.1.1-.2.2-.4 0-.1 0-.3 0-.4-.1-.1-.5-1.3-.7-1.8-.2-.4-.4-.4-.5-.4h-.4z" />
    </svg>
  ),
}

export default function IconesSociais({ redes }) {
  return (
    <ul className="icones-sociais">
      {redes.map((rede) => (
        <li key={rede.icone}>
          <a href={rede.href} aria-label={rede.rotulo} target="_blank" rel="noopener noreferrer">
            {icones[rede.icone]}
          </a>
        </li>
      ))}
    </ul>
  )
}
