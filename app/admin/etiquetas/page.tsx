import type { Metadata } from 'next';
import EtiquetasAdmin from '../../../src/paginas/admin/EtiquetasAdmin';

export const metadata: Metadata = {
  title: 'Administración de Etiquetas',
  description: 'Panel interno de administración.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/admin/etiquetas' },
};

export default function Page() {
  return <EtiquetasAdmin />;
}
