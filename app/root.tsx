import {
  Box,
  ChakraProvider,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { withEmotionCache } from "@emotion/react";
import React from "react";
import {
  ActionFunction,
  Form,
  Link,
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  redirect,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";

import { ClientStyleContext, ServerStyleContext } from "./chackra-ui/context";
import { theme } from "./chackra-ui/theme/theme";
import { BackToHomeButton } from "./components/shared/buttons/BackToHomeButton";
import { InvitationFormProvider } from "./context/invitation-context";
import { firestoreService } from "./lib/firebase/db.server";
import ErrorDatabaseService from "./modules/errors/services/error-database.service";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const errorMessage = formData.get("error-message") as string;
  const errorStack = formData.get("error-stack") as string;

  const errorService = new ErrorDatabaseService(firestoreService);

  await errorService.add({ message: errorMessage, stack: errorStack });

  return redirect("/");
};

export default function App() {
  return (
    <Document>
      <ChakraProvider resetCSS theme={theme}>
        <InvitationFormProvider>
          <Outlet />
        </InvitationFormProvider>
      </ChakraProvider>
    </Document>
  );
}

// TODO: register errors to firestore
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document>
      <Box position="relative" h="100vh" bg="#EDF2F7">
        <VStack h="50vh" justify="center" padding="1rem">
          <Heading fontSize={26} fontWeight={700}>
            Poxa! Ocorreu um erro...
          </Heading>
          <Text fontSize="18px" textAlign="center">
            Aperte o botão abaixo <br />
            para voltar para a página inicial
          </Text>

          <Form
            method="post"
            style={{
              marginTop: "2rem",
            }}
          >
            <input type="hidden" name="error-message" value={error.message} />
            <input type="hidden" name="error-stack" value={error.stack} />

            <button
              type="submit"
              style={{
                backgroundColor: "#D3AB9E",
                border: "none",
                color: "white",
                padding: "1rem 2rem",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
                fontWeight: "700",
                borderRadius: "10px",
              }}
            >
              VOLTAR
            </button>
          </Form>
        </VStack>

        <Image
          src="/images/error-dog-bg.png"
          position="absolute"
          h="370px"
          bottom={0}
          zIndex={0}
        />
      </Box>
    </Document>
  );
}

export function CatchBoundary() {
  let caught = useCatch();
  let message;
  switch (caught.status) {
    case 401:
      message = (
        <Text>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </Text>
      );
      break;
    case 404:
      message = (
        <Text>
          Oops! Looks like you tried to visit a page that does not exist.
        </Text>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document>
      <VStack h="100vh" justify="center">
        <Heading>
          {caught.status}: {caught.statusText}
        </Heading>
        {message}
      </VStack>
    </Document>
  );
}

interface DocumentProps {
  children: React.ReactNode;
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;600;700&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Karla:wght@400;600;700&display=swap",
    },
  ];
};

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const serverSyleData = React.useContext(ServerStyleContext);
    const clientStyleData = React.useContext(ClientStyleContext);

    // Only executed on client
    React.useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData?.reset();
    }, []);

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />

          <Meta />
          <Links />
          {serverSyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(" ")}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
        </body>
      </html>
    );
  }
);
