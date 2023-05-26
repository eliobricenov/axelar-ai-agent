import { TransferPreview } from "@/types/transfer-preview";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";
import { triggerTransaction } from "@/lib/triggerTransaction";
import { useSigner } from "wagmi";
import { StatusResponse } from "@0xsquid/sdk";
import { toast } from "react-toastify";

interface Props extends HTMLAttributes<HTMLDivElement> {
  preview: TransferPreview;
  onSuccess: (receipt: StatusResponse) => void;
}

export default function TransferPreview({
  preview,
  className,
  onSuccess,
  ...props
}: Props) {
  const { data: signer } = useSigner();
  const [loading, setLoading] = useState(false);

  const handleExecute = async () => {
    if (!signer) return;
    try {
      setLoading(true);
      const result = await triggerTransaction({
        signer,
        transferPreview: preview,
      });
      onSuccess(result);
    } catch (e) {
      toast.error("Something went wrong, see the console for more info :)");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Transfer Preview</CardTitle>
        <CardDescription>Review the transaction parameters</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <p>
          Source Chain:{" "}
          <span className="font-semibold">{preview.srcChain}</span>
        </p>
        <p>
          Destination Chain:{" "}
          <span className="font-semibold">{preview.destinationChain}</span>
        </p>
        <p>
          Token: <span className="font-semibold">{preview.token}</span>
        </p>
        <p>
          Amount: <span className="font-semibold">{preview.amount}</span>
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleExecute} disabled={loading}>
          EXECUTE
        </Button>
      </CardFooter>
    </Card>
  );
}
