import home_background from "../assets/home_background.jpg";
import button_pressing from "../assets/button_pressing.jpg";
import ref_image_1 from "../assets/ref_image_1.jpg";
import ref_image_2 from "../assets/ref_image_2.jpg";
import ref_image_3 from "../assets/ref_image_3.jpg";
import ref_image_4 from "../assets/ref_image_4.jpg";
import founder from "../assets/founder.jpg";
import wendingMachine from "../assets/wendingMachine.png";
import type { EmblaCarouselType } from "embla-carousel";

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
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  VenusIcon,
} from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
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
  const emblaApiRef = useRef<EmblaCarouselType | null>(null);
  const emblaReviewApiRef = useRef<EmblaCarouselType | null>(null);
  const [isEmblaReady, setIsEmblaReady] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    const embla = emblaApiRef.current;
    if (!embla) return;
    const newIndex = embla.selectedScrollSnap();
    setSelectedIndex(newIndex);
  }, []);

  useEffect(() => {
    const embla = emblaApiRef.current;
    if (embla) {
      embla.on("select", onSelect);
      // force run on mount
      onSelect();
    }

    return () => {
      embla?.off("select", onSelect);
    };
  }, [onSelect]);

  useEffect(() => {
    if (!isEmblaReady || !emblaReviewApiRef.current) return;

    const embla = emblaReviewApiRef.current;

    const interval = setInterval(() => {
      if (embla.canScrollNext()) {
        embla.scrollNext();
      } else {
        embla.scrollTo(0); // Loop back to start
      }
    }, 3000); // every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, [isEmblaReady]);

  return (
    <div className="w-full h-full">
      <div className="w-full h-full relative">
        <img
          src={home_background}
          alt="image of home"
          className="w-full h-full object-cover brightness-40"
        />
        <div
          className="w-full h-full tracking-wider text-white text-2xl md:text-5xl uppercase  font-bold  md:text-4xl px-12 md:px-32 lg:px-96 absolute top-1/2 left-1/2
       items-center justify-center flex transform -translate-x-1/2 -translate-y-1/2"
        >
          Redefining retail, one machine at a time. Rochoza brings smart vending
          to places where stores can’t reach.
        </div>
      </div>
      <div className="w-full h-full flex flex-col md:grid md:grid-cols-2">
        <div className="w-full h-full  p-8">
          <img
            src={button_pressing}
            alt="image of home"
            className="w-full h-full rounded-2xl md:rounded-4xl object-cover"
          />
        </div>
        <div
          className="w-full h-full p-8 flex flex-col items-center justify-center text-2xl"
          id="about"
        >
          <span className="md:text-5xl font-bold">
            Innovative Smart Vending Solutions
          </span>
          <span className="text-sm md:text-2xl">
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
      <div className="w-full h-max flex items-center justify-center bg-gray-100">
        {/* <div className="w-max md:w-2xl md:relative absolute flex items-center justify-center"> */}
        <img
          src={wendingMachine}
          className="h-[200px] w-max grid-cols-1 md:h-[734px]"
          alt="image of wending machine"
        />
        {/* </div> */}

        <div className="w-full h-full grid grid-cols-2  gap-2 gap-y-4 md:gap-x-8 md:px-8 items-center justify-center">
          {cards.map((card) => (
            <Card className="h-56 relative items-center">
              <span
                className="h-8 w-8  md:h-max md:w-max p-2 md:p-6 -top-4 flex items-center
               justify-center md:-top-6 absolute rounded-full bg-gray-200"
              >
                {/* 
              icon
              */}
                <VenusIcon />
              </span>
              <CardContent className="p-0 md:p-8">
                <CardHeader className="px-0">
                  <CardTitle className="text-sm md:text-2xl font-bold px-0">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <p className="text-sm md:text-lg py-2">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/**
       *
       * Founder
       *
       */}
      <div className="w-full h-full flex flex-col md:flex-row items-center p-4 justify-center">
        <div className="w-full  h-full flex md:p-16 flex-col items-center justify-center">
          <img
            src={founder}
            className="h-32 md:h-96 rounded-lg w-full object-cover"
            alt="image of founder"
          />
          <p className="flex flex-col w-full text-center justify-center items-center">
            <span className="font-bold text-2xl md:text-3xl">
              Hemanth Allamaneni
            </span>{" "}
            <span>Founder, Rochoza</span>
          </p>
        </div>
        <div className="md:text-2xl md:px-8">
          <span className="font-bold text-xl md:text-4xl">
            The Vision Behind Rochoza
          </span>
          <br />
          <br />
          <span className="font-bold md:text-2xl">
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

      {/**
       *
       * About
       *
       */}

      <div className="w-full h-full flex flex-col grid grid-cols-2 md:gap-x-8 md:px-8 items-center bg-gray-100 justify-center">
        {about.map((item) => (
          <Card className="h-56 items-center shadow-none bg-transparent border-none">
            <CardContent className="md:p-8">
              <CardHeader className="px-0">
                <CardTitle className="text-lg md:text-4xl font-bold px-0">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <p className="text-sm md:text-lg py-2">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/**
       *
       * images
       */}
      <div className="w-full py-16 flex flex-col items-center justify-center">
        <Carousel
          opts={{
            loop: true,
          }}
          setApi={(api) => {
            if (!api) {
              return;
            }
            return (emblaApiRef.current = api);
          }}
          className="relative h-full w-full flex items-center justify-center"
        >
          {/* Left Gradient */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-6 md:w-72 bg-gradient-to-r from-black/80 to-transparent z-10" />

          {/* Right Gradient */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-6 md:w-72 bg-gradient-to-l from-black/80 to-transparent z-10" />
          <CarouselContent className=" flex w-full items-center justify-center space-x-4 md:-ml-4">
            {images.map((image) => (
              <CarouselItem className="shrink-0 md:basis-1/3">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full  h-96 object-cover rounded-xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 cursor-pointer z-50" />
          <CarouselNext className="right-4 cursor-pointer z-50" />
        </Carousel>
        {/* Dots */}
        <div className="flex justify-center py-4 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApiRef.current?.scrollTo(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === selectedIndex ? "bg-black scale-110" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/**
       *
       * Reviews
       *
       */}
      <div className="w-full h-[450px] bg-gray-800 p-4 text-white md:p-16 flex items-center">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={(api) => {
            if (!api) return;
            emblaReviewApiRef.current = api;
            setIsEmblaReady(true); // trigger autoplay logic
          }}
        >
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem className="w-full">
                <div className="font-semibold md:text-xl">
                  <p className="pb-8 md:text-2xl ">{review.description}</p>
                  <span>-{review.name}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      {/**
       *
       * Contact us page
       *
       */}
      <div className="bg-gray-900 text-white py-8 px-4 md:px-12" id="#contact">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* 📍 Address */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Address</h4>
            <p>
              2/144, ST Colony
              <br />
              Gollamudi Village
              <br /> Nandigama Mandal
              <br /> NTR District – 521185
              <br /> Andhra Pradesh, India
            </p>
          </div>

          {/* 📞 Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Contact Us</h4>
            <p>
              📞{" "}
              <Link to="tel:+919392726287" className="hover:underline">
                +91 9392726287
              </Link>
              <br />
              ✉️{" "}
              <Link to="mailto:contact@rochoza.in" className="hover:underline">
                contact@rochoza.in
              </Link>
            </p>
          </div>

          {/* 🌐 Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4 mt-2">
              <Link
                to="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <Facebook size={20} />
              </Link>
              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                <Twitter size={20} />
              </Link>
              <Link
                to="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                to="https://www.instagram.com/rochoza.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>
        {/* 🔽 Copyright Strip */}
        <div className="text-center w-full mt-8 border-t border-gray-700 pt-4 text-sm text-gray-400">
          © {new Date().getFullYear()} Rochoza. All rights reserved.
        </div>
      </div>
    </div>
  );
};
