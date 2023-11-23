import { useState, useEffect } from "react";
import Navbar from "./Components/Scences/Navbar/Navbar";
import { SelectedPage } from "@/Shared/types";
import Home from "./Components/Scences/Home/Home";
import Benefits from "./Components/Scences/Benefits/Benefits";
import OurClasses from "./Components/Scences/OurClasses/OurClasses";
import ContactUs from "./Components/Scences/ContactUs/ContactUs";
import Footer from "./Components/Scences/Footer/Footer";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="app bg-gray-20">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage} />
        <Benefits setSelectedPage={setSelectedPage} />
        <OurClasses setSelectedPage={setSelectedPage} />
        <ContactUs setSelectedPage={setSelectedPage} />
        <Footer />
      </div>
    </>
  );
};

export default App;
