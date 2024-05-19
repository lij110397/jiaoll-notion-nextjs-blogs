import { ReactNode } from "react";
import Footer from "./footer";
import HeroWrapper from "./hero-wrapper";
import Navbar from "./navbar";

interface SubLayoutProps {
  children: ReactNode;
  pageTitle: string;
  url?: string;
}
const HomeLayout: React.FC<SubLayoutProps> = ({ children, pageTitle, url }) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="container flex flex-col items-center">
          <HeroWrapper title={pageTitle} url={url} />
          {children} 
        </div>
      </div>
      <Footer />
    </>
  );
};
export default HomeLayout;
