import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";

export default function UserInput({
  onSubmit,
}: {
  onSubmit: (input: string) => void;
}) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const input = formData.get("input") as string | null;
    if (!input) return;
    onSubmit(input);
  };

  return (
    <form
      className="flex items-center space-x-2 w-full"
      onSubmit={handleSubmit}
    >
      <Input
        name="input"
        className="w-full"
        type="text"
        placeholder="Send 1000 USDC from Avalanche to Polygon"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
