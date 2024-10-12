import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ActiveSectionContextProvider from "@/contexts/active-section-context";
import ThemeContextProvider from "@/contexts/theme-context";
import ThemeSwitch from "@/components/theme-switch";
import WidgetWrapper from "@/components/widget-wrapper";
import BackTop from "@/components/back-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zephyrine | Yun's portfolio",
  description: "Yun is a font-stack developer with 4 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning={true}>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative
        pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90
      `}
      >
        <div className="bg-[#FBE2E3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] blur-[10rem]  rounded-full  sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem]  blur-[10rem] rounded-full  sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <WidgetWrapper>
              <BackTop />
              <ThemeSwitch />
            </WidgetWrapper>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
