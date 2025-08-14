import { useState } from 'react';

interface Props {
  onClose: () => void;
}

export default function ProxyConfigModal({ onClose }: Props) {
  const [connectionType, setConnectionType] = useState('Residential');
  const [sessionType, setSessionType] = useState('Sticky');
  const [sessionLength, setSessionLength] = useState('Keep IP');
  const [ipVersion, setIpVersion] = useState('IPv4 only');
  const [protocol, setProtocol] = useState('HTTP');
  const [format, setFormat] = useState('{host}:{port}');

  const username = 'user';
  const password = 'pass';
  const host = 'gate.broproxy.com';
  const port = 8080;

  const generated =
    format === '{host}:{port}'
      ? `${host}:${port}`
      : `${protocol.toLowerCase()}://${username}:${password}@${host}:${port}`;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
      <div className="bg-white p-6 rounded w-full max-w-2xl space-y-4">
        <h2 className="text-xl font-semibold">Конфигурация прокси</h2>

        <div className="space-y-2">
          <p className="font-medium">Connection type</p>
          <label className="mr-4">
            <input
              type="radio"
              value="Residential"
              checked={connectionType === 'Residential'}
              onChange={(e) => setConnectionType(e.target.value)}
            />{' '}
            Residential
          </label>
          <label>
            <input
              type="radio"
              value="Mobile"
              checked={connectionType === 'Mobile'}
              onChange={(e) => setConnectionType(e.target.value)}
            />{' '}
            Mobile
          </label>
        </div>

        <div className="space-y-2">
          <p className="font-medium">Session type</p>
          <label className="mr-4">
            <input
              type="radio"
              value="Sticky"
              checked={sessionType === 'Sticky'}
              onChange={(e) => setSessionType(e.target.value)}
            />{' '}
            Sticky
          </label>
          <label>
            <input
              type="radio"
              value="Rotating"
              checked={sessionType === 'Rotating'}
              onChange={(e) => setSessionType(e.target.value)}
            />{' '}
            Rotating
          </label>
          <select
            className="border p-1 ml-4"
            value={sessionLength}
            onChange={(e) => setSessionLength(e.target.value)}
          >
            <option>Keep IP</option>
            <option>5 мин</option>
            <option>10 мин</option>
          </select>
        </div>

        <div className="space-y-2">
          <p className="font-medium">IP version</p>
          <label className="mr-4">
            <input
              type="radio"
              value="IPv4 only"
              checked={ipVersion === 'IPv4 only'}
              onChange={(e) => setIpVersion(e.target.value)}
            />{' '}
            IPv4 only
          </label>
          <label>
            <input
              type="radio"
              value="Mixed"
              checked={ipVersion === 'Mixed'}
              onChange={(e) => setIpVersion(e.target.value)}
            />{' '}
            Mixed
          </label>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <select className="border p-1">
            <option>Country</option>
          </select>
          <select className="border p-1">
            <option>Region</option>
          </select>
          <select className="border p-1">
            <option>City</option>
          </select>
          <select className="border p-1">
            <option>ISP</option>
          </select>
        </div>

        <div className="space-y-2">
          <p className="font-medium">Proxy access</p>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-sm">Protocol</label>
              <select
                className="border p-1 w-full"
                value={protocol}
                onChange={(e) => setProtocol(e.target.value)}
              >
                <option>HTTP</option>
                <option>SOCKS5</option>
              </select>
            </div>
            <div>
              <label className="block text-sm">Username</label>
              <input className="border p-1 w-full" value={username} readOnly />
            </div>
            <div>
              <label className="block text-sm">Password</label>
              <input className="border p-1 w-full" value={password} readOnly />
            </div>
            <div>
              <label className="block text-sm">Host</label>
              <input className="border p-1 w-full" value={host} readOnly />
            </div>
            <div>
              <label className="block text-sm">Port</label>
              <input className="border p-1 w-full" value={port} readOnly />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-medium">Proxy generator</p>
          <div>
            <label className="block text-sm">Format</label>
            <select
              className="border p-1 w-full"
              value={format}
              onChange={(e) => setFormat(e.target.value)}
            >
              <option>{'{host}:{port}'}</option>
              <option>{'{protocol}://{user}:{pass}@{host}:{port}'}</option>
            </select>
          </div>
          <div>
            <label className="block text-sm">Количество прокси</label>
            <input className="border p-1 w-full" value={1} readOnly />
          </div>
          <textarea
            className="border p-1 w-full h-20"
            value={generated}
            readOnly
          />
          <div className="flex justify-end space-x-2">
            <button
              className="px-4 py-2 bg-gray-200 rounded"
              onClick={() => navigator.clipboard.writeText(generated)}
            >
              Скопировать
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Сгенерировать
            </button>
            <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">
              Отмена
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
