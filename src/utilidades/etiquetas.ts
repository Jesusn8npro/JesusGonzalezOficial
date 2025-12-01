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
  const marcador = insertarMarcador(destino, e.id)
  marcador.insertAdjacentHTML('afterend', e.contenidoHtml)
}

export const aplicarEtiquetasGuardadas = () => {
  const etiquetas = listarEtiquetas().filter(x => x.habilitada)
  etiquetas.forEach(aplicarEtiqueta)
}
