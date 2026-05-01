function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto">

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 text-sm text-gray-600">

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>About</li>
              <li>Careers</li>
              <li>Affiliates</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Security</li>
              <li>Investors</li>
              <li>Vendors</li>
              <li>Legal & privacy</li>
              <li>Cookie policy</li>
              <li>Cookie preferences</li>
              <li>Digital Asset Disclosures</li>
            </ul>
          </div>

          {/* LEARN */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Learn</h3>
            <ul className="space-y-2">
              <li>Explore</li>
              <li>Market statistics</li>
              <li>Coinbase Bytes newsletter</li>
              <li>Crypto basics</li>
              <li>Tips & tutorials</li>
              <li>Crypto glossary</li>
              <li>Market updates</li>
              <li>What is Bitcoin?</li>
              <li>What is crypto?</li>
              <li>What is a blockchain?</li>
              <li>How to set up a crypto wallet?</li>
              <li>How to send crypto?</li>
              <li>Taxes</li>
            </ul>
          </div>

          {/* INDIVIDUALS */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Individuals</h3>
            <ul className="space-y-2">
              <li>Buy & sell</li>
              <li>Earn free crypto</li>
              <li>Base App</li>
              <li>Coinbase One</li>
              <li>Debit Card</li>
            </ul>

            <h3 className="font-semibold text-gray-900 mt-6 mb-4">Businesses</h3>
            <ul className="space-y-2">
              <li>Asset Listings</li>
              <li>Coinbase Business</li>
              <li>Payments</li>
              <li>Commerce</li>
              <li>Token Manager</li>
            </ul>
          </div>

          {/* INSTITUTIONS */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Institutions</h3>
            <ul className="space-y-2">
              <li>Prime</li>
              <li>Staking</li>
              <li>Exchange</li>
              <li>International Exchange</li>
              <li>Derivatives Exchange</li>
              <li>Verified Pools</li>
            </ul>
          </div>

          {/* DEVELOPERS */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Developers</h3>
            <ul className="space-y-2">
              <li>Developer Platform</li>
              <li>Base</li>
              <li>Server Wallets</li>
              <li>Embedded Wallets</li>
              <li>Base Accounts (Smart Wallets)</li>
              <li>Onramp & Offramp</li>
              <li>x402</li>
              <li>Trade API</li>
              <li>Paymaster</li>
              <li>OnchainKit</li>
              <li>Data API</li>
              <li>Verifications</li>
              <li>Node</li>
              <li>AgentKit</li>
              <li>Staking</li>
              <li>Faucet</li>
              <li>Exchange API</li>
              <li>International Exchange API</li>
              <li>Prime API</li>
              <li>Derivatives API</li>
            </ul>
          </div>

          {/* SUPPORT + PRICES */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>Help center</li>
              <li>Contact us</li>
              <li>Create account</li>
              <li>ID verification</li>
              <li>Account information</li>
              <li>Payment methods</li>
              <li>Account access</li>
              <li>Supported crypto</li>
              <li>Status</li>
              <li>Asset prices</li>
              <li>Bitcoin price</li>
              <li>Ethereum price</li>
              <li>Solana price</li>
              <li>XRP price</li>
              <li>Stock prices</li>
              <li>NVIDIA price</li>
              <li>Apple price</li>
              <li>Microsoft price</li>
              <li>Amazon price</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t mt-16 pt-6 text-center text-sm text-gray-500">
          EltonCryptoApp. All rights reserved.
        </div>
        <div className="bg-yellow-400 text-black text-center text-sm py-2 px-4 font-medium">
        ⚠️ This is a demo project and users should not enter real personal information.
      </div>

      </div>
    </footer>
  );
}

export default Footer;