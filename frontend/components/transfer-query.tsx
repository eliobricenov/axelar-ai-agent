"use client";

import UserInput from "@/components/user-input";
import { useState } from "react";
import TransferPreview from "@/components/transfer-preview";
import useTransferPreview from "@/hooks/useTransferPreview";
import { useAccount } from "wagmi";
import { StatusResponse } from "@0xsquid/sdk";
import TransferSuccess from "@/components/transfer-success";

export default function TransferQuery() {
  const { isConnected } = useAccount();
  const [query, setQuery] = useState("");
  const [receipt, setReceipt] = useState<StatusResponse | null>(null);

  const {
    data: transferPreview,
    isLoading,
    isError,
  } = useTransferPreview(query);

  if (!isConnected)
    return (
      <div className="flex items-center mt-20 justify-center">
        Connect your wallet to get started!
      </div>
    );

  return (
    <>
      <div className="flex items-center mt-20">
        {isLoading && <div className="mx-auto">Loading...</div>}
        {isError && (
          <div className="mx-auto text-red-500">
            Something went wrong, please try again :)
          </div>
        )}
        {transferPreview && (
          <TransferPreview
            className="mx-auto"
            preview={transferPreview}
            onSuccess={(receipt) => {
              setQuery("");
              setReceipt(receipt);
            }}
          />
        )}
        {receipt && <TransferSuccess receipt={receipt} />}
      </div>
      <div className="p-4 absolute bottom-0 w-full">
        <UserInput
          loading={isLoading}
          onSubmit={(newQuery) => setQuery(newQuery)}
        />
      </div>
    </>
  );
}
