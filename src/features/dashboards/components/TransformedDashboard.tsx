import React, { useCallback, useState, Dispatch, SetStateAction, FC } from "react";
import { Line } from "react-chartjs-2";
import { useTransformerChartData } from "../hooks/useTransformerChartData";
import { useTransformersData } from "../hooks/useTransformersData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../../../styles.css";
import { DATA_URL } from '../../../api/consts';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  visibleTransformers: boolean[];
  setVisibleTransformers: Dispatch<SetStateAction<boolean[]>>;
}



const TransformerDashboard: FC<Props> = ({
  searchTerm,
  setSearchTerm,
  visibleTransformers,
  setVisibleTransformers,
}) => {
  const [showAll, setShowAll] = useState(false);
  const { data, loading } = useTransformersData(
    DATA_URL,
    setVisibleTransformers
  );


  const filteredData = data.filter(({ name, region }) => {
    const q = searchTerm.trim().toLowerCase();
    return name.toLowerCase().includes(q) || region.toLowerCase().includes(q);
  });

  // Show all transformers by default in the chart
  const displayData =
    searchTerm.trim() && filteredData.length && !showAll ? filteredData : data;

  const { labels, datasets } = useTransformerChartData(
    displayData,
    visibleTransformers
  );

  const chartData = { labels, datasets };

  const handleCheckboxChange = useCallback(
    (index: number) => {
      setVisibleTransformers((prev) => {
        const updated = [...prev];
        updated[index] = !updated[index];
        return updated;
      });
    },
    [setVisibleTransformers]
  );

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  return (
    <main className="container">
      <header className="dashboard-header">
        <h1>Transformer Dashboard</h1>
        <input
          id="search"
          type="search"
          className="search-input"
          placeholder="Search by name or region"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search transformers"
        />
      </header>

      <section className="table-section">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Region</th>
              <th>Health</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(({ assetId, name, region, health }) => (
              <tr key={assetId}>
                <td>{name}</td>
                <td>{region}</td>
                <td>{health}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="filter-controls">
        <label className="checked-transformers">
          {searchTerm && <input
            type="checkbox"
            checked={showAll}
            onChange={() => setShowAll(!showAll)}
            aria-checked={!!visibleTransformers.every(Boolean)}
          />}
          <h3>Show All Transformers</h3>
        </label>

        <fieldset
          className="checkbox-group"
          role="group"
          aria-label="Toggle transformer lines"
        >
          {displayData.map(({ assetId, name }, i) => (
            <label key={assetId} className="checkbox-item">
              <input
                type="checkbox"
                checked={!!visibleTransformers[i]}
                onChange={() => handleCheckboxChange(i)}
                aria-checked={!!visibleTransformers[i]}
              />
              <span>{name}</span>
            </label>
          ))}
        </fieldset>
      </section>

      <section className="chart-section">
        <h2>Voltage Readings Over Time</h2>
        <div className="chart-wrapper">
          <Line data={chartData} />
        </div>
      </section>
    </main>
  );
};

export default TransformerDashboard;
