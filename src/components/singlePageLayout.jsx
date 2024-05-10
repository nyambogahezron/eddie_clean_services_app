import PropTypes from "prop-types";
import PageTitle from "./PageTitle";

const SinglePageLayout = ({ children, SectionClass, id, title }) => {
  return (
    <section className={SectionClass} id={title}>
      <PageTitle text={id} />
      {children}
    </section>
  );
};

SinglePageLayout.propTypes = {
  children: PropTypes.node,
  SectionClass: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
};

export default SinglePageLayout;
