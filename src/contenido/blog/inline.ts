// Conversión bidireccional entre Inline[] (modelo del artículo) y un texto
// editable con marcado simple, para poder editar párrafos/listas/citas como
// texto sin perder negritas ni enlaces.
//   **negrita**            -> { fuerte }
//   [texto](https://url)   -> { texto, href, externo }

import type { Inline } from './tipos';

/** Inline[] -> texto editable con marcado simple. */
export function inlineATexto(partes: Inline[]): string {
  return partes
    .map((p) => {
      if (typeof p === 'string') return p;
      if ('fuerte' in p) return `**${p.fuerte}**`;
      return `[${p.texto}](${p.href})`;
    })
    .join('');
}

const PATRON = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

/** Texto con marcado simple -> Inline[]. */
export function textoAInline(texto: string): Inline[] {
  const partes: Inline[] = [];
  let ultimo = 0;
  let m: RegExpExecArray | null;
  PATRON.lastIndex = 0;
  while ((m = PATRON.exec(texto)) !== null) {
    if (m.index > ultimo) partes.push(texto.slice(ultimo, m.index));
    if (m[1] !== undefined) {
      partes.push({ fuerte: m[1] });
    } else {
      const href = m[3];
      const externo = /^https?:\/\//i.test(href);
      partes.push({ texto: m[2], href, ...(externo ? { externo: true } : {}) });
    }
    ultimo = m.index + m[0].length;
  }
  if (ultimo < texto.length) partes.push(texto.slice(ultimo));
  return partes.length > 0 ? partes : [texto];
}
