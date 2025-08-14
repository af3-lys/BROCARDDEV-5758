import { useState } from 'react';

interface Props {
  onClose: () => void;
}

const options = [10, 25, 50, 100, 250, 500, 1000];
const pricePerGB = 1;

export default function BuyTrafficModal({ onClose }: Props) {
  const [amount, setAmount] = useState(options[0]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded w-80 space-y-4">
        <h2 className="text-xl font-semibold">Покупка трафика</h2>
        <select
          className="w-full border p-2 rounded"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {o} ГБ
            </option>
          ))}
        </select>
        <div className="text-sm space-y-1">
          <p>Total price: ${(amount * pricePerGB).toFixed(2)}</p>
          <p>Price per GB: ${pricePerGB.toFixed(2)}</p>
          <p>Traffic rollover: Free</p>
          <p>Sub-users: Free</p>
        </div>
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">
            Отмена
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Купить
          </button>
        </div>
      </div>
    </div>
  );
}
