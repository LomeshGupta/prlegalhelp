import React, { Suspense } from "react";

import founimg from "../../assets/images/professionals/founder.png";
import founimg2 from "../../assets/images/professionals/founder2.png";
import Team from "../../Components/Team";
import member1 from "../../assets/images/professionals/member1.png";
import member2 from "../../assets/images/professionals/member2.png";
import member3 from "../../assets/images/professionals/member3.jpg";
import member4 from "../../assets/images/professionals/member4.jpg";
import member5 from "../../assets/images/professionals/member5.jpg";
import member6 from "../../assets/images/professionals/member6.jpeg";
import member7 from "../../assets/images/professionals/member7.jpeg";

const AboutUs = React.lazy(() => import("../../Components/Aboutus"));
const Founder = React.lazy(() => import("../../Components/Founder"));
const Footer = React.lazy(() => import("../../footer"));

const founderData = {
  image: founimg,
  name: "Poonam Rimal",
  title: "Senior Attorney (Founder)",
  description: `Advocate Poonam Rimal excels in advising and representing clients in a diverse range of legal areas, including Commercial Disputes, Civil, Criminal, Debt Recovery, Arbitration, Property Disputes, pharmaceuticals and healthcare, start-ups, e-Commerce, Matrimonial Disputes, Consumer Laws, Banking Regulations, and more.

    With a legal career spanning over a decade, her clear purpose to provide reliable, practical and full legal services to our client by investing in them through a mix of integrity, intelligence, energy and strategy.
    
    She holds a strong background in managing high-stakes legal matters, having represented clients in cases with a net worth exceeding INR 100 crores.`,
};

const founderData2 = {
  image: founimg2,
  name: "Raju Chatterjee",
  title: "Senior Attorney (Co-Founder)",
  description: `Raju Chatterjee, an accomplished entrepreneur, embodies resilience and talent. With an MBA in Marketing and an LLB, he offers a unique fusion of business acumen and legal expertise, enhancing his role as a consultant. His strategic marketing skills complement his legal understanding, ensuring clients receive both legal counsel and business insights. Raju's journey from modest beginnings to entrepreneurial success inspires aspiring business owners. His story underscores the importance of dedication, continuous learning, and skill integration in achieving remarkable feats. Raju's expertise and client-centric approach distinguish him in the legal consultancy realm, exemplifying the potential for success through perseverance and excellence.`,
};

const teamMembers = [
  {
    image: member7,
    name: "Advocate Poonam Sharma",
    title: "Senior Associate and Family wellness Attorney",
    description:
      "Advocate Poonam Sharma, a distinguished family wellness attorney, excels in divorce, child custody, domestic violence, and property disputes. She prioritizes amicable resolutions with minimal emotional distress, using mediation and collaborative law. Advocate Poonam also actively participates in workshops, advocating for the rights of children and domestic violence victims.",
  },
  {
    image: member6,
    name: "Advocate Hiteshi Kakkar",
    title: "Associate Advocate",
    description:
      "Advocate Hiteshi Kakkar is a versatile legal professional with 5-6 years of extensive practice in High Courts, Tribunals, and the Supreme Court of India. Her expertise spans multiple legal areas, providing comprehensive solutions. Committed to high-quality representation and positive outcomes, her dedication to justice and meticulous attention to detail make her a trusted advocate.",
  },
  {
    image: member3,
    name: "Vaibhav Sood",
    title: "Associate Advocate",
    description:
      "Advocate Vaibhav Sood is esteemed for his expertise in criminal defense, adeptly navigating legal complexities. With a precision strategy and compelling courtroom advocacy, he ensures clients rights are vigorously upheld, striving for justice. His meticulous counsel empowers clients, guiding them through challenging legal terrain with confidence and determination.",
  },
  {
    image: member5,
    name: "Advocate Mehul Malhotra",
    title: "Associate Advocate",
    description:
      "Advocate Mehul Malhotra practices in the Delhi High Court with extensive experience in civil, criminal, divorce, maintenance, accident claims, and debt recovery cases. He handles Writ Petitions and Special Leave Petitions, delivering exceptional legal services for favorable outcomes. Advocate Mehul is dedicated to justice and advocating for his clients.",
  },
  {
    image: member1,
    name: "Rishika Dogra",
    title: "Associate Advocate",
    description:
      "Advocate Rishika has extensive experience in handling corporate and civil cases before various Courts & Tribunals including Delhi High Court & Supreme Court. She deals with matters relating to Arbitration Law, Company Law, Civil Law, Contractual issues, intellectual property, and Consumer disputes. Advocate Rishika also provides legal assistance to women entrepreneur start-ups.",
  },
  {
    image: member2,
    name: "Advocate Megha",
    title: "Associate Advocate",
    description:
      "Advocate Megha, skilled in diverse legal arenas, navigates Courts like Delhi High Court and Supreme Court. Proficient in Arbitration, Company, Civil, Contract, IP, and Consumer Law, she champions women entrepreneurs, providing bespoke legal aid. Ensuring their triumph over legal hurdles, she fosters their growth and prosperity in business ventures.",
  },
  {
    image: member4,
    name: "Hitesh Solanki",
    title: "Associate Advocate",
    description:
      "Hitesh Solanki, a 2020 law graduate from Guru Gobind Singh Indraprastha University, embarked on his legal journey during the lockdown by pursuing online judicial services classes. Despite parental expectations, his passion for criminal advocacy led him to enroll with the Bar Council of India in 2021. Currently, he passionately practices across all districts and the High Court of Delhi.",
  },
];

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutUs pageTitle="Attorneys" />
      <Founder
        image={founderData.image}
        name={founderData.name}
        title={founderData.title}
        description={founderData.description}
        imagePosition="left"
      />
      <Founder
        image={founderData2.image}
        name={founderData2.name}
        title={founderData2.title}
        description={founderData2.description}
        imagePosition="right"
      />
      <Team members={teamMembers} />
      <div style={{ paddingBottom: "30px" }} />
      <Footer />
    </Suspense>
  );
}

export default App;
