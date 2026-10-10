import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function usePageNotFound(): void {
  const { pathname, search } = useLocation();

  useEffect(() => {
    console.warn(`[404] Página no encontrada: ${pathname}${search}`);
  }, [pathname, search]);
}