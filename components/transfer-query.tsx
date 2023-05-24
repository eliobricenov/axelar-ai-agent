"use client";

import UserInput from "@/components/user-input";
import { useState } from "react";
import TransferPreview from "@/components/transfer-preview";
import TransferPreviewSkeleton from "@/components/transfer-preview-skeleton";

export default function TransferQuery() {
  const [query, setQuery] = useState("");
  const isLoading = false;
  // const { data: transferPreview, isLoading } = useTransferPreview(query);

  const transferPreview = {
    srcChain: "Avalanche",
    destinationChain: "Polygon",
    amount: 1000,
    token: "USDC",
  };

  return (
    <>
      <div className="flex items-center mt-20">
        {isLoading && <TransferPreviewSkeleton className="mx-auto" />}
        {transferPreview && (
          <TransferPreview className="mx-auto" preview={transferPreview} />
        )}
      </div>
      <div className="p-4 absolute bottom-0 w-full">
        <UserInput onSubmit={(newQuery) => setQuery(newQuery)} />
      </div>
    </>
  );
}
