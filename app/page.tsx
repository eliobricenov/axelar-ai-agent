import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <div className="p-4 absolute bottom-0 w-full">
        <div className="flex w-full items-center space-x-2">
          <Input
            className="w-full"
            type="text"
            placeholder="Send 1000 USDC from Avalanche to Polygon"
          />
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </main>
  );
}
