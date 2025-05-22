import React from "react";
import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa";

const siteConfig = {
  siteName: "Perky N Large",
  ctaText: "Buy $PNL",
  chartLink: "https://dexscreener.com/solana/8KKuRsYWi6aYP8oGTuGMU13fWcp2xTxx1drMUWdm5PNL",
  buyLink: "https://raydium.io/swap/?inputMint=sol&outputMint=8KKuRsYWi6aYP8oGTuGMU13fWcp2xTxx1drMUWdm5PNL",
  description: "The Only Pair That Never Dips.\n $PNL lifts portfolios and spirits -- naturally.",
  stats: [],
  phantom: "https://phantom.app/",
  solflare: "https://solflare.com/",
  binance: "https://www.binance.com/",
  coinbase: "https://www.coinbase.com/",
  raydium: "https://raydium.io/",
  jupiter: "https://jup.ag/",
  contractAddress: "8KKuRsYWi6aYP8oGTuGMU13fWcp2xTxx1drMUWdm5PNL",
  twitter: "https://twitter.com/",
  telegram: "https://t.me/",
  discord: "https://discord.com/invite/"
};

export default function Home() {
  return (
    <>
      <style>
        {`
          .glow-flicker {
            color: #14da3f;
            animation: subtlePulse 2.5s ease-in-out infinite;
            filter: drop-shadow(0 0 2px #14da3f);
          }

          @keyframes subtlePulse {
            0%, 100% { filter: drop-shadow(0 0 2px #14da3f); }
            50% { filter: drop-shadow(0 0 4px #14da3f); }
          }

          .section-divider {
            height: 2px;
            background-color: #14da3f;
            margin: 0;
            border: none;
            opacity: 0.6;
          }

          section {
            background: linear-gradient(to bottom, #011801, #000000);
          }
        `}
      </style>

      <header className="bg-black py-4 border-b border-[#14da3f] sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Logo" className="w-6 h-6 rounded-full" />
            <span className="text-[#14da3f] font-bold text-lg">PNL</span>
          </div>
          <nav className="flex gap-6 text-white text-sm">
            <a href="#about" className="hover:text-[#14da3f]">About</a>
            <a href="#tokenomics" className="hover:text-[#14da3f]">Tokenomics</a>
            <a href="#Roadmap" className="hover:text-[#14da3f]">Roadmap</a>
            <a href="#how-to-buy" className="hover:text-[#14da3f]">How to Buy</a>
            <a href="#community" className="hover:text-[#14da3f]">Our Community</a>
          </nav>
          <a href={siteConfig.buyLink} className="bg-[#14da3f] text-black font-bold py-2 px-4 rounded-md shadow hover:scale-105 transform transition-transform duration-200">
            Buy Now
          </a>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#14da3f]/20 to-[#14da3f]/10"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#14da3f]/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#14da3f]/10 blur-[100px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:gap-12">
          <div className="md:w-1/2 max-w-md text-left md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="glow-flicker">P</span>erky <span className="glow-flicker">N</span> <span className="glow-flicker">L</span>arge
            </h1>
            <p className="text-base md:text-lg text-gray-300 mt-6 px-4 py-3 border border-[#14da3f] rounded-lg inline-block whitespace-pre-line">
              {siteConfig.description}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 my-6">
              <a href={siteConfig.buyLink} className="bg-gradient-to-r from-[#14da3f] to-green-500 text-white font-bold px-5 py-2.5 rounded-md shadow transform transition-transform duration-200 hover:scale-105">
                {siteConfig.ctaText} <span className="ml-2">→</span>
              </a>
              <a href={siteConfig.chartLink} className="border-2 border-[#14da3f] text-[#14da3f] px-5 py-2.5 rounded-md transform transition-transform duration-200 hover:scale-105">
                View Chart ↗
              </a>
            </div>
          </div>

          <div className="md:w-1/2 max-w-md relative">
            <div className="relative w-64 h-64 md:w-72 md:h-72 mx-auto md:ml-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#14da3f] to-green-500 rounded-2xl blur-xl animate-pulse opacity-70"></div>
              <img
                src="/images/logo.png"
                alt="Logo"
                className="relative z-10 rounded-2xl w-full h-full object-contain border-4 border-[#14da3f]"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

        <section id="about" className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About <span className="text-[#14da3f] glow-flicker">PNL</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-1">
            <div className="w-full max-w-sm grid gap-8 md:mr-2 h-[500px]">
              {[ 
                { icon: "🔥", title: "Explosive Growth Potential", desc: "The chart only goes up. Period." },
                { icon: "🔒", title: "100% Safe & Secure", desc: "Liquidity burned, contract renounced. Zero tax." },
                { icon: "📈", title: "Profitable Curves", desc: "Our curves don’t lie — neither do our returns." },
                { icon: "🌐", title: "Growing Community", desc: "Thousands strong and rising." }
              ].map((item, idx) => (
                <div key={idx} className="bg-black/60 border border-[#14da3f] p-2 rounded-md hover:scale-105 transform transition duration-200 w-full mx-auto flex flex-col justify-start text-left h-full">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{item.icon}</span>
                    <h3 className="text-sm font-bold text-[#14da3f]">{item.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="relative w-[500px] h-[500px] ml-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#14da3f] to-green-500 rounded-2xl blur-xl animate-pulse opacity-70"></div>
              <img
                src="/images/about.png"
                alt="About"
                className="relative z-10 rounded-2xl w-full h-full object-contain border-4 border-[#14da3f]"
              />
            </div>
          </div>
        </div>
      </section>
      <hr className="section-divider" />

      <section id="tokenomics" className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 glow-flicker">
            Tokenomics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { label: "Total Supply", value: "1,000,000,000", icon: "💰" },
              { label: "Tax", value: "0%", icon: "🚫" },
              { label: "Liquidity", value: "100% Burned", icon: "🔥" }
            ].map((item, idx) => (
              <div key={idx} className="bg-black/60 border border-[#14da3f] px-1 py-0.5 rounded-md hover:scale-105 transform transition duration-200">
                <div className="flex flex-col items-center gap-2 mb-2">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="text-lg font-bold text-[#14da3f] text-center">{item.label}</h3>
                </div>
                <p className="text-lg md:text-xl font-bold text-[#14da3f] whitespace-nowrap">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-[500px] h-[500px] mx-auto mt-12 mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#14da3f] to-green-500 rounded-2xl blur-xl animate-pulse opacity-70"></div>
          <img
            src="/images/tokenomics.png"
            alt="Tokenomics" 
            className="relative z-10 rounded-2xl w-full h-full object-contain border-4 border-[#14da3f]"
          />
        </div>
      </section>
      <hr className="section-divider" />

{/* all previous code remains unchanged */}

      <section id="Roadmap" className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 glow-flicker">
            Roadmap
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Our journey to make your curves profitable.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative flex flex-col items-center gap-6 before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-1 before:bg-[#14da3f] before:z-0">
              {[1, 2, 3, 4].map((phase, idx) => (
                <div key={idx} className={`w-full max-w-sm relative z-10 ${idx % 2 === 0 ? 'self-start' : 'self-end'}`}>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[160%] w-6 h-6 rounded-full bg-[#14da3f] text-black font-bold flex items-center justify-center z-20">
                    {phase}
                  </div>
                  <div className="bg-black/60 border border-[#14da3f] rounded-md p-2 text-left shadow-sm max-w-sm w-full">
                    <h3 className="text-lg font-bold text-[#14da3f] mb-2">
                      {`Phase ${phase}: ${['Launch', 'Growth', 'Expansion', 'Domination'][idx]}`}
                    </h3>
                    <ul className="list-disc list-inside text-sm text-gray-300">
                      {idx === 0 && [
                        "Website launch",
                        "Social media setup",
                        "Community building",
                        "Token launch on Solana",
                        "Initial marketing push"
                      ].map((item, i) => <li key={i}>{item}</li>)}
                      {idx === 1 && [
                        "CEX listings",
                        "Partnerships with influencers",
                        "Community expansion",
                        "Meme contests",
                        "Trending on social platforms"
                      ].map((item, i) => <li key={i}>{item}</li>)}
                      {idx === 2 && [
                        "Major exchange listings",
                        "Merchandise store",
                        "Global marketing campaigns",
                        "Community governance",
                        "Charitable initiatives"
                      ].map((item, i) => <li key={i}>{item}</li>)}
                      {idx === 3 && [
                        "PNL ecosystem development",
                        "Strategic acquisitions",
                        "Cross-chain expansion",
                        "PNL metaverse integration",
                        "Global crypto domination"
                      ].map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section id="how-to-buy" className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 glow-flicker">
            How to Buy
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Follow these simple steps to get your hands on the most profitable curves in crypto.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[{
                step: 1,
                title: "Create a Wallet",
                desc: "Download Phantom or Solflare wallet",
                extra: [
                  { name: "Phantom", url: siteConfig.phantom },
                  { name: "Solflare", url: siteConfig.solflare }
                ]
              },
              {
                step: 2,
                title: "Get SOL",
                desc: "Buy SOL from an exchange",
                extra: [
                  { name: "Binance", url: siteConfig.binance },
                  { name: "Coinbase", url: siteConfig.coinbase }
                ]
              },
              {
                step: 3,
                title: "Connect to DEX",
                desc: "Visit Raydium or Jupiter",
                extra: [
                  { name: "Raydium", url: siteConfig.raydium },
                  { name: "Jupiter", url: siteConfig.jupiter }
                ]
              },
              {
                step: 4,
                title: "Swap for $PNL",
                desc: "Use our contract address",
                extra: [
                  { name: siteConfig.contractAddress, url: "#", isCopyable: true }
                ]
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-black/60 border border-[#14da3f] p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-200 text-left">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#14da3f] text-black font-bold rounded-full mr-3">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#14da3f]">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.desc}</p>
                  </div>
                </div>
                {item.extra && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.extra.map((btn, bIdx) => (
                      btn.isCopyable ? (
                        <button
                          key={bIdx}
                          onClick={() => navigator.clipboard.writeText(btn.name)}
                          className="bg-black border border-[#14da3f] text-[#14da3f] text-xs px-3 py-1 rounded hover:bg-[#14da3f] hover:text-black transition"
                        >
                          Copy Contract
                        </button>
                      ) : (
                        <a
                          key={bIdx}
                          href={btn.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black border border-[#14da3f] text-[#14da3f] text-xs px-3 py-1 rounded hover:bg-[#14da3f] hover:text-black transition"
                        >
                          {btn.name}
                        </a>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

     <hr className="section-divider" />


      <section id="community" className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 glow-flicker">
            Join Our Community
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Be part of the fastest-growing community in the Solana ecosystem.
          </p>
          <div className="relative w-[500px] h-[500px] mx-auto mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#14da3f] to-green-500 rounded-2xl blur-xl animate-pulse opacity-70"></div>
            <img
              src="/images/community.png"
              alt="Community Visual"
              className="relative z-10 rounded-2xl w-full h-full object-contain border-4 border-[#14da3f]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            {[
              {
                name: "Twitter",
                desc: "Follow us for the latest updates",
                cta: "Join Now →",
                url: siteConfig.twitter,
                icon: <FaTwitter className="text-[#14da3f] text-2xl mb-2 mx-auto" />,
              },
              {
                name: "Telegram",
                desc: "Chat with the community",
                cta: "Join Now →",
                url: siteConfig.telegram,
                icon: <FaTelegramPlane className="text-[#14da3f] text-2xl mb-2 mx-auto" />,
              },
              {
                name: "Discord",
                desc: "Join our growing community",
                cta: "Join Now →",
                url: siteConfig.discord,
                icon: <FaDiscord className="text-[#14da3f] text-2xl mb-2 mx-auto" />,
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/60 border border-[#14da3f] p-6 rounded-lg hover:scale-105 transform transition duration-200 block"
              >
                {item.icon}
                <h3 className="text-lg font-bold text-[#14da3f] mb-1">{item.name}</h3>
                <p className="text-sm text-gray-300 mb-2">{item.desc}</p>
                <span className="text-sm text-[#14da3f] hover:underline">{item.cta}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <hr className="section-divider" />
    </>
  );
}



