import React, { Suspense } from "react";

import service1 from "../../assets/images/services-page/service3.jpeg";
import service2 from "../../assets/images/services-page/Subject.png";

// const NavBar = React.lazy(() => import("../../Navbar"));
const AboutUs = React.lazy(() => import("../../Components/Aboutus"));
const Founder = React.lazy(() => import("../../Components/Service"));
const Footer = React.lazy(() => import("../../footer"));

const Expert = [
  {
    image: service1,
    name: "Corporate Law",
    description:
      "<br> <b>Corporate Governance:</b> <br> - Advising on best practices and regulatory compliance. <br> - Guiding on board structures and shareholder rights. <br><br>  <b>Mergers and Acquisitions (M&A):</b> <br> - Assisting throughout transactions and due diligence. <br> - Structuring deals and maximizing value. <br> <br> <b>Securities Regulation:</b> <br> - Providing guidance on laws and compliance. <br> - Navigating regulatory frameworks effectively. <br> <br> At PR Legal Help, our corporate law team delivers exceptional service, providing strategic legal solutions to navigate complexities and achieve objectives with confidence.",
  },
  {
    pos: "left",
    image: service2,
    name: "Civil Litigation & Property Law",

    description:
      "<div> <h4>Contract Disputes:</h4> <p> Our litigators represent clients in contract disputes, breach of contract claims, and enforcement of contractual rights in various industries and sectors. </p> <h4>Property Disputes:</h4> <p> We handle disputes related to real property, including boundary disputes, easement rights, title issues, and disputes between landlords and tenants. </p> <h4>Personal Injury Claims:</h4> <p> Our firm advocates for individuals who have been injured due to negligence or wrongful conduct, seeking compensation for medical expenses, lost wages, and pain and suffering. </p> <h4>Landlord-Tenant Disputes:</h4> <p> We provide legal representation to landlords and tenants in disputes involving lease agreements, eviction proceedings, and landlord-tenant rights and responsibilities. </p></div>",
  },
//   {
//     image: "",
//     name: "Vaibhav Sood",

//     description:
//       "Advocate Vaibhav Sood, esteemed for his expertise in criminal defense, adeptly navigates legal complexities. With precision strategy and compelling courtroom advocacy, he ensures clients rights are vigorously upheld, striving for justice. His meticulous counsel empowers clients, guiding them through challenging legal terrain with confidence and determination.",
//   },
//   {
//     pos: "left",
//     image: "",
//     name: "Hitesh Solanki",

//     description:
//       "Hitesh Solanki, a 2020 law graduate from Guru Gobind Singh Indraprastha University, embarked on his legal journey during the lockdown by pursuing online judicial services classes. Despite parental expectations, his passion for criminal advocacy led him to enroll with the Bar Council of India in 2021. Currently, he passionately practices across all districts and the High Court of Delhi.",
//   },
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
