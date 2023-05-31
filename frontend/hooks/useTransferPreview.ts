import { useQuery } from "react-query";
import axios from "axios";
import { TransferPreview } from "@/types/transfer-preview";

const api = axios.create({
  baseURL: "https://axelargpt.pkaura.repl.co",
});

export default function useTransferPreview(input: string) {
  return useQuery(
    ["input-query", input],
    async () => {
      const request = await api.post<{ ner: TransferPreview }>("/extract", {
        user_msg: input,
      });
      return request.data.ner;
    },
    {
      enabled: Boolean(input),
    }
  );
}
