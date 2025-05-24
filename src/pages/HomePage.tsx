import home_background from "../assets/home_background.jpg";
import button_pressing from "../assets/button_pressing.jpg";
import ref_image_1 from "../assets/ref_image_1.jpg";
import ref_image_2 from "../assets/ref_image_2.jpg";
import ref_image_3 from "../assets/ref_image_3.jpg";
import ref_image_4 from "../assets/ref_image_4.jpg";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import { VenusIcon } from "lucide-react";
// import { useRef, useEffect } from "react";

const images = [
  {
    src: ref_image_1,
    alt: "Image 1",
  },
  {
    src: ref_image_2,
    alt: "Image 2",
  },
  {
    src: ref_image_3,
    alt: "Image 3",
  },
  {
    src: ref_image_4,
    alt: "Image 4",
  },
];

const about = [
  {
    title: "Innovation",
    description:
      "At Rochoza, we are committed to pushing the boundaries of technology to deliver cutting-edge smart vending solutions. Our focus on continuous innovation ensures that we stay ahead of industry trends and provide our clients with the most advanced systems available.",
  },
  {
    title: "Customer-Centricity",
    description:
      "Our customers are at the heart of everything we do. We strive to understand their unique needs and tailor our solutions to provide maximum value and satisfaction, ensuring a seamless experience from start to finish.",
  },
  {
    title: "Sustainability",
    description:
      "We believe in building a sustainable future, emphasizing energy efficiency and sustainability in our smart vending machines, contributing to a greener planet.",
  },
  {
    title: "Integrity",
    description:
      "We conduct all our operations with honesty, transparency, and ethical practices, building trust with our clients and partners.",
  },

  {
    title: "Collaboration",
    description:
      "By working together, we create innovative solutions that meet the diverse needs of our customers and drive mutual success.",
  },
];

const cards = [
  {
    title: "Intelligent Stock Management",
    description:
      "Optimize inventory with real-time analytics and automatic restock alerts for seamless operations.",
  },
  {
    title: "Customizable Product Displays",
    description:
      "Tailor your vending interface to showcase products effectively, enhancing user engagement.",
  },
  {
    title: "Secure Payment Solutions",
    description:
      "Integrate multiple payment options ensuring fast, secure transactions for all users.",
  },
  {
    title: "Remote Machine Monitoring",
    description:
      "Monitor and manage your vending machines remotely for maximum efficiency and uptime.",
  },
];

export const HomePage = () => {
  // const AUTO_PLAY_DELAY = 3000; // 3 seconds
  // const emblaApiRef = useRef(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (emblaApiRef.current) {
  //       if (emblaApiRef.current.canScrollNext()) {
  //         emblaApiRef.current.scrollNext();
  //       } else {
  //         emblaApiRef.current.scrollTo(0); // restart if at end
  //       }
  //     }
  //   }, AUTO_PLAY_DELAY);

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full relative">
        <img
          src={home_background}
          alt="image of home"
          className="w-full h-full object-cover brightness-40"
        />
        <div
          className="w-full h-full text-white text-4xl px-96 absolute top-1/2 left-1/2
       items-center justify-center flex transform -translate-x-1/2 -translate-y-1/2"
        >
          Redefining retail, one machine at a time. Rochoza brings smart vending
          to places where stores can’t reach.
        </div>
      </div>
      <div className="w-full h-full grid grid-cols-2">
        <div className="w-full h-full p-8">
          <img
            src={button_pressing}
            alt="image of home"
            className="w-full h-full rounded-4xl object-cover"
          />
        </div>
        <div className="w-full h-full p-8 flex flex-col items-center justify-center text-2xl">
          <span className="text-5xl font-bold">
            Innovative Smart Vending Solutions
          </span>
          <span>
            {" "}
            Rochoza is revolutionizing the way India accesses daily essentials
            through advanced, AI-powered vending machines. We bring 24/7
            convenience to locations traditional stores can’t reach — combining
            automation, real-time inventory, and our unique vision for Digital
            India. Our mission: to deliver seamless, self-serve retail
            experiences where people live, travel, and work
          </span>
        </div>
      </div>
      {/**
       *
       * Smart solutions
       *
       */}
      <div className="w-full h-full grid grid-cols-2 bg-gray-100 gap-x-8 px-8 items-center justify-center">
        {cards.map((card) => (
          <Card className="h-56 relative items-center">
            <span className="h-max w-max p-6 -top-6 absolute rounded-full bg-gray-200">
              {/* 
              icon
              */}
              <VenusIcon />
            </span>
            <CardContent className="p-8">
              <CardHeader className="px-0">
                <CardTitle className="text-4xl font-bold px-0">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <p className="text-lg py-2">{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="w-full h-full grid grid-cols-2 gap-x-8 px-8 items-center justify-center">
        {about.map((item) => (
          <Card className="h-56 items-center shadow-none border-none">
            <CardContent className="p-8">
              <CardHeader className="px-0">
                <CardTitle className="text-4xl font-bold px-0">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <p className="text-lg py-2">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="w-full h-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          // setApi={(api) => (emblaApiRef.current = api)}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((image) => (
              <CarouselItem className="w-36 h-96">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </div>
  );
};
