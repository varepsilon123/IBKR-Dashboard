import React, { useEffect, useState } from 'react';
// import { checkAuthStatus } from '../../controllers/auth/auth.controller';

interface TrendIdentificationProps {
  children?: React.ReactNode;
}

const TrendIdentification: React.FC<TrendIdentificationProps> = ({ children }) => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Stock Symbol</th>
                    <th>Company</th>
                    <th>Current Price</th>
                    <th>Stage 2 Started at (Date)</th>
                    <th>% above MA50</th>
                    <th>% above MA200</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>AAPL</td>
                    <td>Apple Inc.</td>
                    <td>$150.00</td>
                    <td>2023-01-01</td>
                    <td>5%</td>
                    <td>10%</td>
                </tr>
                <tr>
                    <td>MSFT</td>
                    <td>Microsoft Corp.</td>
                    <td>$250.00</td>
                    <td>2023-02-01</td>
                    <td>3%</td>
                    <td>8%</td>
                </tr>
                <tr>
                    <td>GOOGL</td>
                    <td>Alphabet Inc.</td>
                    <td>$2800.00</td>
                    <td>2023-03-01</td>
                    <td>4%</td>
                    <td>12%</td>
                </tr>
            </tbody>
        </table>
      {/* {children} */}
    </div>
  );
};

export default TrendIdentification;
