import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { CompanyProfile } from "../../types";
import { getCompanyProfile } from "../../hooks/useCompanySearch";

interface Props { }

const CompanyPage = (props: Props) => {

    let { ticker } = useParams(); // { ticker } => params.ticker
    const [company, setCompany] = useState<CompanyProfile>();

    useEffect(() => {
        const getProfile = async () => {
            const result = await getCompanyProfile(ticker!);
            setCompany(result?.data[0]);
        }
        getProfile();
    }, [])

    return <>
        {company ? (
            <div>{company.companyName}</div>
        ) : (
            <div>Company not found!</div>
        )}
    </>
}
export default CompanyPage  