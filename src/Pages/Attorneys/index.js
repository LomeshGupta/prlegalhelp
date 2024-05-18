import React, { Suspense } from "react";

import founimg from "../../assets/images/professionals/founder.png";
import founimg2 from "../../assets/images/professionals/founder2.png";
import Team from "../../Components/Team";
import member1 from "../../assets/images/professionals/member1.png";
import member2 from "../../assets/images/professionals/member2.png";
import member3 from "../../assets/images/professionals/member3.jpg";
import member4 from "../../assets/images/professionals/member4.jpg";

const AboutUs = React.lazy(() => import("../../Components/Aboutus"));
const Founder = React.lazy(() => import("../../Components/Founder"));
const Footer = React.lazy(() => import("../../footer"));



const founderData = {
    image: founimg,
    name: 'Poonam Rimal',
    title: 'Senior Attorney (Founder)',
    description: `Advocate Poonam Rimal excels in advising and representing clients in a diverse range of legal areas, including Commercial Disputes, Civil, Criminal, Debt Recovery, Arbitration, Property Disputes, pharmaceuticals and healthcare, start-ups, e-Commerce, Matrimonial Disputes, Consumer Laws, Banking Regulations, and more.

    With a legal career spanning over a decade, her clear purpose to provide reliable, practical and full legal services to our client by investing in them through a mix of integrity, intelligence, energy and strategy.
    
    She holds a strong background in managing high-stakes legal matters, having represented clients in cases with a net worth exceeding INR 100 crores.`,
};

const founderData2 = {
    image: founimg2,
    name: 'Raju Chatterjee',
    title: 'Senior Attorney (Co-Founder)',
    description: `Raju Chatterjee sounds like an impressive individual! His combination of an MBA in marketing and an LLB suggests a diverse skill set, blending business acumen with legal knowledge, which can be invaluable in the world of events and communications. It’s particularly impressive that he’s from a middle-class background but has managed to carve out a successful path for himself as an entrepreneur.

    Given his background and the skills he's acquired, it’s understandable that he’s aiming high to achieve his goals. With a foundation in operations and a growing focus on client servicing, Raju seems to have a well-rounded approach to running his business, Puranshi Events and Communications. His determination and self-made success story likely serve as inspiration to many aspiring entrepreneurs.`,
};

const teamMembers = [
    {
      image: member1,
      name: 'Rishika Dogra',
      title: 'Associate advocate',
      description: 'Advocate Rishika have  extensive experience in handling corporate and civil cases before various Courts & Tribunals including Delhi High Court & Supreme Court on matters relating to Arbitration Law, Company Law, Civil Law, Contractual issues, intellectual property and Consumer disputes, companies law, and provide legal assistance  to  women entrepreneur start-ups.',
    },
    {
      image: member2,
      name: 'Advocate Megha',
      title: 'Associate Advocate',
      description: 'Advocate Megha, skilled in diverse legal arenas, navigates Courts like Delhi High Court and Supreme Court. Proficient in Arbitration, Company, Civil, Contract, IP, and Consumer Law, she champions women entrepreneurs, providing bespoke legal aid. Ensuring their triumph over legal hurdles, she fosters their growth and prosperity in business ventures.',
    },
    {
      image: member3,
      name: 'Vaibhav Sood',
      title: 'Associate Advocate',
      description: 'Advocate Vaibhav Sood, esteemed for his expertise in criminal defense, adeptly navigates legal complexities. With precision strategy and compelling courtroom advocacy, he ensures clients rights are vigorously upheld, striving for justice. His meticulous counsel empowers clients, guiding them through challenging legal terrain with confidence and determination.',
    },
    {
      image: member4,
      name: 'Hitesh Solanki',
      title: 'Associate Advocate',
      description: 'Hitesh Solanki, a 2020 law graduate from Guru Gobind Singh Indraprastha University, embarked on his legal journey during the lockdown by pursuing online judicial services classes. Despite parental expectations, his passion for criminal advocacy led him to enroll with the Bar Council of India in 2021. Currently, he passionately practices across all districts and the High Court of Delhi.',
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
            <Footer />
        </Suspense>
    );
}

export default App;
