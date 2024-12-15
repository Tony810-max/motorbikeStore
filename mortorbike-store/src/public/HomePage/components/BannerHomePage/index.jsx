import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const BannerHomePage = () => {
  return (
    <div>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 1500,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          <CarouselItem>
            <img
              src="/images/banner/banner1.webp"
              alt="banner img"
              className="w-full hover:cursor-grabbing"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/images/banner/banner2.webp"
              alt="banner img"
              className="w-full hover:cursor-grabbing"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/images/banner/banner3.webp"
              alt="banner img"
              className="w-full hover:cursor-grabbing"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default BannerHomePage;
