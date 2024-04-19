import { useState } from "react";
// import Home2 from "../../assets/home1mobile.png";
import "./expertise.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
// import Slideshow from "../Home/slideshow";
// import Img1 from "../../assets/getintouch.jpg";

function useHover() {
  const [hovering, setHovering] = useState(false);
  const onHoverProps = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  };
  return [hovering, onHoverProps];
}

const Home = () => {
  const [buttonAIsHovering, buttonAHoverProps] = useHover();
  const [buttonBIsHovering, buttonBHoverProps] = useHover();
  const [buttonCIsHovering, buttonCHoverProps] = useHover();
  const [buttonDIsHovering, buttonDHoverProps] = useHover();

  return (
    <section class="section3">
      <div className="containerexpetise">
        <div className="cont1">
          <div className="focus">What we focus on</div>
        </div>
        <div className="expertise">
          <div className="row">
            <div
              className={buttonAIsHovering ? "box frst active" : "box frst"}
              {...buttonAHoverProps}
            >
              <div className="data">
                {buttonAIsHovering
                  ? "Skilled in representing clients in civil disputes, trials, and appeals, ensuring their rights are protected."
                  : "Corporate Law"}
              </div>
              <FontAwesomeIcon icon={faScaleBalanced} />
            </div>
            <div
              className={buttonBIsHovering ? "box second active" : "box second"}
              {...buttonBHoverProps}
            >
              <div className="data">
                {buttonBIsHovering
                  ? "Expertise in handling corporate legal matters including governance, compliance, and contract negotiation."
                  : "Civil Litigation"}
              </div>
              <FontAwesomeIcon icon={faScaleBalanced} />
            </div>
          </div>
          <div className="row">
            <div
              className={buttonCIsHovering ? "box third active" : "box third"}
              {...buttonCHoverProps}
            >
              <div className="data">
                {buttonCIsHovering
                  ? "Specialized in family law &family-related issues, including marriage, divorce, child custody, adoption, and domestic violence."
                  : "Family Law"}
              </div>
              <FontAwesomeIcon icon={faScaleBalanced} />
            </div>
            <div
              className={buttonDIsHovering ? "box fourth active" : "box fourth"}
              {...buttonDHoverProps}
            >
              <div className="data">
                {buttonDIsHovering
                  ? "Specialized in Criminal Cases Pre-trial Representation, Negotiating Plea Bargains, Trial Defense,Appeals and Post-Conviction Relief"
                  : "Criminal Cases"}
              </div>
              <FontAwesomeIcon icon={faScaleBalanced} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
