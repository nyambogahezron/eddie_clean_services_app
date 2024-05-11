import PageTitle from "../../components/PageTitle";
import PricingInfo from "../../components/PricingInfo";
import SinglePageNav from "../../components/singlePageNav";

const Pricing = () => {
  return (
    <section className='pricing' id='pricing'>
      <SinglePageNav title='pricing' />
      <div>
        <PageTitle text=' our pricing' />
      </div>
      <PricingInfo />
    </section>
  );
};

export default Pricing;
