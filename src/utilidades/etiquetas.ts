export type UbicacionEtiqueta = 'head' | 'body'
export interface Etiqueta {
  id: string
  nombre: string
  ubicacion: UbicacionEtiqueta
  contenidoHtml: string
  habilitada: boolean
}

const CLAVE = 'etiquetasPersonalizadas'

export const listarEtiquetas = (): Etiqueta[] => {
  try {
    const crudo = localStorage.getItem(CLAVE)
    if (!crudo) return []
    const arr = JSON.parse(crudo) as Etiqueta[]
    return Array.isArray(arr) ? arr : []
  } catch {
    return []
  }
}

export const guardarEtiquetas = (etiquetas: Etiqueta[]) => {
  localStorage.setItem(CLAVE, JSON.stringify(etiquetas))
}

export const agregarEtiqueta = (e: Etiqueta) => {
  const actuales = listarEtiquetas()
  const sinDuplicados = actuales.filter(x => x.id !== e.id)
  sinDuplicados.push(e)
  guardarEtiquetas(sinDuplicados)
}

export const eliminarEtiqueta = (id: string) => {
  const actuales = listarEtiquetas().filter(x => x.id !== id)
  guardarEtiquetas(actuales)
}

export const alternarHabilitada = (id: string, habilitada: boolean) => {
  const actuales = listarEtiquetas().map(x => x.id === id ? { ...x, habilitada } : x)
  guardarEtiquetas(actuales)
}

const insertarMarcador = (target: HTMLElement, id: string) => {
  const meta = document.createElement('meta')
  meta.setAttribute('name', 'custom-tag')
  meta.setAttribute('data-etiqueta-id', id)
  target.appendChild(meta)
  return meta
}

export const aplicarEtiqueta = (e: Etiqueta) => {
  const destino = e.ubicacion === 'head' ? document.head : document.body
  if (!destino) return
  const yaExiste = destino.querySelector(`[data-etiqueta-id="${e.id}"]`)
  if (yaExiste) return
  insertarMarcador(destino, e.id)

  const tmp = document.createElement('div')
  tmp.innerHTML = e.contenidoHtml.trim()

  const copiarAtributos = (from: Element, to: Element) => {
    Array.from(from.attributes).forEach(attr => to.setAttribute(attr.name, attr.value))
  }

  tmp.childNodes.forEach(n => {
    if (n.nodeType !== Node.ELEMENT_NODE) return
    const el = n as HTMLElement
    if (el.tagName.toLowerCase() === 'script') {
      const script = document.createElement('script')
      copiarAtributos(el, script)
      const src = el.getAttribute('src')
      if (src) {
        // Solo permitir https
        if (src.startsWith('http:')) return
        script.src = src.replace(/`/g, '').trim()
        script.async = el.hasAttribute('async') || true
      } else {
        script.text = (el.textContent || '')
      }
      script.setAttribute('data-etiqueta-id', e.id)
      destino.appendChild(script)
    } else {
      const clone = el.cloneNode(true) as Element
      ;(clone as HTMLElement).setAttribute('data-etiqueta-id', e.id)
      destino.appendChild(clone)
    }
  })
}

export const aplicarEtiquetasGuardadas = () => {
  const etiquetas = listarEtiquetas().filter(x => x.habilitada)
  etiquetas.forEach(aplicarEtiqueta)
}
