
'use client';
import IconCloud from '../components/demos/motion/demo-icon-cloud';
import { HeroParallax } from '../components/ui/hero-parallax';
// import { Head } from 'next/document'
import Image from 'next/image'

export default function Home() {

  const products = [
    {
      title: "AMM",
      link: "https://github.com/alexandreelkhoury/Solidity-AMM-Oracle-Upgradable/tree/main",
      thumbnail: "/images/1.png",
    },
    {
      title: "NFT",
      link: "https://github.com/alexandreelkhoury/Solidity-AMM-Oracle-Upgradable/tree/main",
      thumbnail: "/images/4.png",
    },
    {
      title: "NFTunes",
      link: "https://github.com/alexandreelkhoury/Solidity-AMM-Oracle-Upgradable/tree/main",
      thumbnail: "/images/3.png",
    },
    {
      title: "AMM",
      link: "https://github.com/alexandreelkhoury/Solidity-AMM-Oracle-Upgradable/tree/main",
      thumbnail: "/images/1.png",
    },
    {
      title: "Product 5",
      link: "/product1",
      thumbnail: "/images/2.png",
    },
    {
      title: "NFTunes",
      link: "https://github.com/alexandreelkhoury/Solidity-AMM-Oracle-Upgradable/tree/main",
      thumbnail: "/images/3.png",
    },
    {
      title: "NFT",
      link: "https://github.com/alexandreelkhoury/Solidity-AMM-Oracle-Upgradable/tree/main",
      thumbnail: "/images/4.png",
    },
    {
      title: "Product 8",
      link: "/product2",
      thumbnail: "/images/2.png",
    },
    {
      title: "NFTunes",
      link: "https://github.com/alexandreelkhoury/Solidity-AMM-Oracle-Upgradable/tree/main",
      thumbnail: "/images/3.png",
    },
    {
      title: "NFT",
      link: "https://github.com/alexandreelkhoury/Solidity-AMM-Oracle-Upgradable/tree/main",
      thumbnail: "/images/4.png",
    },
    {
      title: "Product 11",
      link: "/product2",
      thumbnail: "/images/2.png",
    },
    {
      title: "NFT",
      link: "https://github.com/alexandreelkhoury/Solidity-AMM-Oracle-Upgradable/tree/main",
      thumbnail: "/images/4.png",
    },
    {
      title: "AMM",
      link: "https://github.com/alexandreelkhoury/Solidity-AMM-Oracle-Upgradable/tree/main",
      thumbnail: "/images/1.png",
    },
    {
      title: "Product 14",
      link: "/product1",
      thumbnail: "/images/2.png",
    },
    {
      title: "NFT",
      link: "https://github.com/alexandreelkhoury/Solidity-AMM-Oracle-Upgradable/tree/main",
      thumbnail: "/images/4.png",
    },
  ];

  const handleDownload = async () => {
    try {
      const response = await fetch('https://olive-encouraging-gecko-886.mypinata.cloud/ipfs/QmTDw1mAWXWD9eLDXU7mLdswmepqScNj9pKHaDa5d4V7Q4?pinataGatewayToken=pWlwZletu2n2A8YlLeubjgrpC5zmwasURKNz3LaS-cKBhrBHYFSi2mMiZBoeha0j');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'CV_Alexandre_Khoury.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download error:', error);
    }
  };

  return (

    <div>
      <main className="flex min-h-screen flex-col items-center justify-between">

        <div className="place-self-end pr-20 py-5">
          <button className="download-cv-button" onClick={handleDownload}>Download CV</button>
        </div>

        <HeroParallax products={products} />

        <section className="w-full p-8 bg-[#E2E8F0]">
          <div className="flex justify-center">
            <IconCloud />
          </div>
        </section>

        <section className="w-full bg-gray-50">
          <div className="p-12 rounded-lg mx-auto max-w-6xl">
            <h3 className="text-3xl font-semibold text-center mb-10">Discover my journey</h3>

            <div className="grid gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center">
                  <a href="https://metav.rs" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/images/logo-metav.rs.jpg"
                      alt="Metav.rs Logo"
                      width={500}
                      height={500}
                      className="h-12 w-12 mr-4"
                    />
                  </a>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800">Metav.rs</h4>
                    <p className="text-lg italic text-gray-600">Fullstack Developer (12/2022 - Present)</p>
                  </div>
                </div>
                <div className="mt-4 pl-14">
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Operated and maintained an Ethereum RPC Node using Geth.</li>
                    <li>Led the development of Chainalyze, a project designed to perform blockchain analytics using the RPC node.</li>
                    <li>Developed smart contracts in Solidity implementing best practices to enhance security and efficiency.</li>
                    <li>Integrated smart contracts on the frontend of a minting page.</li>
                    <li>Maintained and updated a RESTful API and PostgreSQL database.</li>
                    <li>Created API documentation in Clojure.</li>
                    <li>Conducted thorough code reviews.</li>
                    <li>Performed unit testing.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center">
                  <a href="https://ambrosia.com" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/images/ambrosia-logo.jpeg"
                      alt="Ambrosia Logo"
                      width={500}
                      height={500}
                      className="h-12 w-12 mr-4"
                    />
                  </a>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800">Ambrosia</h4>
                    <p className="text-lg italic text-gray-600">Back-End Developer (09/2022 - 11/2022)</p>
                  </div>
                </div>
                <div className="mt-4 pl-14">
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Developed scripts to retrieve data from EVM chains.</li>
                    <li>Automated funds transfer from clients to DeFi protocols.</li>
                    <li>Maintained and improved the API using NestJS and MongoDB.</li>
                    <li>Created a TS script to combat money laundering (AML/CFT).</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center">
                  <a href="https://chain.link/" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/images/chainlink-logo.png"
                      alt="CCIP Bootcamp Logo"
                      width={100}
                      height={100}
                      className="h-8 w-8 mr-4"
                    />
                  </a>
                  <div>
                    <p className="text-xl font-semibold text-gray-800">Chainlink CCIP (Cross-Chain Interoperability Protocol) Bootcamp</p>
                    <p className="text-lg italic text-gray-600">2024</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center">
                  <a href="https://www.xrpl-commons.org/" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/images/XRP-logo.png"
                      alt="XRP Ledger Bootcamp Logo"
                      width={500}
                      height={500}
                      className="h-7 w-9 mr-4"
                    />
                  </a>
                  <div>
                    <p className="text-xl font-semibold text-gray-800">XRP Ledger Bootcamp</p>
                    <p className="text-lg italic text-gray-600">2024</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center">
                  <a href="https://www.esgi.fr/" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/images/ESGI-logo.jpeg"
                      alt="ESGI Logo"
                      width={500}
                      height={500}
                      className="h-8 w-8 mr-4"
                    />
                  </a>
                  <div>
                    <p className="text-xl font-semibold text-gray-800">Master Blockchain Engineer, ESGI</p>
                    <p className="text-lg italic text-gray-600">2022 - 2024</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center">
                  <a href="https://www.alyra.fr/formations/decouvrir-la-formation-developpeur-blockchain-alyra" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/images/alyra-logo.png"
                      alt="Alyra l'école Blockchain Logo"
                      width={500}
                      height={500}
                      className="h-8 w-8 mr-4"
                    />
                  </a>
                  <div>
                    <p className="text-xl font-semibold text-gray-800">3 Months Blockchain Crash Course, Alyra l&apos;école Blockchain</p>
                    <p className="text-lg italic text-gray-600">2022</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center">
                  <a href="https://u-paris.fr/" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/images/université-de-paris-logo.png"
                      alt="Université Paris Descartes Logo"
                      width={500}
                      height={500}
                      className="h-8 w-8 mr-4"
                    />
                  </a>
                  <div>
                    <p className="text-xl font-semibold text-gray-800">Bachelor in Mathematics, Université Paris Descartes</p>
                    <p className="text-lg italic text-gray-600">2018 - 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full pb-4 h-85 p-0 m-0 flex flex-col items-center justify-between bg-[#E2E8F0]">
        <div className="container px-6 pt-6">
          <div className="mb-6 flex justify-center space-x-2">
            <a
              href="https://www.linkedin.com/in/alexandre-khoury/"
              type="button"
              target="_blank"
              className="rounded-full bg-[#0082ca] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512">
                  <path
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
            </a>

            <a
              href="https://github.com/alexandreelkhoury"
              type="button"
              target="_blank"
              className="rounded-full bg-[#333333] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 496 512">
                  <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </span>
            </a>

            <a
              href="mailto:alexkhoury@hotmail.com"
              type="button"
              target="_blank"
              className="rounded-full bg-white p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                <Image
                  src="/images/email.svg" // Replace with your actual image filename
                  alt="Email"
                  width={500}
                  height={500}
                  className="h-5 w-5"
                />
              </span>
            </a>

            <a
              href="https://wa.me/33749990469"
              type="button"
              target="_blank"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              <Image
                src="/images/whatsapp.png"
                alt="Whatsapp"
                width={500}
                height={500}
                className="h-10 w-10"
              />
            </a>
          </div>
        </div>
        <p className="flex flex-col items-center justify-between">Copyright 2024. All rights reserved.</p>
      </footer>
    </div>

  );
}

