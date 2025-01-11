import React, { useEffect, useState } from 'react';
// import { checkAuthStatus } from '../../controllers/auth/auth.controller';

interface TrendIdentificationProps {
  children?: React.ReactNode;
}

const TrendIdentification: React.FC<TrendIdentificationProps> = ({ children }) => {
  return (
    <div>
        <table className="min-w-full border-collapse border border-gray-200">
            <thead>
                <tr>
                    <th className="border border-gray-300 px-4 py-2">Stock Symbol</th>
                    <th className="border border-gray-300 px-4 py-2">Company</th>
                    <th className="border border-gray-300 px-4 py-2">Current Price</th>
                    <th className="border border-gray-300 px-4 py-2">Stage 2 Started at (Date)</th>
                    <th className="border border-gray-300 px-4 py-2">% above MA50</th>
                    <th className="border border-gray-300 px-4 py-2">% above MA200</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">AAPL</td>
                    <td className="border border-gray-300 px-4 py-2">Apple Inc.</td>
                    <td className="border border-gray-300 px-4 py-2">$150.00</td>
                    <td className="border border-gray-300 px-4 py-2">2023-01-01</td>
                    <td className="border border-gray-300 px-4 py-2">5%</td>
                    <td className="border border-gray-300 px-4 py-2">10%</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">MSFT</td>
                    <td className="border border-gray-300 px-4 py-2">Microsoft Corp.</td>
                    <td className="border border-gray-300 px-4 py-2">$250.00</td>
                    <td className="border border-gray-300 px-4 py-2">2023-02-01</td>
                    <td className="border border-gray-300 px-4 py-2">3%</td>
                    <td className="border border-gray-300 px-4 py-2">8%</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">GOOGL</td>
                    <td className="border border-gray-300 px-4 py-2">Alphabet Inc.</td>
                    <td className="border border-gray-300 px-4 py-2">$2800.00</td>
                    <td className="border border-gray-300 px-4 py-2">2023-03-01</td>
                    <td className="border border-gray-300 px-4 py-2">4%</td>
                    <td className="border border-gray-300 px-4 py-2">12%</td>
                </tr>
            </tbody>
        </table>
      {/* {children} */}
    </div>
  );
};

export default TrendIdentification;
