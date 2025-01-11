import React, { useEffect, useState } from 'react';

interface TrendIdentificationProps {
  children?: React.ReactNode;
}

const TrendIdentification: React.FC<TrendIdentificationProps> = ({ children }) => {
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Trend Identification</h2>
        <p className="mb-6">
          Focus on stocks in Stage 2 of the market cycle (advancing phase).<br />
          Confirm an uptrend by analyzing moving averages.<br />
          A stock is in an uptrend if it is trading above its 200-day moving average.<br />
          The 50-day moving average should also be above the 200-day moving average, indicating strength.
        </p>
        <table className="min-w-full">
            <thead className="ibm-plex-mono-bold">
                <tr>
                    <th className="border border-gray-400 px-4 py-2">Stock Symbol</th>
                    <th className="border border-gray-400 px-4 py-2">Company</th>
                    <th className="border border-gray-400 px-4 py-2">Current Price</th>
                    <th className="border border-gray-400 px-4 py-2">Stage 2 Started at (Date)</th>
                    <th className="border border-gray-400 px-4 py-2">% above MA50</th>
                    <th className="border border-gray-400 px-4 py-2">% above MA200</th>
                </tr>
            </thead>
            <tbody className="ibm-plex-mono-regular">
                <tr>
                    <td className="border border-gray-400 px-4 py-2">AAPL</td>
                    <td className="border border-gray-400 px-4 py-2">Apple Inc.</td>
                    <td className="border border-gray-400 px-4 py-2">$150.00</td>
                    <td className="border border-gray-400 px-4 py-2">2023-01-01</td>
                    <td className="border border-gray-400 px-4 py-2">5%</td>
                    <td className="border border-gray-400 px-4 py-2">10%</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">MSFT</td>
                    <td className="border border-gray-400 px-4 py-2">Microsoft Corp.</td>
                    <td className="border border-gray-400 px-4 py-2">$250.00</td>
                    <td className="border border-gray-400 px-4 py-2">2023-02-01</td>
                    <td className="border border-gray-400 px-4 py-2">3%</td>
                    <td className="border border-gray-400 px-4 py-2">8%</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">GOOGL</td>
                    <td className="border border-gray-400 px-4 py-2">Alphabet Inc.</td>
                    <td className="border border-gray-400 px-4 py-2">$2800.00</td>
                    <td className="border border-gray-400 px-4 py-2">2023-03-01</td>
                    <td className="border border-gray-400 px-4 py-2">4%</td>
                    <td className="border border-gray-400 px-4 py-2">12%</td>
                </tr>
            </tbody>
        </table>
      {/* {children} */}
    </div>
  );
};

export default TrendIdentification;
