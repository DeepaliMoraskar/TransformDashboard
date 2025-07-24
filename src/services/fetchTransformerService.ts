import type { Transformer } from "../types";

export const fetchTransformers = async (url: string): Promise<Transformer[]> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch transformers");
  const json = await res.json();
  return json;
};