import React, { Suspense } from "react";

// const NavBar = React.lazy(() => import("../../Navbar"));
const Home = React.lazy(() => import("../../Components/Home"));
const BoxSection = React.lazy(() => import("../../Components/Secondsection"));
const TestimonialSection = React.lazy(() =>
  import("../../Components/testimonals")
);
// const BlogSlideshow = React.lazy(() => import("../../Components/Blogs"));
const SoftwareExpertiseSection = React.lazy(() =>
  import("../../Components/SoftwareExpertise")
);
const Home2 = React.lazy(() => import("../../Components/ourservice"));
const Footer = React.lazy(() => import("../../footer"));
const Whyus = React.lazy(() => import("../../Components/Whyus"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
