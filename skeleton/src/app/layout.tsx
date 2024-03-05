import { Suspense } from 'react';
import type { Metadata } from "next";

import Header from '@containers/sementic/header'
import Footer from '@containers/sementic/footer'
import Gnb from '@containers/sementic/gnb';

import "./globals.scss";
import Loading from './loading';

export const metadata: Metadata = {
    title: "Skeleton Version",
    description: "NextJS Skeleton Version",
};  

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Header></Header>
      <body>
	      <div id="siwon_wrap">
          <Gnb></Gnb>
          <Suspense fallback={ <Loading></Loading> }>
            {children}
          </Suspense>
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
