import PageTitle from "../../components/PageTitle";
import PricingInfo from "../../components/PricingInfo";

const Pricing = () => {
  return (
    <section className='pricing' id='pricing'>
      <div>
        <PageTitle text=' our pricing' />
      </div>
      <PricingInfo />
    </section>
  );
};

export default Pricing;
