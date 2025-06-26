import { writable } from 'svelte/store';

/**
 * Controla la visibilidad del modal de servicios.
 * - `true`: El modal está abierto.
 * - `false`: El modal está cerrado.
 */
export const isServiceModalOpen = writable(false); 