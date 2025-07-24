import { useQuery } from "@tanstack/react-query";
import type { Transformer } from "../../../types";
import { Dispatch, SetStateAction, useEffect } from "react";
import { fetchTransformers } from "../../../services/fetchTransformerService";


export const useTransformersData = (
  DATA_URL: string,
  setVisibleTransformers: Dispatch<SetStateAction<boolean[]>>, 
) => {
  
  const { data, error, isPending } = useQuery<Transformer[]>({
    queryKey: ["transformers", DATA_URL],
    queryFn: () => fetchTransformers(DATA_URL),
    staleTime: 5 * 60 * 1000,
    retry: 2,
    refetchOnWindowFocus: false,
  });

  // Sync visibleTransformers when data changes
  useEffect(() => {
    if (data) {
      setVisibleTransformers(prev =>
        prev.length === data.length ? prev : Array(data.length).fill(true)
      );
    }
  }, [data, setVisibleTransformers]);

  return {
    data: data || [],
    loading: isPending,
    error,
  };
}
