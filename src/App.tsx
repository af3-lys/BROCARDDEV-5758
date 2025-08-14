import { useState } from 'react';
import BuyTrafficModal from './components/BuyTrafficModal';
import ProxyConfigModal from './components/ProxyConfigModal';

function App() {
  const [showBuy, setShowBuy] = useState(false);
  const [showProxy, setShowProxy] = useState(false);

  return (
    <div className="p-4 space-y-4">
      <button
        onClick={() => setShowBuy(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Открыть модалку покупки трафика
      </button>
      <button
        onClick={() => setShowProxy(true)}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Открыть модалку конфигурации прокси
      </button>

      {showBuy && <BuyTrafficModal onClose={() => setShowBuy(false)} />}
      {showProxy && <ProxyConfigModal onClose={() => setShowProxy(false)} />}
    </div>
  );
}

export default App;
