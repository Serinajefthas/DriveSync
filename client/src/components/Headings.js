import "../styles/Headings.css";

function Headings(props) {
  return (
    <div className="row justify-content-center mb-5 heading-parent">
      <span className="sub-heading">{props.subHeading}</span>
      <h2 className="heading mb-3">{props.heading}</h2>
    </div>
  );
}

export default Headings;
