import useMediaQuery from "@/Hooks/useMediaQuery";
import ActionButton from "@/Shared/ActionButton";
import { SelectedPage } from "@/Shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedbull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1080px)");
  return (
    <>
      <section id="home" className="gap-16 py-10 bg-gray-20 md:h-full md:pb-0">
        {/* Image And Main Header */}
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
          className="items-center justify-center w-5/6 mx-auto md:flex md:h-5/6"
        >
          {/* Main Header */}
          <div className="z-10 mt-32 md:basis-3/5">
            {/* Headings */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="md:-mt-20"
            >
              <div className="relative">
                <div className="before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-1]">
                  <img src={HomePageText} alt="Home Page Text" />
                </div>
              </div>
              <p className="mt-8 text-sm md:text-start">
                Unrivaled Gym. Unparalleled Training Fitness Classes. World
                Class Studios to get the Body Shapes That you Dream of.. Get
                Your Dream Body Now.
              </p>
            </motion.div>
            {/* Actions */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex items-center gap-8 mt-8 md:justify-between"
            >
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
              <AnchorLink
                className="text-sm font-bold underline text-primary-500 hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
              >
                <p>Learn More</p>
              </AnchorLink>
            </motion.div>
          </div>
          {/* Image */}
          <div className="flex justify-center basis-3/5 md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
            <img src={HomePageGraphic} alt="Home Page Graphic" />
          </div>
        </motion.div>

        {/* Sponsors */}
        {isAboveMediumScreens && (
          <div className="h-[150px] w-full bg-primary-100 py-10">
            <div className="w-5/6 mx-auto">
              <div className="flex items-center justify-between w-3/5 gap-8">
                <img src={SponsorRedbull} alt="Sponsor Redbull" />
                <img src={SponsorFortune} alt="Sponsor Fortune" />
                <img src={SponsorForbes} alt="Sponsor Forbes" />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
