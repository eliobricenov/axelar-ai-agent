"use client";

import { ConnectKitProvider as Provider, getDefaultClient } from "connectkit";
import { createClient, goerli, WagmiConfig } from "wagmi";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

const client = createClient(
  getDefaultClient({
    alchemyId: process.env.ALCHEMY_ID,
    walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID!,
    appName: "Axelar AI Agent",
    chains: [goerli],
  })
);

const ConnectKitProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiConfig client={client}>
      <Provider theme="midnight">{children}</Provider>
    </WagmiConfig>
  );
};

const ProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConnectKitProvider>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ConnectKitProvider>
  );
};

export default ProviderWrapper;
