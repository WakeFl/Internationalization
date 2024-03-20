import { useTranslations } from "next-intl";

const Something = () => {
  const t = useTranslations("Something");
  return (
    <div className='pt-6'>
      <div className='flex justify-center items-center'>
        <h1 className='text-[30px]'>{t("title")}</h1>
      </div>
      <p>{t("something")}</p>
    </div>
  );
};

export default Something;
