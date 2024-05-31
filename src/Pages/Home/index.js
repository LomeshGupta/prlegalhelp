import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import img from "../../assets/prlegal.png";

// Import your components
const Home = React.lazy(() => import("../../Components/Home"));
const BoxSection = React.lazy(() => import("../../Components/Secondsection"));
const TestimonialSection = React.lazy(() => import("../../Components/testimonals"));
const SoftwareExpertiseSection = React.lazy(() => import("../../Components/SoftwareExpertise"));
const Home2 = React.lazy(() => import("../../Components/ourservice"));
const Footer = React.lazy(() => import("../../footer"));
const Whyus = React.lazy(() => import("../../Components/Whyus"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PR LEGAL HELP</title>
        <meta name="description" content="Best LEGAL Advisor Around PR LEGAL HELP is a dedicated supplier of legal service to legal professionals & Firms in Ireland, UK, Dubai, USA headquartered in Delhi, India, with a focus on delivering exceptional outsourcing services to our clients." />
        <meta property="og:title" content="PR LEGAL HELP" />
        <meta property="og:description" content="Best LEGAL Advisor Around PR LEGAL HELP is a dedicated supplier of legal service to legal professionals & Firms in Ireland, UK, Dubai, USA headquartered in Delhi, India, with a focus on delivering exceptional outsourcing services to our clients." />
        <meta property="og:image" content={img} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      <Home />
      <BoxSection />
      <Whyus />
      <SoftwareExpertiseSection />
      <TestimonialSection />
      <Home2 />
      <Footer />
    </Suspense>
  );
}

export default App;
