"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { fade_up_variants } from "@/utils/variants";
// -----------Import MUI components--------------//
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
// ----------Stylisation buttons MUI-----------------//
import { theme } from "@/components/Stylisation_MUI/stylisation_button_MUI";
// -----------Import React icons--------------//
import { BsArrowUpRightCircle } from "react-icons/bs";
// -----------Import Iternal Component--------------//
import { Slider } from "@/components/Compare_Image/Slider";

const Cases = () => {
  // -----Translation-----//
  const t = useTranslations("CasesSection");
  // -----Get the path-----//
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  return (
    <>
      <motion.section
        className="flex flex-col w-full h-auto py-[2rem] container-padding"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
      >
        <div className="flex flex-col lg:flex-row w-full h-full justify-center items-center lg:justify-start lg:items-center lg:mt-10">
          <motion.div variants={fade_up_variants} className="flex flex-col w-full sm:w-[80%] lg:w-1/2 h-full lg:mr-5">
            <p className="blue-text text-center lg:text-start">
              {t("nameTitle")}
            </p>
            <h2 className="title-text-m sm:title-text text-center lg:text-start">
              {t("Title1")} <span className="blue-text">{t("Title2")}</span>{" "}
              {t("Title3")}
            </h2>
            <p className="font-medium text-center lg:text-start mt-10 mb-10 lg:mb-0">
              {t("Description")}
            </p>
          </motion.div>
          <motion.div
            className="interactive-card flex w-full sm:w-[80%] lg:w-1/2 h-full rounded-md overflow-hidden lg:ml-5"
            initial={{ opacity: 0, x: 34, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.62, ease: [0.17, 0.55, 0.55, 1] }}
          >
            <Slider Before="/Before.webp" After="/After.webp" />
          </motion.div>
        </div>
        <div className="flex w-full justify-center lg:justify-start items-start mt-10 lg:mt-0">
          <Link
            href={`/${locale}/cases`}
            className="premium-button-shell flex justify-start items-center my-5 lg:my-10"
            aria-label={t("MoreLong")}
          >
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
                {t("More")}
                <span className="interactive-icon text-[1.5rem] ml-3">
                  <BsArrowUpRightCircle />
                </span>
              </Button>
            </ThemeProvider>
          </Link>
        </div>
      </motion.section>
    </>
  );
};

export default Cases;
