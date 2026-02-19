import TransformerDashboard from './features/dashboards/components/TransformedDashboard'
import { usePersistentState } from "./shared/hooks/usePersistentState";

const STORAGE_KEYS = {
  search: 'transformer_search',
  visible: 'transformer_visible',
};

function App() {
  const [searchTerm, setSearchTerm] = usePersistentState<string>(
    STORAGE_KEYS.search,
    ''
  );
  const [visibleTransformers, setVisibleTransformers] = usePersistentState<boolean[]>(
    STORAGE_KEYS.visible,
    []
  );

  return (
    <div className="App">
      <TransformerDashboard
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        visibleTransformers={visibleTransformers}
        setVisibleTransformers={setVisibleTransformers}
      />
    </div>
  );
}

export default App;