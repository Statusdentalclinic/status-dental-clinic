"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fade_in_variants, fade_up_variants } from "@/utils/variants";
// -----------Import MUI components--------------//
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
// ----------Stylisation buttons MUI-----------------//
import { theme } from "@/components/Stylisation_MUI/stylisation_button_MUI";
// -----------Import React icons--------------//
import { FaStar } from "react-icons/fa";
// -----------Import Iternal Component--------------//
import Services from "@/sections/Services/Services";
import Team from "@/sections/Team/Team";
import Cases from "@/sections/Cases/Cases";
import About from "@/sections/About/About";
import Testimonials from "@/sections/Testimonials/Testimonials";
import Contact from "@/sections/Contact/Contact";
import Advantages from "@/sections/Advantages/Advantages";

export default function HomePage() {
  // -----Translations--------//
  const t = useTranslations("Home_page");
  // -----Get the path-----//
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  return (
    <>
      <section className="flex relative flex-col md:flex-row w-full h-auto md:h-[40rem] items-center min-h-[35rem] mt-[6rem] container-padding soft-blue-surface overflow-hidden">
        <motion.div
          className="flex flex-col w-full md:w-1/2 justify-end md:pr-10"
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fade_up_variants}
            custom={0.05}
            className="blue-text text-center md:text-start mt-3"
          >
            {t("mainSection.nameTitle")}
          </motion.p>
          <motion.h1
            variants={fade_up_variants}
            custom={0.14}
            className="title-text-m sm:title-text my-3 text-center md:text-start"
          >
            {t("mainSection.Title1")}{" "}
            <span className="blue-text">{t("mainSection.Title2")}</span>{" "}
            {t("mainSection.Title3")}
          </motion.h1>
          <motion.p
            variants={fade_up_variants}
            custom={0.23}
            className="text-[0.8rem] sm:text-[1rem] text-center md:text-start my-3"
          >
            {t("mainSection.Description")}
          </motion.p>
          <motion.div
            variants={fade_up_variants}
            custom={0.32}
            className="hidden md:flex flex-col justify-center items-start my-5 lg:my-10"
          >
            <Link
              href={`/${locale}/appointment`}
              className="premium-button-shell"
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
                  {t("appointment")}
                </Button>
              </ThemeProvider>
            </Link>
            <p className="font-semibold mt-5">{t("call")}</p>
          </motion.div>
          {/* <p className="flex flex-wrap text-[0.8rem] sm:text-[1rem] items-center justify-center md:justify-start my-5">
            {t("mainSection.google1")}
            <span className="flex mx-2 text-[#FF9800]">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </span>
            {t("mainSection.google2")}
          </p> */}
        </motion.div>
        {/* Main image */}

        <motion.div
          className="flex flex-col w-full md:w-1/2 h-full justify-end bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover"
          initial="hidden"
          animate="visible"
          variants={fade_in_variants}
          custom={0.2}
        >
          <motion.div
            className="flex relative w-full h-[25rem] sm:h-[35rem] z-10 md:pl-10"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.28, ease: [0.17, 0.55, 0.55, 1] }}
          >
            <Image
              src="/Main.webp"
              alt="main doctor"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>

        {/* <div className="flex md:hidden w-screen h-[14rem] absolute bottom-[130px] left-0 z-0 bg-[#006eff]" /> */}
        <div className="flex flex-col md:hidden justify-center items-center mx-auto my-5 lg:my-10">
          <Link href={`/${locale}/appointment`} className="premium-button-shell">
            <ThemeProvider theme={theme}>
              <Button
                size="large"
                color="appointment"
                variant="contained"
                sx={{
                  my: 3,
                  whiteSpace: "nowrap",
                  borderRadius: 10,
                  fontWeight: "600",
                  fontFamily: "var(--font-montserrat)",
                  borderWidth: 2,
                  borderColor: "#006eff",
                  color: "#fff",
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
      </section>
      {/* ----------Advantages Section---------- */}
      <Advantages />
      {/* ----------Services Section---------- */}
      <Services />
      {/* ----------Team Section---------- */}
      <Team />
      {/* ----------Cases Section---------- */}
      <Cases />
      {/* ----------About Section---------- */}
      <About />
      {/* ----------Testimonials Section---------- */}
      <Testimonials />
      {/* ----------Contact Section---------- */}
      <Contact />
    </>
  );
}
