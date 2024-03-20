"use client";

import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("Something");
  return <div>{t("title")}</div>;
};

export default page;
