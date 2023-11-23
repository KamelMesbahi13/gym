import { SelectedPage } from "@/Shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/Shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `w-full mt-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <>
      <section id="contactus" className="w-5/6 pt-24 pb-32 mx-auto">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        >
          {/* Header */}
          <motion.div
            className="md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText>
              <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
            </HText>
            <p className="my-5">
              {" "}
              Congue adipiscing risus commodo placerat. Tellus et in feugiat
              nisl sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
              adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
            </p>
          </motion.div>

          {/* Form And Image */}

          <div className="justify-between gap-8 mt-10 md:flex">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-10 basis-3/5 md:mt-0"
            >
              <form
                target="_blank"
                onSubmit={onSubmit}
                method="POST"
                action="https://formsubmit.co/339c563226fae85e16357d6ed63f1898"
              >
                <input
                  type="text"
                  placeholder="NAME"
                  className={inputStyles}
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-primary-500">
                    {errors.name.type === "required" && "This field is require"}
                    {errors.name.type === "maxLength" &&
                      "Max Length is 100 character"}
                  </p>
                )}

                <input
                  type="text"
                  placeholder="EMAIL"
                  className={inputStyles}
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-primary-500">
                    {errors.email.type === "required" &&
                      "This field is require"}
                    {errors.email.type === "pattern" && "Invalid Email Address"}
                  </p>
                )}

                <textarea
                  placeholder="MESSAGE"
                  className={inputStyles}
                  rows={4}
                  cols={50}
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-primary-500">
                    {errors.message.type === "required" &&
                      "This field is require"}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 char"}
                  </p>
                )}
                <button
                  type="submit"
                  className="px-20 py-3 mt-5 transition duration-500 rounded-lg bg-secondary-500 hover:text-white "
                >
                  SUBMIT
                </button>
              </form>
            </motion.div>
            <motion.div
              className="relative mt-16 basis-2/5 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="md:before:content-evolvetext mb-5 w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                <img
                  src={ContactUsPageGraphic}
                  alt="Contact Us Page Graphic Us"
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ContactUs;
