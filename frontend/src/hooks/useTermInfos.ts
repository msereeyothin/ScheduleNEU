import useSWR from "swr";
import { SearchAPI } from "../api/search.api";
import { TermInfo } from "../utils/types";

export function useTermInfos(subCollege: string = "NEU") {
  const fetcher = async (subCollege: string): Promise<TermInfo[]> => {
    const termInfos = await SearchAPI.fetchTermInfos(subCollege);
    return termInfos.slice(0, 10); // First 10 terms
  };

  const { data, error, isLoading } = useSWR<TermInfo[], Error>(
    `/fetchTermInfos/${subCollege}`,
    () => fetcher(subCollege),
    {
      shouldRetryOnError: true,
      fallbackData: [],
    }
  );

  return {
    termInfos: data ?? [],
    isLoading: isLoading,
    error: error,
  };
}
