import React, { Suspense } from "react";

const AboutUs = React.lazy(() => import("../../Components/Aboutus"));
const Footer = React.lazy(() => import("../../footer"));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AboutUs />
            <Footer />
        </Suspense>
    );
}

export default App;
