import { Link } from "react-router-dom";
import { cryptoData } from "../data/cryptoData";
import heroImage from "../assets/hero.png";
import btcImage from "../assets/btc.png";
import chartImage from "../assets/chart.png";
import successImage from "../assets/successful.png";
import colorsImage from "../assets/colors.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import octagonImage from "../assets/octagon.png";
function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <img src={heroImage} alt="Crypto Illustration" className="w-full" />
          </div>

          <div className="md:w-1/2">
            <h1 className="text-6xl font-bold leading-tight mb-6">
              The future of money is here.
            </h1>

            <p className="text-lg text-gray-600 mb-10">
              Buy, sell, and manage crypto securely on a modern platform.
            </p>

            <div className="flex gap-4">
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get Started
              </Link>

              <Link
                to="/explore"
                className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Explore Assets
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET PREVIEW */}
      <section className="px-16 pb-20">
        <h2 className="text-2xl font-semibold mb-8">Top Crypto Assets</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cryptoData.slice(0, 3).map((coin) => (
            <div
              key={coin.id}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">
                {coin.name} ({coin.symbol})
              </h3>

              <p className="text-2xl font-bold mt-4">${coin.price}</p>

              <p
                className={`mt-2 ${
                  coin.change > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {coin.change}% (24h)
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPLORE SECTION */}
      <section className="py-24 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold leading-snug mb-6">
              Explore crypto like Bitcoin, Ethereum and Dogecoin.
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
            Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
            </p>
            <Link
              to="/explore"
              className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              See more assets
            </Link>
          </div>

          <div className="md:w-1/2">
            <img
              src={btcImage}
              alt="Bitcoin illustration"
              className="w-full rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* POWERFUL TOOLS SECTION */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2 flex justify-center">
            <img src={chartImage} alt="Analytics chart" className="w-3/4" />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-5">Powerful tools</h2>

            <p className="text-base text-gray-600 leading-relaxed mb-8">
              Access advanced trading tools, detailed analytics, and real-time
              market data to make smarter investment decisions.
            </p>

            <Link
              to="/signup"
              className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              Start trading
            </Link>
          </div>
        </div>
      </section>

      {/* ZERO FEES SECTION */}
      <section className="py-28 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">
              Zero trading fees,
            </h2>
            <h2 className="text-3xl font-bold mb-6">
              more rewards.
            </h2>

            <p className="text-base text-gray-600 leading-relaxed mb-8">
              Trade without commissions and unlock exclusive rewards designed
              to maximize your crypto experience.
            </p>

            <Link
              to="/signup"
              className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              Claim free trial
            </Link>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img src={successImage} alt="Successful trading" className="w-3/4" />
          </div>
        </div>
      </section>

      {/* BASE APP SECTION */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
          
          {/* LEFT - Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={colorsImage}
              alt="Base App rewards"
              className="w-3/4"
            />
          </div>

          {/* RIGHT - Text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">
              Countless ways to earn crypto with the Base App
            </h2>

            <p className="text-base text-gray-600 leading-relaxed">
              Discover new earning opportunities, participate in exclusive
              campaigns, and unlock rewards through a seamless and innovative
              crypto experience built for everyone.
            </p>
            <Link
        className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
      >
        Learn more
      </Link>
          </div>
        </div>
      </section>

      {/* CRYPTO BASICS SECTION */}
<section className="py-28 px-6 bg-gray-100">
  <div className="max-w-6xl mx-auto">

    {/* TOP ROW */}
    <div className="flex flex-col md:flex-row gap-20 mb-20">
      
      {/* LEFT - Bold Heading */}
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold leading-snug">
          New to crypto? Learn some crypto basics
        </h2>
      </div>

      {/* RIGHT - Paragraph + Button */}
      <div className="md:w-1/2">
        <p className="text-base text-gray-600 leading-relaxed mb-8">
        Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
        </p>

        <Link
          className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          Read more
        </Link>
      </div>
    </div>

    {/* BOTTOM ROW - 3 FEATURE CARDS */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
  
  {/* CARD 1 */}
  <div className="flex flex-col items-center space-y-2">
    <img src={image1} alt="Crypto basics 1" className="w-64" />

    <h3 className="text-lg font-bold">
      USDC: The digital dollar for the global crypto economy
    </h3>

    <p className="text-sm text-gray-600 leading-tight max-w-xs">
      Learn the fundamentals of digital currencies and how they work
      in a decentralized financial system.
    </p>
  </div>

  {/* CARD 2 */}
  <div className="flex flex-col items-center space-y-2">
    <img src={image2} alt="Crypto basics 2" className="w-64" />

    <h3 className="text-lg font-bold">
      Can crypto really replace your bank account?
    </h3>

    <p className="text-sm text-gray-600 leading-tight max-w-xs">
      Understand the technology behind crypto and how blockchain
      keeps transactions secure and transparent.
    </p>
  </div>

  {/* CARD 3 */}
  <div className="flex flex-col items-center space-y-2">
    <img src={image3} alt="Crypto basics 3" className="w-64" />

    <h3 className="text-lg font-bold">
      When is the best time to invest in crypto?
    </h3>

    <p className="text-sm text-gray-600 leading-tight max-w-xs">
      Discover best practices to protect your crypto assets and
      keep your investments safe.
    </p>
  </div>

</div>
  </div>
</section>

<section className="py-28 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
    
    
    <div className="md:w-1/2">
      
      <h2 className="text-4xl font-bold mb-4">
        Take control of your money
      </h2>

      <p className="text-base text-gray-600 mb-8">
        Start your portfolio today and discover crypto.
      </p>

      
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
          Sign up
        </button>
      </div>

    </div>

    
    <div className="md:w-1/2 flex justify-center">
      <img
        src={octagonImage}
        alt="Crypto portfolio illustration"
        className="w-3/4"
      />
    </div>

  </div>
</section>
    </div>
  );
}

export default Home;