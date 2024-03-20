"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { useLocale } from "use-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const activeLocal = useLocale();
  const pathname = usePathname();

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
    <header className='flex gap-4'>
      <Link href={`/${activeLocal}`}>Main</Link>
      <Link href={`/${activeLocal}/something`}>Something else</Link>
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
    </header>
  );
};

export default Header;
