export interface VoltageReading {
  timestamp: string;
  voltage: string;
}

export interface Transformer {
  assetId: number;
  name: string;
  region: string;
  health: string;
  lastTenVoltgageReadings: VoltageReading[];
}

export interface TransformerChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    tension: number;
    pointRadius: number;
    fill: boolean;
  }[];
}