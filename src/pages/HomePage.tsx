import home_background from "../assets/home_background.jpg";
import button_pressing from "../assets/button_pressing.jpg";
import ref_image_1 from "../assets/ref_image_1.jpg";
import ref_image_2 from "../assets/ref_image_2.jpg";
import ref_image_3 from "../assets/ref_image_3.jpg";
import ref_image_4 from "../assets/ref_image_4.jpg";
import founder from "../assets/founder.jpg";
import wendingMachine from "../assets/wendingMachine.png";

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
import { useRef, useState, useEffect } from "react";
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

const reviews = [
  {
    description:
      "Rochoza's smart vending machines have transformed our business operations in Vijayawada. Their advanced technology and user-friendly interface make inventory management effortless, saving us both time and money. The customer service team is exceptionally responsive and helpful!",
    name: "Amit Verma",
  },
  {
    description:
      "Rochoza has elevated our vending experience in Vijayawada. The sleek design and seamless integration of their machines have boosted customer satisfaction. Their prompt technical support ensures everything runs smoothly. Highly recommend Rochoza for smart vending solutions!",
    name: "Priya Menon",
  },
];

export const HomePage = () => {
  const emblaApiRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    const embla = emblaApiRef.current;
    if (!embla) return;

    const onSelect = () => {
      setSelectedIndex(embla.selectedScrollSnap());
    };

    setTotalSlides(embla.scrollSnapList().length);
    embla.on("select", onSelect);
    onSelect(); // initial
  }, []);

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
      <div className="w-full h-full flex bg-gray-100">
        <div className="w-2xl h-full flex items-center justify-center">
          <img
            src={wendingMachine}
            className="h-[734px]"
            alt="image of wending machine"
          />
        </div>

        <div className="w-full h-full grid grid-cols-2  gap-x-8 px-8 items-center justify-center">
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
      </div>

      <div className="w-full h-full flex items-center p-4 justify-center">
        <div className="w-full  h-full flex p-16 flex-col items-center justify-center">
          <img
            src={founder}
            className="h-96 rounded-lg w-full object-cover"
            alt="image of founder"
          />
          <p className="flex flex-col w-full text-center justify-center items-center">
            <span className="font-bold text-3xl">Hemanth Allamaneni</span>{" "}
            <span>Founder, Rochoza</span>
          </p>
        </div>
        <div className="text-2xl px-8">
          <span className="font-bold text-4xl">The Vision Behind Rochoza</span>
          <br />
          <br />
          <span className="font-bold text-2xl">
            Young Leadership. Bold Innovation. A New Chapter in Smart Retail.
          </span>
          <br />
          <br />
          At the heart of Rochoza is a visionary young founder redefining how
          retail serves people across India. With a mission to merge technology,
          accessibility, and modern-day utility, Rochoza introduces a new era of
          smart retail — one that goes beyond transactions and becomes a part of
          everyday life.
          <br />
          <br />
          This is more than automation — it’s thoughtful, impactful presence
          where traditional commerce often falls short.
        </div>
      </div>

      <div className="w-full h-full grid grid-cols-2 gap-x-8 px-8 items-center bg-gray-100 justify-center">
        {about.map((item) => (
          <Card className="h-56 items-center shadow-none bg-transparent border-none">
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

      <div className="w-full h-full flex items-center justify-center">
        <Carousel
          opts={{
            loop: true,
          }}
          setApi={(api) => (emblaApiRef.current = api)}
        >
          <CarouselContent className="-ml-2 flex gap-8 md:-ml-4">
            {images.map((image) => (
              <CarouselItem className="w-full basis-1/3">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-96 object-cover rounded-xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 cursor-pointer" />
          <CarouselNext className="right-4 cursor-pointer" />
        </Carousel>
        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApiRef.current?.scrollTo(i)}
              className={`w-3 h-3 rounded-full ${
                i === selectedIndex ? "bg-white" : "bg-gray-400"
              }`}
            >
              ..
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-[450px] bg-gray-800 text-white p-16 flex items-center">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={(api) => (emblaApiRef.current = api)}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {reviews.map((review) => (
              <CarouselItem className="w-full">
                {review.description}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="w-full h-[350px] flex items-center justify-center"></div>
    </div>
  );
};
