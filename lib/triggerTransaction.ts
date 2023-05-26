import { TransferPreview } from "@/types/transfer-preview";
import { Squid } from "@0xsquid/sdk";
import { ethers, Signer } from "ethers";
import { toast } from "react-toastify";

export async function triggerTransaction({
  transferPreview,
  signer,
}: {
  transferPreview: TransferPreview;
  signer: Signer;
}) {
  const { srcChain, token, destinationChain, amount } = transferPreview;

  const squid = new Squid({
    baseUrl: "https://testnet.api.0xsquid.com",
  });

  const signerAddress = await signer.getAddress();

  await squid.init();

  const fromChain = squid.chains.find((chain) => chain.chainName === srcChain);

  if (!fromChain) {
    throw new Error("Source chain not found");
  }

  const toChain = squid.chains.find(
    (chain) => chain.chainName === destinationChain
  );

  if (!toChain) {
    throw new Error("Destination chain not found");
  }

  const fromToken = squid.tokens.find(
    (squidToken) =>
      squidToken.symbol === token && squidToken.chainId === fromChain.chainId
  );

  if (!fromToken) {
    throw new Error("Token not found");
  }

  const toToken = squid.tokens.find(
    (squidToken) =>
      squidToken.symbol === token && squidToken.chainId === toChain.chainId
  );

  if (!toToken) {
    throw new Error("Token not found");
  }

  const fromAmount = ethers.utils
    .parseUnits(String(amount), fromToken.decimals)
    .toHexString();

  const params = {
    fromAmount,
    fromChain: fromChain.chainId,
    fromToken: fromToken.address,
    toChain: toChain.chainId,
    toToken: toToken.address,
    toAddress: signerAddress,
    slippage: 1.0, // 1.00 = 1% max slippage across the entire route
    enableForecall: true, // instant execution service, defaults to true
    quoteOnly: false, // optional, defaults to false
  };

  const { route } = await squid.getRoute(params);

  const toastId = toast.info("Approve transaction in your wallet");

  const tx = await squid.executeRoute({ signer, route });

  toast.update(toastId, {
    type: "info",
    render: "Transaction approved, check your wallet",
  });

  const txReceipt = await tx.wait();

  const getStatusParams = {
    transactionId: txReceipt.transactionHash,
    routeType: route.transactionRequest?.routeType,
  };

  return squid.getStatus(getStatusParams);
}
