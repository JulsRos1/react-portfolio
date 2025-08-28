import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import dgphoto from "../assets/dgphoto.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Works = () => {
  const projects = [
    {
      id: 1,
      heading: "PWDIS",
      content: "PWDIS is a user-friendly website designed to provide  accessible resources and information for  individuals with disabilities. The platform serves as a one-stop hub where users can find valuable resources catered specifically to their needs. A standout feature of the site is the interactive mapping tool, which allows users to identify  PWD (Person with Disabilities) accessible locations.",
      img : dgphoto
    },
    {
      id: 2,
      heading: "DIGITAL PHOTOGRAPHY",
      content: "DigitalPhotography – Online Booking System is a web platform that lets clients easily browse and book photography bundles. It features an integrated calendar for scheduling, a smart chatbot for instant assistance, and an admin dashboard for managing bookings, packages, and client details—streamlining both customer and business workflows.",
      img : dgphoto
    },
    { heading: "", content: "", id: 3,},
    { heading: "", content: "", id: 4,},
  ];
  const languages = ['Javascript', 'PHP', 'HTML', 'CSS', 'Bootstrap'];
  return (
    <section
      className="flex items-center justify-center min-h-screen overflow-hidden mt-20 pt-10 pb-30"
      id="works"
    >
      <div className="relative w-full lg:max-w-7xl mx-10">
        <h1 className="text-4xl text-center mb-10 text-white font-bold border-b-3 border-[#66B933] max-w-45 mx-auto">
          My Works
        </h1>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full px-5"
        >
          <CarouselContent>
            {projects.map((p) => (
              <CarouselItem key={p.id} className="md:basis-1/2">
                <Card className="h-full">
                  <CardContent
                    key={p.id}
                    className="flex flex-col h-full gap-4 text-primary px-5 lg:px-10"
                  >
                    <div className="w-full flex-shrink-0">
                      <img
                        src={p.img}
                        className="w-full lg:h-[370px] object-cover rounded-lg mb-3"
                      />
                    </div>

                    <div className="flex flex-col flex-grow gap-2">
                      <h1 className="text-2xl font-bold text-black">
                        {p.heading}
                      </h1>
                      <p className="text-sm leading-relaxed lg:text-[16px] flex-grow">
                        {p.content}
                      </p>

                      <div className="flex gap-2 flex-wrap mt-2">
                        {languages.map((language, index) => (
                          <div
                            className="text-sm border border-neutral-500 rounded-full py-1 px-3"
                            key={index}
                          >
                            {language}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 mt-auto">
                      <button className="px-8 py-1 rounded-lg shadow-md border-2 border-[#66B933] bg-black text-secondary font-semibold transition-all duration-300 ease-out hover:bg-[#66B933] hover:text-black hover:shadow-[0_0_20px_#66B933] hover:scale-105">
                        Visit
                      </button>
                      <button className="px-6 py-1 rounded-lg shadow-md border-2 border-[#66B933] bg-black text-secondary font-semibold transition-all duration-300 ease-out hover:bg-[#66B933] hover:text-black hover:shadow-[0_0_20px_#66B933] hover:scale-105">
                        Github
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* arrows repositioned */}
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2" />
        </Carousel>
      </div>
    </section>
  );
};

export default Works;
