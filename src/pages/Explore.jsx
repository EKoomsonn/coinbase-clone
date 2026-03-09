import { Link } from "react-router-dom";
import { cryptoData } from "../data/cryptoData";

function Explore() {
  return (
    <div className="px-16 py-16">
      <h1 className="text-3xl font-bold mb-10">
        Explore Crypto
      </h1>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-5 font-semibold text-gray-600">Name</th>
              <th className="p-5 font-semibold text-gray-600">Price</th>
              <th className="p-5 font-semibold text-gray-600">24h Change</th>
            </tr>
          </thead>

          <tbody>
            {cryptoData.map((coin) => (
              <tr
                key={coin.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-5 font-medium">
                  <Link
                    to={`/asset/${coin.id}`}
                    className="hover:text-blue-600"
                  >
                    {coin.name} ({coin.symbol})
                  </Link>
                </td>

                <td className="p-5 font-medium">
                  ${coin.price}
                </td>

                <td
                  className={`p-5 font-medium ${
                    coin.change > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {coin.change}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Explore;