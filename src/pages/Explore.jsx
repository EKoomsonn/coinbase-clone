import { useEffect, useState } from "react";

function Explore() {
  const [cryptos, setCryptos] = useState([]);
  const [gainers, setGainers] = useState([]);
  const [newCoins, setNewCoins] = useState([]);

  useEffect(() => {
    fetchAll();
    fetchGainers();
    fetchNew();
  }, []);

  const fetchAll = async () => {
    const res = await fetch("https://eltoncryptobackend.onrender.com/api/crypto");
    const data = await res.json();
    setCryptos(data);
  };

  const fetchGainers = async () => {
    const res = await fetch("https://eltoncryptobackend.onrender.com/api/crypto/gainers");
    const data = await res.json();
    setGainers(data);
  };

  const fetchNew = async () => {
    const res = await fetch("https://eltoncryptobackend.onrender.com/api/crypto/new");
    const data = await res.json();
    setNewCoins(data);
  };

  const CryptoCard = ({ coin }) => (
    <div className="bg-[#111111] p-4 rounded-xl border border-gray-800 flex items-center gap-4">
      <img src={coin.image} alt={coin.name} className="w-10 h-10" />
      <div>
        <h2 className="text-white font-semibold">{coin.name}</h2>
        <p className="text-gray-400 text-sm">{coin.symbol}</p>
      </div>
      <div className="ml-auto text-right">
        <p className="text-white">${coin.price}</p>
        <p className={`text-sm ${coin.change24h >= 0 ? "text-green-500" : "text-red-500"}`}>
          {coin.change24h}%
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white px-8 py-12">

      {/* All Crypto */}
      <h1 className="text-2xl font-bold mb-6">All Cryptocurrencies</h1>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {cryptos.map((coin) => (
          <CryptoCard key={coin._id} coin={coin} />
        ))}
      </div>

      {/* Top Gainers */}
      <h1 className="text-2xl font-bold mb-6">Top Gainers</h1>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {gainers.map((coin) => (
          <CryptoCard key={coin._id} coin={coin} />
        ))}
      </div>

      {/* New Listings */}
      <h1 className="text-2xl font-bold mb-6">New Listings</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {newCoins.map((coin) => (
          <CryptoCard key={coin._id} coin={coin} />
        ))}
      </div>

    </div>
  );
}

export default Explore;