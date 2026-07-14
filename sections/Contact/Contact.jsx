"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { fade_up_variants, stagger_container_variants } from "@/utils/variants";
// -----------Import MUI components--------------//
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
// ----------Stylisation buttons MUI-----------------//
import { theme } from "@/components/Stylisation_MUI/stylisation_button_MUI";
// -----Import React icons---------//
import { FaViber, FaTelegramPlane } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { BiSolidPhone } from "react-icons/bi";
// --------------Map component---------------------//
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/Map/CustomMap"), {
  ssr: false,
});

const Contact = () => {
  // -----------Translations--------------//
  const t = useTranslations("ContactSection");
  // -----Get the path-----//
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  return (
    <>
      <motion.section
        className="flex w-full h-[75rem] md:h-[70rem] justify-start items-center flex-col"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
      >
        <div className="flex relative flex-col h-auto xl:h-1/2 items-center mx-[1rem]">
          <motion.div
            variants={fade_up_variants}
            className="flex flex-col w-auto max-w-[51rem] h-auto text-center lg:text-left my-10"
          >
            <p className="blue-text">{t("nameTitle")}</p>
            <h2 className="title-text-m sm:title-text">
              {t("Title1")}{" "}
              <span className="blue-text">
                {t("Title2")} {t("Title3")}
              </span>{" "}
              {t("Title4")}
            </h2>
          </motion.div>
          <motion.div
            variants={fade_up_variants}
            custom={0.12}
            className="interactive-card flex flex-col z-30 w-auto sm:w-full h-auto justify-center items-center border-[1px] border-[#006eff18] shadow-lg rounded-lg bg-[#fdfdfd] p-[2rem] md:p-[5rem] mb-2"
          >
            <motion.div
              className="flex flex-col sm:flex-row w-full h-auto justify-between items-start"
              variants={stagger_container_variants}
            >
              {/*Contact us block*/}
              <motion.div variants={fade_up_variants} className="flex flex-col w-auto h-auto">
                <h3 className="font-semibold my-2">{t("nameTitle")}</h3>
                <p className="interactive-card flex justify-start items-start my-2 rounded-md px-2 py-1">
                  <span className="interactive-icon text-[1.5rem] mr-3 blue-text">
                    <FaViber />
                  </span>
                  <span className="interactive-icon text-[1.5rem] mr-3 blue-text">
                    <FaTelegramPlane />
                  </span>
                  <span className="interactive-icon text-[1.5rem] mr-3 blue-text">
                    <BiSolidPhone />
                  </span>{" "}
                  066 766 88 19
                </p>
                <p className="interactive-card flex justify-start items-start my-2 rounded-md px-2 py-1">
                  <span className="interactive-icon text-[1.5rem] mr-3 blue-text">
                    <FaViber />
                  </span>
                  <span className="interactive-icon text-[1.5rem] mr-3 blue-text">
                    <FaTelegramPlane />
                  </span>
                  <span className="interactive-icon text-[1.5rem] mr-3 blue-text">
                    <BiSolidPhone />
                  </span>{" "}
                  063 766 88 19
                </p>
              </motion.div>
              {/* Time block*/}
              <motion.div variants={fade_up_variants} className="flex flex-col w-auto h-auto mb-4 mt-0">
                <h3 className="font-semibold  my-2">{t("Time.title")}</h3>
                <p className="my-1">{t("Time.Mon")} | 9:00 - 21:00</p>
                <div className="flex">
                  <span className="text-[2.5rem] m-2 ml-0 blue-text">
                    <MdOutlineAccessTime />
                  </span>
                  <div className="flex flex-col">
                    <p className="my-1">{t("Time.Sat")} | 9:00 - 15:00</p>
                    <p className="my-1">
                      {t("Time.Sun")} | {t("Time.By appointment")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div className="flex flex-col sm:flex-row w-full h-auto justify-between items-start" variants={stagger_container_variants}>
              {/* Address block */}
              <motion.div variants={fade_up_variants} className="flex flex-col w-auto h-auto">
                <h3 className="font-semibold  my-2">{t("Address.Title")}</h3>
                <p className="flex max-w-[20rem]">{t("Address.Address")}</p>
              </motion.div>
              {/* Appointment block */}
              <motion.div variants={fade_up_variants} className="flex flex-col w-auto h-auto items-center">
                <h3 className="font-semibold  my-2">
                  {t("Appointment.Title")}
                </h3>
                <div className="flex flex-col justify-end items-center">
                  <Link href={`/${locale}/appointment`} className="premium-button-shell">
                    <ThemeProvider theme={theme}>
                      <Button
                        size="large"
                        color="appointment"
                        variant="contained"
                        sx={{
                          whiteSpace: "nowrap",
                          borderRadius: 10,
                          fontWeight: "semibold",
                          fontFamily: "var(--font-montserrat)",
                        }}
                      >
                        {t("Appointment.Appointment")}
                      </Button>
                    </ThemeProvider>
                  </Link>
                  <p className="w-48 font-semibold text-[0.8rem] mt-1">
                    {t("Appointment.call")}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="flex w-full h-1/2 min-h-[25rem] bg-gray-200"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.58, ease: [0.17, 0.55, 0.55, 1] }}
        >
          <MapComponent position={[50.389, 30.6258]} />
        </motion.div>
      </motion.section>
    </>
  );
};

export default Contact;
