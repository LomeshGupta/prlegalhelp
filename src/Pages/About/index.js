import React, { Suspense } from "react";

const AboutUs = React.lazy(() => import("../../Components/Aboutus"));
const AboutData = React.lazy(() => import("../../Components/AboutData"));
const Footer = React.lazy(() => import("../../footer"));
const ServiceSection = React.lazy(() => import("../../Components/ServiceAboutus"));
const Whyus = React.lazy(() => import("../../Components/Whyus"));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AboutUs />
            <AboutData />
            <Whyus />
            <ServiceSection />
            <Footer />
        </Suspense>
    );
}

export default App;
