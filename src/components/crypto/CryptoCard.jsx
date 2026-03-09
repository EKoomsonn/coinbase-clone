import { Link } from "react-router-dom";

function CryptoCard({ coin }) {
  return (
    <Link
      to={`/asset/${coin.id}`}
      className="border rounded-lg p-6 shadow hover:shadow-lg transition"
    >
      <h2 className="text-xl font-bold">{coin.name}</h2>
      <p className="text-gray-500">{coin.symbol}</p>
      <p className="mt-4 text-lg font-semibold">${coin.price}</p>
      <p className={coin.change > 0 ? "text-green-500" : "text-red-500"}>
        {coin.change}%
      </p>
    </Link>
  );
}

export default CryptoCard;