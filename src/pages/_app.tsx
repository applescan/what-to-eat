import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import Header from 'components/Header'
import Footer from 'components/Footer'

import { api } from "~/utils/api";
import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
