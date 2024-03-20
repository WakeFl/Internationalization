import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <div className='pt-6'>
      <div className='flex justify-center items-center'>
        <h1 className='text-[30px]'>{t("title")}</h1>
      </div>
      <p>{t("desc")}</p>
    </div>
  );
}
