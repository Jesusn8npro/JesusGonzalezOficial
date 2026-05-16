'use client';

import React from 'react';
import { LogOut } from 'lucide-react';
import { crearClienteNavegador } from '../../src/utilidades/supabase/cliente';

const BotonSalir: React.FC = () => {
  const salir = async () => {
    try {
      await crearClienteNavegador().auth.signOut();
    } finally {
      window.location.assign('/admin/login');
    }
  };

  return (
    <button
      type="button"
      onClick={salir}
      className="inline-flex items-center gap-2 rounded-[var(--radius-sello)] border border-[color:var(--linea-fuerte)] px-4 py-2 text-sm font-semibold text-hueso transition-colors duration-200 hover:border-oro hover:text-oro"
    >
      <LogOut size={16} />
      Salir
    </button>
  );
};

export default BotonSalir;
