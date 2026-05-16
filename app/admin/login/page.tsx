'use client';

import React, { useState } from 'react';
import { crearClienteNavegador } from '../../../src/utilidades/supabase/cliente';
import { supabaseConfigurado } from '../../../src/utilidades/supabase/config';

export default function LoginAdmin() {
  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);

  const entrar = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setCargando(true);
    const { error } = await crearClienteNavegador().auth.signInWithPassword({
      email,
      password: clave,
    });
    if (error) {
      setError('Correo o contraseña incorrectos.');
      setCargando(false);
      return;
    }
    window.location.assign('/admin');
  };

  const campo =
    'w-full rounded-[var(--radius-sello)] border border-[color:var(--linea-fuerte)] bg-[color:var(--color-tinta-3)] px-4 py-3 text-hueso outline-none transition-colors focus:border-oro';

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <p className="kicker mb-2 text-center">Panel privado</p>
        <h1 className="mb-8 text-center font-display text-3xl font-semibold text-hueso">
          Jesús González
        </h1>

        {!supabaseConfigurado ? (
          <p className="rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-[color:var(--color-tinta-2)] p-6 text-center text-hueso-tenue">
            Conecta Supabase (variables de entorno) para habilitar el acceso.
          </p>
        ) : (
          <form
            onSubmit={entrar}
            className="rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-[color:var(--color-tinta-2)] p-7"
          >
            <label className="mb-1.5 block text-sm text-hueso-tenue">Correo</label>
            <input
              type="email"
              required
              autoComplete="email"
              className={campo}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="mb-1.5 mt-4 block text-sm text-hueso-tenue">
              Contraseña
            </label>
            <input
              type="password"
              required
              autoComplete="current-password"
              className={campo}
              value={clave}
              onChange={(e) => setClave(e.target.value)}
            />
            {error && (
              <p className="mt-4 text-sm text-[color:var(--color-brasa)]">{error}</p>
            )}
            <button
              type="submit"
              disabled={cargando}
              className="mt-6 w-full rounded-[var(--radius-sello)] bg-oro px-6 py-3 font-semibold text-tinta transition-[transform,background-color] duration-200 hover:bg-oro-claro active:scale-[0.985] disabled:opacity-70"
            >
              {cargando ? 'Entrando…' : 'Entrar'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
