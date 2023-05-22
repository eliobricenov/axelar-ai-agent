"use client";

import {
  ConnectKitButton as ConnectionButton,
  ConnectKitProvider as Provider,
  getDefaultClient,
} from "connectkit";
import { createClient, WagmiConfig } from "wagmi";

const ConnectKitButton = () => {
  return <ConnectionButton />;
};

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

export { ConnectKitButton, ConnectKitProvider };
