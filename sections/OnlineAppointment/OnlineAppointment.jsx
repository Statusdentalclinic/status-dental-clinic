"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fade_up_variants } from "@/utils/variants";
// -----------Import MUI components--------------//
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
// ----------Stylisation buttons MUI-----------------//
import { theme } from "@/components/Stylisation_MUI/stylisation_button_MUI";

const OnlineAppointment = () => {
  // -----Translation-----//
  const t = useTranslations("OnlineAppointmentSection");
  // -----Get the path-----//
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  return (
    <>
      <motion.section
        className="flex relative z-20 w-full h-auto sm:h-[50rem] lg:h-[45rem] mb-28 lg:mb-10 mt-10 overflow-hidden lg:overflow-visible"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="flex flex-col lg:flex-row relative z-30 w-full h-full items-center lg:items-end justify-end container-padding">
          <motion.div
            className="flex relative z-50 w-[15rem] xs:w-[18rem] sm:w-[42%] lg:w-[45%] xl:w-[40%] 2xl:w-[34rem] aspect-[3/4] order-2 lg:order-1"
            initial={{ opacity: 0, x: -36, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.68, ease: [0.17, 0.55, 0.55, 1] }}
          >
            <Image
              src="/OnlineAppointment.webp"
              alt="online appointment"
              fill
              className="object-contain object-bottom"
              sizes="(max-width: 479px) 15rem, (max-width: 767px) 18rem, (max-width: 1279px) 45vw, 34rem"
            />
          </motion.div>

          <motion.div
            className="flex flex-col relative z-10 w-full sm:w-[80%] lg:w-[55%] h-auto lg:h-full order-1 lg:order-2 py-10 sm:py-[4.5rem]"
            variants={fade_up_variants}
          >
            {/* Title */}
            <div className="flex flex-col w-full h-auto">
              <p className="blue-text text-center">{t("nameTitle")}</p>
              <h1 className="title-text-xs xs:title-text-m sm:title-text text-center">
                {t("Title1")} <span className="blue-text">{t("Title2")}</span>{" "}
                {t("Title3")}
              </h1>
            </div>
            <div className="hidden lg:flex flex-col w-full h-auto justify-center items-center mt-10">
              <Link href={`/${locale}/appointment`} className="premium-button-shell">
                <ThemeProvider theme={theme}>
                  <Button
                    size="large"
                    color="appointment"
                    variant="outlined"
                    sx={{
                      whiteSpace: "nowrap",
                      borderRadius: 10,
                      fontWeight: "600",
                      fontFamily: "var(--font-montserrat)",
                      borderWidth: 2,
                      borderColor: "#006eff",
                      color: "#006eff",
                    }}
                  >
                    {t("appointment")}
                  </Button>
                </ThemeProvider>
              </Link>
              <p className="font-semibold p-5">{t("call")}</p>
            </div>
          </motion.div>
        </div>
        <div className="flex w-full h-[10rem] sm:h-[12.5rem] absolute bottom-0 z-0 bg-[#006eff]" />
        <div className="flex flex-col lg:hidden absolute bottom-[-5.5rem] w-full h-auto justify-center items-center">
          <Link href={`/${locale}/appointment`} className="premium-button-shell">
            <ThemeProvider theme={theme}>
              <Button
                size="large"
                color="appointment"
                variant="contained"
                sx={{
                  whiteSpace: "nowrap",
                  borderRadius: 10,
                  fontWeight: "600",
                  fontFamily: "var(--font-montserrat)",
                  borderWidth: 2,
                  color: "#ffffff",
                }}
              >
                {t("appointment")}
              </Button>
            </ThemeProvider>
          </Link>
          <p className="w-full text-center font-semibold text-[0.8rem] mt-1">
            {t("call")}
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default OnlineAppointment;
