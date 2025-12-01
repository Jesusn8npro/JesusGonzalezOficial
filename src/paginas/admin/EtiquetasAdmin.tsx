import React, { useMemo, useState } from 'react'
import type { Etiqueta, UbicacionEtiqueta } from '../../utilidades/etiquetas'
import { agregarEtiqueta, aplicarEtiqueta, listarEtiquetas, eliminarEtiqueta, alternarHabilitada } from '../../utilidades/etiquetas'
import './EtiquetasAdmin.css'

const ejemploGtag = `<!-- Google tag (gtag.js) -->\n<script async src="https://www.googletagmanager.com/gtag/js?id=G-HX4CNELDGR"></script>\n<script>\nwindow.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-HX4CNELDGR');\n</script>`

const EtiquetasAdmin: React.FC = () => {
  const [nombre, setNombre] = useState('Google Analytics')
  const [ubicacion, setUbicacion] = useState<UbicacionEtiqueta>('head')
  const [contenidoHtml, setContenidoHtml] = useState<string>(ejemploGtag)
  const [habilitada, setHabilitada] = useState(true)

  const etiquetas = useMemo(() => listarEtiquetas(), [])
  const [items, setItems] = useState<Etiqueta[]>(etiquetas)

  const guardar = () => {
    const id = nombre.trim().toLowerCase().replace(/\s+/g, '-') + '-' + ubicacion
    const nueva: Etiqueta = { id, nombre, ubicacion, contenidoHtml, habilitada }
    agregarEtiqueta(nueva)
    setItems(listarEtiquetas())
  }

  const aplicar = (e: Etiqueta) => {
    aplicarEtiqueta(e)
  }

  const borrar = (id: string) => {
    eliminarEtiqueta(id)
    setItems(listarEtiquetas())
  }

  const cambiarHabilitada = (id: string, value: boolean) => {
    alternarHabilitada(id, value)
    setItems(listarEtiquetas())
  }

  return (
    <div className="admin-etiquetas">
      <h1 className="admin-titulo">Administrador de Etiquetas</h1>
      <p className="admin-desc">Añade código para el <code>head</code> o el <code>body</code>. Úsalo con responsabilidad.</p>

      <div className="admin-form">
        <div className="admin-row">
          <input className="admin-input" placeholder="Nombre de la etiqueta" value={nombre} onChange={e => setNombre(e.target.value)} />
          <select className="admin-select" value={ubicacion} onChange={e => setUbicacion(e.target.value as UbicacionEtiqueta)}>
            <option value="head">Head</option>
            <option value="body">Body</option>
          </select>
        </div>
        <textarea className="admin-textarea" placeholder="Pega aquí el HTML/Script/CSS" value={contenidoHtml} onChange={e => setContenidoHtml(e.target.value)} />
        <div className="admin-actions">
          <label className="switch"><input type="checkbox" checked={habilitada} onChange={e => setHabilitada(e.target.checked)} /> Habilitada</label>
          <button className="btn btn-secundario" onClick={() => setContenidoHtml(ejemploGtag)}>Cargar ejemplo GA4</button>
          <button className="btn btn-primario" onClick={guardar}>Guardar</button>
        </div>
      </div>

      <div className="lista-etiquetas">
        {items.map(it => (
          <div key={it.id} className="item">
            <div>
              <div className="item-nombre">{it.nombre}</div>
              <div className="item-meta">Ubicación: {it.ubicacion} · Estado: {it.habilitada ? 'habilitada' : 'deshabilitada'}</div>
            </div>
            <div className="item-actions">
              <label className="switch"><input type="checkbox" checked={it.habilitada} onChange={e => cambiarHabilitada(it.id, e.target.checked)} /> Activar</label>
              <button className="btn btn-secundario" onClick={() => aplicar(it)}>Aplicar ahora</button>
              <button className="btn" onClick={() => borrar(it.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EtiquetasAdmin
