import type { Metadata } from 'next';
import Link from 'next/link';
import { LayoutDashboard, Tags } from 'lucide-react';
import { crearClienteServidor } from '../../src/utilidades/supabase/servidor';
import { supabaseConfigurado, ADMIN_EMAIL } from '../../src/utilidades/supabase/config';
import BotonSalir from './BotonSalir';

export const metadata: Metadata = {
  title: 'Panel admin',
  robots: { index: false, follow: false },
};

const NAV = [
  { href: '/admin', etiqueta: 'Dashboard', Icono: LayoutDashboard },
  { href: '/admin/etiquetas', etiqueta: 'Etiquetas / Scripts', Icono: Tags },
];

function Aviso({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-md rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-[color:var(--color-tinta-2)] p-8 text-center">
        <h1 className="font-display text-2xl font-semibold text-hueso">{titulo}</h1>
        <p className="mt-3 text-hueso-tenue">{texto}</p>
      </div>
    </div>
  );
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!supabaseConfigurado) {
    return (
      <Aviso
        titulo="Panel no disponible"
        texto="Faltan las variables de entorno de Supabase (NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY). Configúralas en EasyPanel y vuelve a desplegar."
      />
    );
  }

  const supabase = await crearClienteServidor();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Sin sesión → es la pantalla de login (el middleware ya protege el resto).
  if (!user) return <>{children}</>;

  if (ADMIN_EMAIL && user.email !== ADMIN_EMAIL) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 px-6 text-center">
        <h1 className="font-display text-2xl font-semibold text-hueso">
          Acceso no autorizado
        </h1>
        <p className="text-hueso-tenue">
          La cuenta {user.email} no tiene permiso para el panel.
        </p>
        <BotonSalir />
      </div>
    );
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-5 py-8 sm:px-8 lg:flex-row">
      <aside className="lg:w-60 lg:shrink-0">
        <div className="mb-6 font-display text-lg font-semibold text-oro">
          Panel · Jesús González
        </div>
        <nav className="flex gap-2 overflow-x-auto lg:flex-col">
          {NAV.map(({ href, etiqueta, Icono }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2.5 whitespace-nowrap rounded-[var(--radius-sello)] border border-[color:var(--linea)] px-4 py-2.5 text-sm text-hueso-tenue transition-colors duration-200 hover:border-oro hover:text-oro"
            >
              <Icono size={17} />
              {etiqueta}
            </Link>
          ))}
        </nav>
        <div className="mt-6 hidden lg:block">
          <BotonSalir />
        </div>
      </aside>
      <main className="min-w-0 flex-1">
        <div className="mb-6 flex items-center justify-between gap-4">
          <span className="text-sm text-hueso-tenue">{user.email}</span>
          <div className="lg:hidden">
            <BotonSalir />
          </div>
        </div>
        {children}
      </main>
    </div>
  );
}
