import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TestApi() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/test/')
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));
    }, []);

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-6 text-black">Company Details</h1>

            {/* Company Info */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-700">{data.shortName}</h2>
                <p className="text-gray-600"><strong>Sector:</strong> {data.sector}</p>
                <p className="text-gray-600"><strong>Industry:</strong> {data.industry}</p>
                <a href={data.website} className="text-blue-500" target="_blank" rel="noopener noreferrer">{data.website}</a>
            </div>

            {/* Financial Overview */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-700">Financial Overview</h3>
                <p className="text-gray-600"><strong>Market Cap:</strong> {data.marketCap}</p>
                <p className="text-gray-600"><strong>Current Price:</strong> {data.currentPrice} INR</p>
                <p className="text-gray-600"><strong>Total Revenue:</strong> {data.totalRevenue}</p>
                <p className="text-gray-600"><strong>EBITDA:</strong> {data.ebitda}</p>
                <p className="text-gray-600"><strong>Dividend Rate:</strong> {data.dividendRate} INR</p>
            </div>

            {/* Price Targets */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-700">Price Targets & Analyst Opinions</h3>
                <p className="text-gray-600"><strong>Target High Price:</strong> {data.targetHighPrice} INR</p>
                <p className="text-gray-600"><strong>Target Low Price:</strong> {data.targetLowPrice} INR</p>
                <p className="text-gray-600"><strong>Target Mean Price:</strong> {data.targetMeanPrice} INR</p>
                <p className="text-gray-600"><strong>Target Median Price:</strong> {data.targetMedianPrice} INR</p>
                <p className="text-gray-600"><strong>Recommendation Mean:</strong> {data.recommendationMean}</p>
                <p className="text-gray-600"><strong>Recommendation Key:</strong> {data.recommendationKey}</p>
                <p className="text-gray-600"><strong>Number of Analyst Opinions:</strong> {data.numberOfAnalystOpinions}</p>
            </div>

            {/* Cash & Debt */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-700">Cash & Debt</h3>
                <p className="text-gray-600"><strong>Total Cash:</strong> {data.totalCash}</p>
                <p className="text-gray-600"><strong>Total Cash Per Share:</strong> {data.totalCashPerShare}</p>
                <p className="text-gray-600"><strong>Total Debt:</strong> {data.totalDebt}</p>
                <p className="text-gray-600"><strong>Debt to Equity:</strong> {data.debtToEquity}</p>
            </div>

            {/* Margins & Ratios */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-700">Margins & Ratios</h3>
                <p className="text-gray-600"><strong>Revenue Growth:</strong> {data.revenueGrowth}</p>
                <p className="text-gray-600"><strong>Gross Margins:</strong> {data.grossMargins}</p>
                <p className="text-gray-600"><strong>EBITDA Margins:</strong> {data.ebitdaMargins}</p>
                <p className="text-gray-600"><strong>Operating Margins:</strong> {data.operatingMargins}</p>
                <p className="text-gray-600"><strong>Return on Assets (ROA):</strong> {data.returnOnAssets}</p>
                <p className="text-gray-600"><strong>Return on Equity (ROE):</strong> {data.returnOnEquity}</p>
            </div>

            {/* Cashflow */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-700">Cashflow</h3>
                <p className="text-gray-600"><strong>Free Cash Flow:</strong> {data.freeCashflow}</p>
                <p className="text-gray-600"><strong>Operating Cash Flow:</strong> {data.operatingCashflow}</p>
            </div>

            {/* Additional Information */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-700">Additional Information</h3>
                <p className="text-gray-600"><strong>Quick Ratio:</strong> {data.quickRatio}</p>
                <p className="text-gray-600"><strong>Current Ratio:</strong> {data.currentRatio}</p>
                <p className="text-gray-600"><strong>Financial Currency:</strong> {data.financialCurrency}</p>
            </div>
        </div>
    );
}

export default TestApi;
