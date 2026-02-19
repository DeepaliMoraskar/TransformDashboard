import { useMemo } from "react";
import type { Transformer, TransformerChartData } from "../../../types";

export const useTransformerChartData = (
  data: Transformer[],
  visibleTransformers: boolean[]
): TransformerChartData => {
  const labels =
    data[0]?.lastTenVoltgageReadings.map((r) =>
      new Date(r.timestamp).toLocaleDateString()
    ) || [];

  const datasets = useMemo(
    () =>
      data.reduce<
        {
          label: string;
          data: number[];
          borderColor: string;
          tension: number;
          pointRadius: number;
          fill: boolean;
        }[]
      >((acc, transformer, i) => {
        if (visibleTransformers[i]) {
          acc.push({
            label: transformer.name,
            data: transformer.lastTenVoltgageReadings.map((r) => +r.voltage),
            borderColor: `hsl(${i * 60}, 70%, 50%)`,
            tension: 0.3,
            pointRadius: 3,
            fill: false,
          });
        }
        return acc;
      }, []),
    [data, visibleTransformers]
  );

  return { labels, datasets };
}
