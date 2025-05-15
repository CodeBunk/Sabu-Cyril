import React, { useEffect, useState } from "react";
// import image from "@/assets/images/Contactbg.png";
import { useFormik } from "formik";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { PUBLIC, SERVICE, TEMPALTE } from "@/config";
import toast from "react-hot-toast";

// Define the Zod schema for form validation
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  contactNumber: z
    .string()
    .min(10, "Contact number must be at least 10 digits")
    .max(15, "Contact number must be less than 15 digits"),
  organization: z.string().optional(),
  description: z.string().min(10, "purpose must be filled"),
});

const TemplatName = "template_rn09wxb";
const Contact = () => {
  useEffect(() => emailjs.init(PUBLIC), []);
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contactNumber: "",
      organization: "",
      description: "",
    },
    validate: (values) => {
      const validation = contactSchema.safeParse(values);
      if (!validation.success) {
        // Format errors to match Formik's error format
        const errors: { [key: string]: string } = {};
        validation.error.errors.forEach((error) => {
          errors[error.path[0] as string] = error.message;
        });
        return errors;
      }
      return {};
    },
    onSubmit: (values) => {
      // console.log("Form Submitted: ", values);

      HandleSubmit(values);
    },
  });

  const HandleSubmit = async (values: any) => {
    console.log("Form Submitted: ", values);
    let serviceId = SERVICE;
    let templateId = TEMPALTE;
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, values);
      toast.success("Thank you for submitting the Request!");
      formik.resetForm();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className=" pt-10 py-10 text-center md:h-full max-w-7xl mx-auto  min-h-screen">

      <div className="font-menseal   font-semibold  tracking-wider  text-white text-5xl text-venter  relative">
        Contact
      </div>
      <div
        id="#contact"
        className="md:grid md:grid-cols-2 flex flex-col gap-10  font-poppins  items-center  pt-10 h-auto "
      >
        <div className="w-full md:pl-10 px-10 ">
          <div className=" font-gilroy md:text-4xl  tracking-wide text-lg leading-relaxed">
            Ready to create cinematic magic? Contact us today to bring your vision to life.
          </div>
        </div>

        <div className="w-full relative md:h-auto h-auto md:pt-10 ">
          {/* <img className="" src={image} alt="Contact Background" /> */}
          <div className="md:absolue sm:top-20 top-28 w-full right-0 z-5 h-full z-10 opacity-100 bg-gray bg-opacity-30  p-10  rounded-3xl  ">
            <form
              onSubmit={formik.handleSubmit}
              className="space-y-5 flex flex-col z-10 justify-center text-left px-1 h- "
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium font-poppins px-2 "
                >
                  Name
                </label>
                <div className="p-0.5 bg-gradient-to-r h-10 flex mt-1 to-primary/40 from-primary/50 rounded-lg ">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className="w-full font-poppins px-2 text-base h-9 rounded-md focus:outline-none bg-[#000000] opacity-100 bg-blend-none"
                  />
                </div>
                {formik.touched.name && formik.errors.name && (
                  <div className=" text-red font-poppins  text-sm mt-1">
                    {formik.errors.name}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium font-poppins px-2 "
                >
                  Email
                </label>
                <div className="p-0.5 bg-gradient-to-r h-10 flex mt-1 from-primary/40 to-primary/50 rounded-lg ">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="w-full font-poppins px-2 text-base h-9 rounded-md focus:outline-none bg-[#000000] opacity-100 bg-blend-none"
                  />
                </div>
                {formik.touched.email && formik.errors.email && (
                  <div className=" text-red font-poppins  text-sm mt-1">
                    {formik.errors.email}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="contactNumber"
                  className="block text-sm font-medium font-poppins px-2 "
                >
                  Contact Number
                </label>
                <div className="p-0.5 bg-gradient-to-r h-10 flex mt-1 to-primary/40 from-primary/50 rounded-lg ">
                  <input
                    id="contactNumber"
                    name="contactNumber"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.contactNumber}
                    className="w-full font-poppins px-2 text-base h-9 rounded-md focus:outline-none bg-[#000000] opacity-100 bg-blend-none"
                  />
                </div>
                {formik.touched.contactNumber && formik.errors.contactNumber && (
                  <div className=" text-red font-poppins  text-sm mt-1">
                    {formik.errors.contactNumber}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm font-medium font-poppins px-2 "
                >
                  Company Name (optional)
                </label>
                <div className="p-0.5 bg-gradient-to-r h-10 flex mt-1 from-primary/40 to-primary/50 rounded-lg ">
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.organization}
                    className="w-full font-poppins px-2 text-base h-9 rounded-md focus:outline-none bg-[#000000] opacity-100 bg-blend-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium font-poppins px-2 whitespace-nowrap "
                >
                  What would you like to discuss ?
                </label>
                <div className="p-0.5 bg-gradient-to-r h-20 to-primary/40 from-primary/50 rounded-lg mt-1 ">
                  <textarea
                    id="description"
                    name="description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                    className="w-full font-poppins px-2 text-base h-full focus:outline-none p-1 rounded-md bg-[#000000] opacity-100 bg-blend-none"
                    rows={3}
                  ></textarea>
                </div>
                {formik.touched.description && formik.errors.description && (
                  <div className=" text-red font-poppins  text-sm mt-1">
                    {formik.errors.description}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`" flex items-center  justify-center w-20 bg-gradient-to-r text-base px-3 py-2 rounded-md font-poppins  transition-all duration-400  from-primary/80 to-primary/60 " ${loading
                    ? "opacity-50 "
                    : " hover:-translate-y-0.5 hover:scale-105 "
                    }`}
                >
                  {loading ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className=" animate-spin "
                    >
                      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                      <path d="M21 3v5h-5" />
                    </svg>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
