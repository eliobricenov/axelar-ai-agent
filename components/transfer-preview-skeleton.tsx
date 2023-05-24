import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export default function TransferPreviewSkeleton({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Transfer Preview</CardTitle>
        <CardDescription>Review the transaction parameters</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm animate-pulse my-10 text-center">
          Loading your transfer preview...
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">EXECUTE</Button>
      </CardFooter>
    </Card>
  );
}
