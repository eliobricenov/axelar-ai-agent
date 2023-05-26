## Overview

This is an app that allows you to bridge assets between different chains using the Squid Router SDK. The app receives an
input prompt like "send 1000 USDC from Ethereum to Polygon", extracts the transfer information with LangChain
and automatically bridges the assets from one chain to another.
The bridged assets are sent to the same address in the destination chain.

### Example prompt
    
    
    "Send 1000 aUSDC from ethereum-2 to Polygon"
    "Transfer 1000 USDC from Ethereum to Avalance"


### Considerations

This app only uses the testnet versions of the Squid SDKs, so it can only be used with testnet assets.
You can find a list of the supported testnet assets in the [Axelar documentation](https://docs.axelar.dev/dev/reference/testnet-contract-addresses).


### Links

Demo App: https://axelar-ai-agent.vercel.app/

Demo Video: https://www.loom.com/share/5ba06b24d718427582806f5847832afb

API Repo: https://github.com/puneetkaura/axelarGPT

### Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [LangChain](https://python.langchain.com/en/latest/index.html)
