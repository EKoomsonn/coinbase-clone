import { useParams } from "react-router-dom";
import { cryptoData } from "../data/cryptoData";

function AssetDetail() {
  const { id } = useParams();
  const coin = cryptoData.find((c) => c.id === id);

  if (!coin) {
    return (
      <div className="px-16 py-16">
        <h2 className="text-2xl font-semibold">Asset not found</h2>
      </div>
    );
  }

  return (
    <div className="px-16 py-16">
      {/* Asset Title */}
      <h1 className="text-4xl font-bold mb-6">
        {coin.name} ({coin.symbol})
      </h1>

      {/* Price Section */}
      <div className="mb-10">
        <p className="text-5xl font-bold">
          ${coin.price}
        </p>

        <p
          className={`mt-2 text-xl font-medium ${
            coin.change > 0
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {coin.change}% (24h)
        </p>
      </div>

      {/* Static Chart Placeholder */}
      <div className="bg-gray-100 h-80 rounded-xl flex items-center justify-center text-gray-400 text-lg">
        📈 Price Chart 
      </div>
    </div>
  );
}

export default AssetDetail;