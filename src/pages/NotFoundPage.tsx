import { Link } from 'react-router-dom';
import { usePageNotFound } from '../hooks/usePageNotFound';

function NotFoundPage() {
  usePageNotFound();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-10 max-w-md w-full text-center">
        <p className="text-7xl font-extrabold text-brand-800 leading-none">404</p>
        <h1 className="mt-4 text-2xl font-bold text-slate-900">Página no encontrada</h1>
        <p className="mt-2 text-sm text-slate-500">
          La dirección que buscas no existe o fue movida. Revisa la URL o vuelve al panel principal.
        </p>
        <Link
          to="/dashboard"
          className="inline-block mt-8 px-5 py-2.5 bg-brand-800 hover:bg-brand-700 text-white rounded-lg text-sm font-medium transition-colors"
        >
          ← Volver al dashboard
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;