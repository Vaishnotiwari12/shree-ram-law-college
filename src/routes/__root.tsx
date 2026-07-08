import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "./../components/SiteHeader";
import { SiteFooter } from "./../components/SiteFooter";
import { WhatsAppButton } from "./../components/WhatsAppButton";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-navy">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-navy px-4 py-2 text-sm font-medium text-navy-foreground transition hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-navy px-4 py-2 text-sm font-medium text-navy-foreground transition hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition hover:bg-accent hover:text-accent-foreground"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Shree Ram Law College | LL.B & B.A. LL.B in Kanpur" },
      {
        name: "description",
        content:
          "Shree Ram Law College, Nandana, Ghatampur, Kanpur. Approved by Bar Council of India, affiliated to CSJM University. Offering LL.B (3 Year) and B.A. LL.B (5 Year Integrated) programmes.",
      },
      { name: "author", content: "Shree Ram Law College" },
      { property: "og:title", content: "Shree Ram Law College | LL.B & B.A. LL.B in Kanpur" },
      {
        property: "og:description",
        content:
          "Premier law college in Kanpur offering LL.B and B.A. LL.B programmes. Approved by BCI, affiliated to CSJM University.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Shree Ram Law College | LL.B & B.A. LL.B in Kanpur" },
      { name: "description", content: "Shree Ram Law College, Nandana, Ghatampur, Kanpur. Approved by Bar Council of India, affiliated to CSJM University. Offering LL.B (3 Year) and B.A. LL.B (5 Year Integrated) programmes." },
      { property: "og:description", content: "Shree Ram Law College, Nandana, Ghatampur, Kanpur. Approved by Bar Council of India, affiliated to CSJM University. Offering LL.B (3 Year) and B.A. LL.B (5 Year Integrated) programmes." },
      { name: "twitter:description", content: "Shree Ram Law College, Nandana, Ghatampur, Kanpur. Approved by Bar Council of India, affiliated to CSJM University. Offering LL.B (3 Year) and B.A. LL.B (5 Year Integrated) programmes." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <WhatsAppButton />
      </div>
    </QueryClientProvider>
  );
}
