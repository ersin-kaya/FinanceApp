import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CompanyProfile } from "../../types";
import { getCompanyProfile } from "../../hooks/useCompanySearch";
import Sidebar from "../../components/sidebar/Sidebar";
import CompanyDashboard from "../../components/companyDashboard/CompanyDashboard";
import CompanyTile from "../../components/companyTile/CompanyTile";
import Spinner from "../../components/spinner/Spinner";

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
        <div className="w-full relative flex ct-docs-disable-sidebar-content">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <CompanyTile title="Company Name" content={company.companyName} />
            <CompanyTile
              title="Price"
              content={"$" + company.price.toString()}
            />
            <CompanyTile title="DCF" content={"$" + company.dcf.toString()} />
            <CompanyTile title="Sector" content={company.sector} />
            <p className="bg-white shadow rounded text-medium text-gray-900 p-3 m-4">
              {company.description}
            </p>
          </CompanyDashboard>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};
export default CompanyPage;
