import React from 'react'
import { TestDataCompany } from '../Table/testData'
import { render } from '@testing-library/react';

type Props = {}

const data = TestDataCompany[0];

type Company = typeof data;

const configs = [
    {
        label: "Company Name",
        render: (company: Company) => company.companyName,
        subTitle: "this is the company name",
    },
     {
        label: "Company Name",
        render: (company: Company) => company.companyName,
        subTitle: "this is the company name",
    }
];

const RatioList = (props: Props) => {
    const renderedRows = configs.map((row) => {
  return (
    <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4">
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">  
                    {row.label}
                </p>
                <p className="text-sm text-gray-500 truncate">
                    {row.subTitle && row.subTitle}
                </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900"></div>
            {row.render(data)}
        </div>
    </li>
);
});

return <div className="bg-white shadow rounded-lg p-4 sm:p-6 lg:p-8">
<ul className="divide-y divide-gray-200">
    {renderedRows}
</ul>
    </div>;
};

export default RatioList;