import { StatusResponse } from "@0xsquid/sdk";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { ThumbsUp } from "lucide-react";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  receipt: StatusResponse;
}

export default function TransferSuccess({
  className,
  receipt,
  ...props
}: Props) {
  return (
    <Card className={cn("w-[380px] mx-auto", className)} {...props}>
      <CardContent className="grid gap-4 text-center pt-6">
        <>
          <ThumbsUp className="mx-auto" size={64} />
          <p>Transaction successful!</p>
          <a
            className="text-blue-600 visited:text-purple-600"
            href={receipt.axelarTransactionUrl}
            target="_blank"
            rel="noreferrer"
          >
            Link to transaction
          </a>
        </>
      </CardContent>
    </Card>
  );
}
