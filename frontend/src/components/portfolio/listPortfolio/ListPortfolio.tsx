import { CompanySearch } from "../../../types";
import CardPortfolio from "../cardPortfolio/CardPortfolio";

interface Props {
    portfolio: CompanySearch[];
    onPortfolioDelete: (item: CompanySearch) => void;
}

const ListPortfolio = ({ portfolio, onPortfolioDelete }: Props) => {
    return (
        <section id="portfolio">
            <h2 className="mb-3 mt-3 text-3xl font-semibold text-center md:text-4xl">
                My Portfolio
            </h2>
            <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 mb-5 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
                <>
                    {portfolio.length > 0 ? (
                        portfolio.map((item) => {
                            return (
                                <CardPortfolio
                                    item={item}
                                    onPortfolioDelete={onPortfolioDelete}
                                />
                            );
                        })
                    ) : (
                        <h3 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
                            Your portfolio is empty.
                        </h3>
                    )}
                </>
            </div>
        </section>
    )
}
export default ListPortfolio