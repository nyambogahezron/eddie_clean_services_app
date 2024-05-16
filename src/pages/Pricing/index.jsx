import PricingInfo from "../../components/PricingInfo";
import SinglePageNav from "../../components/singlePageNav";

const Pricing = () => {
  return (
    <section className='pricing' id='pricing'>
      <SinglePageNav title='pricing' />
      <PricingInfo />
    </section>
  );
};

export default Pricing;
