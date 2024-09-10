import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel";
import companies from "../data/companies.json";
import Autoplay from "embla-carousel-autoplay";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
    return (
        <main className="flex flex-col gap-5 sm:gap-5 py-10 sm:py-5">
      <section className="text-center ml-16 sm:ml-22 lg:ml-26">
        <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job
          <span className="flex items-center gap-2 sm:gap-6">
            and get
            <img
              src="/logo.png"
              className="h-14 sm:h-24 lg:h-32"
              alt="Hirrd Logo"
            />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
        </section>
        <div className="flex gap-6 justify-center">
        <Link to={"/jobs"}>
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to={"/post-job"}>
          <Button size="xl" variant="destructive">
            Post a Job
          </Button>
        </Link>
      </div>
      <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
            {companies.map(({name, id, path}) => {
            return(
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
            <img src={path} alt={name}
            className="h-9 sm:h-14 object-contain"
            />
            </CarouselItem>
            );
            })}
        </CarouselContent>
      </Carousel>
        <img src="/banner.jpeg" alt="Image" className="w-full ml-20"/>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="ml-20">
          <CardHeader>
            <CardTitle className="font-bold">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>
      <Accordion type="multiple" className="w-full ml-20">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
        
    </main>
    );
};
  
  export default LandingPage