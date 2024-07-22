import React, { Suspense } from "react";

import service1 from "../../assets/images/services-page/service1.jpeg";
import service2 from "../../assets/images/services-page/Subject.png";
import service3 from "../../assets/images/services-page/service3.jpg";
import service4 from "../../assets/images/services-page/service4.jpg";
import service5 from "../../assets/images/services-page/service5.jpg";
import service6 from "../../assets/images/services-page/service6.jpg";
import service7 from "../../assets/images/services-page/service7.svg";

// const NavBar = React.lazy(() => import("../../Navbar"));
const AboutUs = React.lazy(() => import("../../Components/Aboutus"));
const Founder = React.lazy(() => import("../../Components/Service"));
const Footer = React.lazy(() => import("../../footer"));

const Expert = [
  {
    image: service3,
    name: "Criminal Law",
    description:
      "<br> <b>Criminal Defense:</b> <br> - Providing representation in criminal cases. <br> - Defending clients against charges and accusations. <br><br> <b>Investigations:</b> <br> - Assisting with criminal investigations. <br> - Ensuring protection of client rights during investigations. <br> <br> <b>Appeals:</b> <br> - Handling appeals for criminal cases. <br> - Seeking to overturn or reduce convictions. <br> <br> Our criminal law team is dedicated to protecting your rights and providing a robust defense to achieve the best possible outcome.",
  },
  {
    pos: "left",
    image: service4,
    name: "Civil Law",
    description:
      "<br> <b>Dispute Resolution:</b> <br> - Assisting in resolving disputes through mediation and arbitration. <br> - Representing clients in civil litigation. <br><br> <b>Contract Law:</b> <br> - Drafting and reviewing contracts. <br> - Advising on contract disputes and enforcement. <br> <br> <b>Tort Law:</b> <br> - Handling personal injury and negligence claims. <br> - Seeking compensation for damages. <br> <br> Our civil law team is committed to achieving fair and just outcomes through skilled advocacy and negotiation.",
  },
  {
    image: service5,
    name: "Family Law",
    description:
      "<br> <b>Divorce and Separation:</b> <br> - Providing guidance and representation in divorce cases. <br> - Assisting with legal separation and annulments. <br><br> <b>Child Custody and Support:</b> <br> - Handling custody disputes and arrangements. <br> - Ensuring fair child support agreements. <br> <br> <b>Adoption:</b> <br> - Assisting with domestic and international adoptions. <br> - Navigating legal requirements for adoption. <br> <br> Our family law team offers compassionate and comprehensive legal services to support families through challenging times.",
  },
  {
    pos: "left",
    image: service6,
    name: "Commercial Law",
    description:
      "<br> <b>Business Contracts:</b> <br> - Drafting and negotiating business agreements. <br> - Ensuring compliance with commercial regulations. <br><br> <b>Intellectual Property:</b> <br> - Protecting trademarks, patents, and copyrights. <br> - Handling IP disputes and litigation. <br> <br> <b>Trade and Commerce:</b> <br> - Advising on trade regulations and policies. <br> - Facilitating domestic and international commerce. <br> <br> Our commercial law team delivers strategic legal solutions to help businesses thrive and navigate complex commercial landscapes.",
  },
  {
    image: service1,
    name: "Corporate Law",
    description:
      "<br> <b>Corporate Governance:</b> <br> - Advising on best practices and regulatory compliance. <br> - Guiding on board structures and shareholder rights. <br><br>  <b>Mergers and Acquisitions (M&A):</b> <br> - Assisting throughout transactions and due diligence. <br> - Structuring deals and maximizing value. <br> <br> <b>Securities Regulation:</b> <br> - Providing guidance on laws and compliance. <br> - Navigating regulatory frameworks effectively. <br> <br> At PR Legal Help, our corporate law team delivers exceptional service, providing strategic legal solutions to navigate complexities and achieve objectives with confidence.",
  },
  {
    pos: "left",
    image: service7,
    name: "Property Law",
    description:
      "<br> <b>Real Estate Transactions:</b> <br> - Assisting with buying and selling property. <br> - Conducting due diligence and ensuring clear titles. <br><br> <b>Leasing and Tenancy:</b> <br> - Drafting and reviewing lease agreements. <br> - Resolving landlord-tenant disputes. <br> <br> <b>Land Use and Zoning:</b> <br> - Advising on zoning regulations and land use planning. <br> - Handling disputes related to land development. <br> <br> Our property law team provides expert guidance to navigate real estate transactions and resolve property-related issues effectively.",
  },
  {
    image: service2,
    name: "Civil Litigation & Property Law",
    description:
      "<div> <h4>Contract Disputes:</h4> <p> Our litigators represent clients in contract disputes, breach of contract claims, and enforcement of contractual rights in various industries and sectors. </p> <h4>Property Disputes:</h4> <p> We handle disputes related to real property, including boundary disputes, easement rights, title issues, and disputes between landlords and tenants. </p> <h4>Personal Injury Claims:</h4> <p> Our firm advocates for individuals who have been injured due to negligence or wrongful conduct, seeking compensation for medical expenses, lost wages, and pain and suffering. </p> <h4>Landlord-Tenant Disputes:</h4> <p> We provide legal representation to landlords and tenants in disputes involving lease agreements, eviction proceedings, and landlord-tenant rights and responsibilities. </p></div>",
  },
];


function Expertise() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutUs pageTitle="Our Expertise" />
      {Expert.map((member, index) => (
        <Founder
          image={member.image}
          name={member.name}
          title={member.title}
          description={member.description}
          imagePosition={member.pos}
        />
      ))}
      <Footer />
    </Suspense>
  );
}

export default Expertise;
