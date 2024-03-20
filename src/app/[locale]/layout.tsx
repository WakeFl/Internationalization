import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { NextIntlClientProvider, useMessages } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  const messages = useMessages();
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <div className='w-5/6 my-0 mx-auto'>
          <div className='my-10'>
            <NextIntlClientProvider locale={params.locale} messages={messages}>
              <Header />
            </NextIntlClientProvider>
          </div>
        </div>
        <hr className='bg-white' />
        <div className='w-5/6 my-0 mx-auto'>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
