// Helpers de formato compartidos por componentes del blog.

const MESES = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
];

/** "2026-02-10" -> "10 de febrero de 2026" (sin depender de Intl/locale). */
export function fechaLarga(iso: string): string {
  const [a, m, d] = iso.split('-').map((n) => parseInt(n, 10));
  if (!a || !m || !d) return iso;
  return `${d} de ${MESES[m - 1]} de ${a}`;
}
