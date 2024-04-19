import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CompanyProfile } from "../../types";
import { getCompanyProfile } from "../../hooks/useCompanySearch";
import Sidebar from "../../components/sidebar/Sidebar";
import CompanyDashboard from "../../components/companyDashboard/CompanyDashboard";
import CompanyTile from "../../components/companyTile/CompanyTile";

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams(); // { ticker } => params.ticker
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfile = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProfile();
  }, []);

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <CompanyTile title="Company Name" content={company.companyName} />
          </CompanyDashboard>
        </div>
      ) : (
        <div>Company not found!</div>
      )}
    </>
  );
};
export default CompanyPage;
