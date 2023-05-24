import { TransferPreview } from "@/types/transfer-preview";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BellRing } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  preview: TransferPreview;
}

export default function TransferPreview({
  preview,
  className,
  ...props
}: Props) {
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
        <Button className="w-full">EXECUTE</Button>
      </CardFooter>
    </Card>
  );
}
