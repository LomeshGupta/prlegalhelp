import React, { Suspense } from "react";

// const NavBar = React.lazy(() => import("../../Navbar"));
const AboutUs = React.lazy(() => import("../../Components/Aboutus"));
const ContactForm = React.lazy(() => import("../../Components/Contact"));
const Footer = React.lazy(() => import("../../footer"));

function Contact() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AboutUs pageTitle="Contact Us" />
            <ContactForm />
            <Footer />
        </Suspense>
    );
}

export default Contact;
