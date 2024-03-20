"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { useLocale } from "use-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Header = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const activeLocal = useLocale();
  const pathname = usePathname();
  const t = useTranslations("Header");

  const updatePath = () => {
    const path = pathname.split("/").slice(2);
    const updatedPath = path.join("/");
    return updatedPath;
  };

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    startTransition(() => {
      const nextLocale = e.target.value;
      router.replace(`/${nextLocale}/${updatePath()}`);
    });
  };
  return (
    <header className='flex justify-between items-center'>
      <div className=' flex gap-4 text-xl'>
        <Link
          className={`hover:text-slate-300  ${
            pathname == `/${activeLocal}` ? "border-b-2" : ""
          }`}
          href={`/${activeLocal}`}
        >
          {t("main")}
        </Link>
        <Link
          className={`hover:text-slate-300 ${
            pathname == `/${activeLocal}/something` ? "border-b-2" : ""
          }`}
          href={`/${activeLocal}/something`}
        >
          {t("something")}
        </Link>
      </div>
      <div>
        <label className='border-2 rounded'>
          <p className='sr-only'>change language</p>
          <select
            defaultValue={activeLocal}
            className='text-black'
            onChange={onSelectChange}
          >
            <option value='en'>English</option>
            <option value='fr'>France</option>
            <option value='de'>Deutsch</option>
          </select>
        </label>
      </div>
    </header>
  );
};

export default Header;
