import Footer from "@/components/layouts/Footer";
import Header from "../../components/layouts/Header";
import BannerHomePage from "./components/BannerHomePage";
import ContentHomePage from "./components/ContentHomePage";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-6 ">
      <Header />
      <BannerHomePage />
      <ContentHomePage />
      <Footer />
    </div>
  );
};

export default HomePage;
