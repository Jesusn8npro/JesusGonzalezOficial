import Link from 'next/link';

/**
 * Filtro por estado a base de enlaces (Server Component). El estado activo
 * se determina por el search param `estado`.
 */
export default function FiltroEstado({
  base,
  opciones,
  activo,
}: {
  base: string;
  opciones: string[];
  activo: string;
}) {
  const items = ['todos', ...opciones];
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((op) => {
        const sel = op === activo;
        const href = op === 'todos' ? base : `${base}?estado=${op}`;
        return (
          <Link
            key={op}
            href={href}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold capitalize transition-colors duration-200 ${
              sel
                ? 'border-oro bg-oro text-tinta'
                : 'border-[color:var(--linea-fuerte)] text-hueso-tenue hover:border-oro hover:text-oro'
            }`}
          >
            {op}
          </Link>
        );
      })}
    </div>
  );
}
