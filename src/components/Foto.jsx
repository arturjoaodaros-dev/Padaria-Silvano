import './Foto.css'

export default function Foto({ src, alt, largura, altura, className = '', prioridade = false }) {
  return (
    <div className={`foto-moldura ${className}`}>
      <img
        src={src}
        alt={alt}
        width={largura}
        height={altura}
        loading={prioridade ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  )
}
