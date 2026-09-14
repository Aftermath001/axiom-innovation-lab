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
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, {
      boundary: "tanstack_root_error_component",
    });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back
          home.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route =
  createRootRouteWithContext<{ queryClient: QueryClient }>()({
    head: () => ({
      meta: [
        { charSet: "utf-8" },

        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },

        {
          name: "theme-color",
          content: "#0b1120",
        },

        // GOOGLE SEARCH CONSOLE VERIFICATION google-site-verification=
        {
          name: "google-site-verification",
          content:
            "V5OPLjpOs5oN8vszANjrwF2aaRweHJ-BdtRylNUbB-w",
        },

        // PAGE TITLE
        {
          title:
            "MetaMind — AI Automation & Software Solutions in Kenya",
        },

        // SEO DESCRIPTION
        {
          name: "description",
          content:
            "MetaMind Limited helps businesses automate customer support, lead generation, appointment booking and repetitive operations using practical AI agents and software solutions.",
        },

        {
          name: "author",
          content: "MetaMind Limited",
        },

        // OPEN GRAPH
        {
          property: "og:site_name",
          content: "MetaMind Limited",
        },

        {
          property: "og:type",
          content: "website",
        },

        {
          property: "og:title",
          content:
            "MetaMind — AI Automation & Software Solutions in Kenya",
        },

        {
          property: "og:description",
          content:
            "AI agents, business automation and software solutions for businesses in Kenya and beyond.",
        },

        {
          property: "og:url",
          content: "https://metamindlimited.co.ke/",
        },

        {
          property: "og:image",
          content:
            "https://metamindlimited.co.ke/og-image.jpg",
        },

        {
          property: "og:image:type",
          content: "image/jpeg",
        },

        {
          property: "og:image:width",
          content: "1024",
        },

        {
          property: "og:image:height",
          content: "1024",
        },

        // TWITTER CARD
        {
          name: "twitter:card",
          content: "summary_large_image",
        },

        {
          name: "twitter:title",
          content:
            "MetaMind — AI Automation & Software Solutions in Kenya",
        },

        {
          name: "twitter:description",
          content:
            "AI agents, business automation and software solutions for businesses in Kenya and beyond.",
        },

        {
          name: "twitter:image",
          content:
            "https://metamindlimited.co.ke/og-image.jpg",
        },
      ],

      links: [
        { rel: "stylesheet", href: appCss },

        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },

        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },

        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
        },

        /*
         * ============================================================
         * WEBSITE LOGO / FAVICON DISPLAY LOCATION
         * ============================================================
         *
         * This file currently tells the browser to use:
         *
         * public/favicon.png
         *
         * as the website favicon.
         *
         * If favicon.png is currently the Vite/React logo,
         * replace ONLY that image file in your public folder.
         *
         * You do NOT need to change this code if you keep
         * the filename "favicon.png".
         *
         * This is the logo that can appear:
         * - In the browser tab
         * - In browser bookmarks
         * - In some browser shortcuts
         * - Potentially as Google's search-result favicon
         *
         * Google controls whether/when it displays it in search.
         */

        {
          rel: "icon",
          href: "https://metamindlimited.co.ke/favicon.png",
          type: "image/png",
        },

        {
          rel: "apple-touch-icon",
          href: "https://metamindlimited.co.ke/favicon.png",
        },

        
      ],

      /*
       * ============================================================
       * STRUCTURED DATA
       * ============================================================
       *
       * The "logo" below tells search engines which image represents
       * MetaMind Limited as an organization.
       *
       * Currently it points to:
       *
       * https://metamindlimited.co.ke/favicon.png
       *
       * You can later replace this with a dedicated MetaMind logo
       * image if you create one specifically for Google/SEO.
       */

      scripts: [
        // GOOGLE ANALYTICS 4
        {
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=G-18MYTN5EJG",
        },
      
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-18MYTN5EJG');
          `,
        },
      
        // ORGANIZATION STRUCTURED DATA
        {
          type: "application/ld+json",
      
          children: JSON.stringify({
            "@context": "https://schema.org",
      
            "@type": "Organization",
      
            name: "MetaMind Limited",
      
            url: "https://metamindlimited.co.ke/",
      
            // WEBSITE LOGO USED BY STRUCTURED DATA
            logo: "https://metamindlimited.co.ke/favicon.png",
      
            description:
              "MetaMind Limited helps businesses automate customer support, lead generation, appointment booking and repetitive operations using practical AI agents and software solutions.",
      
            address: {
              "@type": "PostalAddress",
              addressLocality: "Nairobi",
              addressCountry: "KE",
            },
      
            areaServed: "Global",
          }),
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
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}