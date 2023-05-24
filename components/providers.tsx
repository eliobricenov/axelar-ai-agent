"use client";

import { ConnectKitProvider as Provider, getDefaultClient } from "connectkit";
import { createClient, WagmiConfig } from "wagmi";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const client = createClient(
  getDefaultClient({
    alchemyId: process.env.ALCHEMY_ID,
    walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID!,
    appName: "Axilar AI Agent",
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
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ConnectKitProvider>
  );
};

export default ProviderWrapper;
