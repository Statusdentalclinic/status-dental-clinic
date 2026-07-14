"use client";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fade_up_variants,
  service_card_variants,
  stagger_container_variants,
} from "@/utils/variants";
// -----------Import MUI components--------------//
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
// ----------Stylisation buttons MUI-----------------//
import { theme } from "@/components/Stylisation_MUI/stylisation_button_MUI";
// -----------Import React icons--------------//
import { BsArrowUpRightCircle } from "react-icons/bs";

const Services = () => {
  const [hasMounted, setHasMounted] = useState(false);
  // -----MediaQuery-----//
  const isMobile = useMediaQuery({ maxWidth: 639 }); // <sm
  const isDesktop = useMediaQuery({ minWidth: 640 }); // >=sm

  // -----Translation-----//
  const t = useTranslations("ServiceSection");
  // -----Get the path-----//
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  if (isMobile) {
    return (
      <section className="flex w-full h-full justify-start items-center flex-col py-[2rem] container-padding">
        <motion.div
          className="flex flex-col w-full h-auto justify-center items-center m-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fade_up_variants}
        >
          <p className="blue-text">{t("nameTitle")}</p>
          <h2 className="title-text-m text-center">
            {t("Title1")} <span className="blue-text">{t("Title2")}</span>{" "}
            {t("Title3")}
          </h2>
        </motion.div>

        <motion.div className="flex flex-col" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger_container_variants}>
        <motion.div variants={service_card_variants} className="interactive-card flex w-[19rem] h-[4.5rem] justify-start items-center shadow-md border-t border-[1px] rounded-lg py-2 px-3 my-3 mx-auto">
          <div className="flex relative w-[3.125rem] h-[3.25rem]">
            <Image
              src="/diagnostic.svg"
              alt="diagnostic"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <h3 className="font-bold text-[1.75rem] ml-3">{t("Diagnostic")}</h3>
        </motion.div>
        <motion.div variants={service_card_variants} className="interactive-card flex w-[19rem] h-[4.5rem] justify-start items-center shadow-md border-t border-[1px] rounded-lg py-2 px-3 my-3 mx-auto">
          <div className="flex relative w-[3.125rem] h-[3.25rem]">
            <Image
              src="/prevention.svg"
              alt="prevention"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <h3 className="font-bold text-[1.75rem] ml-3">{t("Preventive")}</h3>
        </motion.div>
        <motion.div variants={service_card_variants} className="interactive-card flex w-[19rem] h-[4.5rem] justify-start items-center shadow-md border-t border-[1px] rounded-lg py-2 px-3 my-3 mx-auto">
          <div className="flex relative w-[3.125rem] h-[3.25rem]">
            <Image
              src="/orthopedics.svg"
              alt="orthopedics"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <h3 className="font-bold text-[1.75rem] ml-3">{t("Orthopedics")}</h3>
        </motion.div>
        <motion.div variants={service_card_variants} className="interactive-card flex w-[19rem] h-[4.5rem] justify-start items-center shadow-md border-t border-[1px] rounded-lg py-2 px-3 my-3 mx-auto">
          <div className="flex relative w-[3.125rem] h-[3.25rem]">
            <Image
              src="/orthodontics.svg"
              alt="orthodontics"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <h3 className="font-bold text-[1.75rem] ml-3">{t("Orthodontics")}</h3>
        </motion.div>
        <motion.div variants={service_card_variants} className="interactive-card flex w-[19rem] h-[4.5rem] justify-start items-center shadow-md border-t border-[1px] rounded-lg py-2 px-3 my-3 mx-auto">
          <div className="flex relative w-[3.125rem] h-[3.25rem]">
            <Image
              src="/Surgery.svg"
              alt="surgery"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <h3 className="font-bold text-[1.75rem] ml-3">{t("Surgery")}</h3>
        </motion.div>
        <motion.div variants={service_card_variants} className="interactive-card flex w-[19rem] h-[4.5rem] justify-start items-center shadow-md border-t border-[1px] rounded-lg py-2 px-3 my-3 mx-auto">
          <div className="flex relative w-[3.125rem] h-[3.25rem]">
            <Image
              src="/Implant.svg"
              alt="implants"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <h3 className="font-bold text-[1.75rem] ml-3">{t("Implantation")}</h3>
        </motion.div>
        </motion.div>
        <Link
          href={`/${locale}/service`}
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
      </section>
    );
  }

  if (isDesktop) {
    return (
      <section className="flex w-full h-full lg:h-[55rem] justify-start items-center flex-col py-[2rem] px-[1rem] lg:px-[2rem] xl:px-[10rem] 2xl:px-[20rem]">
        <motion.div
          className="flex flex-col w-full sm:w-[36.5rem] h-auto justify-center items-center m-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fade_up_variants}
        >
          <p className="blue-text">{t("nameTitle")}</p>
          <h2 className="title-text-m sm:title-text text-center">
            {t("Title1")} <span className="blue-text">{t("Title2")}</span>{" "}
            {t("Title3")}
          </h2>
        </motion.div>
        <div className="flex w-full h-full lg:bg-none bg-[url('/bg-tooth.webp')] bg-no-repeat bg-contain bg-center">
          <div className="flex flex-col w-1/2 lg:w-1/3 h-full justify-start p-5">
            <motion.div variants={fade_up_variants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className="interactive-card flex flex-col w-full h-[10rem] my-5 justify-start rounded-md p-2">
              <div className="flex w-full h-auto justify-end my-2">
                <h3 className="font-bold text-[1.5rem] lg:text-[1.75rem] mr-3">
                  {t("Diagnostic")}
                </h3>
                <div className="flex relative w-[3.125rem] h-[3.25rem]">
                  <Image
                    src="/diagnostic.svg"
                    alt="diagnostic"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-right">{t("DiagnosticDescription")}</p>
            </motion.div>
            <motion.div variants={fade_up_variants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className="interactive-card flex flex-col w-full h-[10rem] my-5 justify-start rounded-md p-2">
              <div className="flex w-full h-auto justify-end my-2">
                <h3 className="font-bold text-[1.5rem] lg:text-[1.75rem] mr-3">
                  {t("Preventive")}
                </h3>
                <div className="flex relative min-w-[3.125rem] w-[3.125rem] h-[3.25rem]">
                  <Image
                    src="/prevention.svg"
                    alt="prevention"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-right">{t("PreventiveDescription")}</p>
            </motion.div>
            <motion.div variants={fade_up_variants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className="interactive-card flex flex-col w-full h-[10rem] my-5 justify-start rounded-md p-2">
              <div className="flex w-full h-auto justify-end my-2">
                <h3 className="font-bold text-[1.5rem] lg:text-[1.75rem] mr-3">
                  {t("Orthopedics")}
                </h3>
                <div className="flex relative w-[3.125rem] h-[3.25rem]">
                  <Image
                    src="/orthopedics.svg"
                    alt="orthopedics"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-right">{t("OrthopedicsDescription")}</p>
            </motion.div>
          </div>
          <motion.div className="hidden lg:flex flex-col w-1/3 h-full justify-end items-center p-5" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.17, 0.55, 0.55, 1] }}>
            <Image
              src="/ServiceTooth.webp"
              alt="tooth"
              width={430}
              height={420}
              className="object-cover my-auto"
            />

            <Link
              href={`/${locale}/service`}
              className="premium-button-shell hidden md:flex justify-start items-center my-5 lg:my-10"
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
          </motion.div>
          <div className="flex flex-col w-1/2 lg:w-1/3 h-full justify-start p-5">
            <motion.div variants={fade_up_variants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className="interactive-card flex flex-col w-full h-[10rem] my-5 justify-start rounded-md p-2">
              <div className="flex w-full h-auto justify-start my-2">
                <div className="flex relative w-[3.125rem] h-[3.25rem]">
                  <Image
                    src="/orthodontics.svg"
                    alt="orthodontics"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-[1.5rem] lg:text-[1.75rem] ml-3">
                  {t("Orthodontics")}
                </h3>
              </div>
              <p className="text-left">{t("OrthodonticsDescription")}</p>
            </motion.div>
            <motion.div variants={fade_up_variants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className="interactive-card flex flex-col w-full h-[10rem] my-5 justify-start end rounded-md p-2">
              <div className="flex w-full h-auto justify-start my-2">
                <div className="flex relative w-[3.125rem] h-[3.25rem]">
                  <Image
                    src="/Surgery.svg"
                    alt="surgery"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-[1.5rem] lg:text-[1.75rem] ml-3">
                  {t("Surgery")}
                </h3>
              </div>
              <p className="text-left">{t("SurgeryDescription")}</p>
            </motion.div>
            <motion.div variants={fade_up_variants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className="interactive-card flex flex-col w-full h-[10rem] my-5 justify-start end rounded-md p-2">
              <div className="flex w-full h-auto justify-start my-2">
                <div className="flex relative w-[3.125rem] h-[3.25rem]">
                  <Image
                    src="/Implant.svg"
                    alt="implant"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-[1.5rem] lg:text-[1.75rem] ml-3">
                  {t("Implantation")}
                </h3>
              </div>
              <p className="text-left">{t("ImplantationDescription")}</p>
            </motion.div>
          </div>
        </div>
        <div className="lg:hidden flex w-full h-auto items-center justify-center">
          <Link
            href={`/${locale}/service`}
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
      </section>
    );
  }

  return null;
};

export default Services;
