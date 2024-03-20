import { useTranslations } from "next-intl";

const Something = () => {
  const t = useTranslations("Something");
  return <div>{t("title")}</div>;
};

export default Something;
