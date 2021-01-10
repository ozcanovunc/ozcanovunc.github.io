import "@/stylesheets/html.css";

import * as React from "react";

import { Box, ChakraProvider, Stack } from "@chakra-ui/react";
import { SocialProfileJsonLd } from "next-seo";

import { AppContextProps } from "@/store/app";
import Footer from "@/components/footer";
import Head from "next/head";
import NProgress from "nprogress";
import Navbar from "@/components/navbar";
import type { AppProps as NextAppProps } from "next/app";
import Router from "next/router";
import dynamic from "next/dynamic";
import theme from "@/theme";
import siteConfig from "~/site-config";

const MobileDrawer = dynamic(() => import("@/components/mobile-drawer"));

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

type AppProps = NextAppProps & AppContextProps;

function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <SocialProfileJsonLd
        type="person"
        name={siteConfig.title}
        url={siteConfig.url}
        sameAs={Object.values(siteConfig.socials)}
      />

      <ChakraProvider resetCSS theme={theme}>
        {/* @ts-expect-error `disableLayout` property exists */}
        {Component.disableLayout ? (
          <Component {...pageProps} />
        ) : (
          <>
            <Stack justify="space-between" minH="100vh" spacing={0}>
              <Navbar />
              <Box as="main">
                <Component {...pageProps} />
              </Box>
              <Footer />
            </Stack>

            <MobileDrawer />
          </>
        )}
      </ChakraProvider>
    </>
  );
}

export default App;
