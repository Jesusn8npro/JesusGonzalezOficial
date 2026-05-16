import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

// Protege /admin/*: exige sesión. /admin/login queda libre.
// Si Supabase no está configurado, no bloquea (el layout muestra el aviso).
export async function middleware(req: NextRequest) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return NextResponse.next();

  let res = NextResponse.next({ request: req });

  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return req.cookies.getAll();
      },
      setAll(items) {
        items.forEach(({ name, value }) => req.cookies.set(name, value));
        res = NextResponse.next({ request: req });
        items.forEach(({ name, value, options }) =>
          res.cookies.set(name, value, options),
        );
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const path = req.nextUrl.pathname;
  const enLogin = path === '/admin/login';

  if (!user && !enLogin) {
    const to = req.nextUrl.clone();
    to.pathname = '/admin/login';
    return NextResponse.redirect(to);
  }
  if (user && enLogin) {
    const to = req.nextUrl.clone();
    to.pathname = '/admin';
    return NextResponse.redirect(to);
  }

  return res;
}

export const config = {
  // Solo corre en /admin → cero overhead en el sitio público (Lighthouse intacto).
  matcher: ['/admin/:path*'],
};
