import type { AppProps } from "next/app";
import AppLayout from "@components/AppLayout";
import "reset-css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
};

export default App;
