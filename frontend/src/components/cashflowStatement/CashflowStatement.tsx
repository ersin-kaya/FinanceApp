import { useOutletContext } from "react-router-dom";
import { CompanyCashFlow } from "../../types";
import { useEffect, useState } from "react";
import { getCashflowStatement } from "../../hooks/useCompanySearch";
import Table from "../table/Table";
import Spinner from "../spinner/Spinner";
import { formatLargeMonetaryNumber } from "../../helpers/numberFormatting";

type Props = {};

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.operatingCashFlow),
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.netCashUsedForInvestingActivites),
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(
        company.netCashUsedProvidedByFinancingActivities
      ),
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.cashAtEndOfPeriod),
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.capitalExpenditure),
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.commonStockIssued),
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.freeCashFlow),
  },
];

const CashflowStatement = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [cashflowData, setCashflowData] = useState<CompanyCashFlow[]>();

  useEffect(() => {
    const fetchCashflowData = async () => {
      const result = await getCashflowStatement(ticker!);
      setCashflowData(result!.data);
    };
    fetchCashflowData();
  }, []);

  return (
    <>
      {cashflowData ? (
        <Table config={config} data={cashflowData} />
      ) : (
        <Spinner />
      )}
    </>
  );
};
export default CashflowStatement;
