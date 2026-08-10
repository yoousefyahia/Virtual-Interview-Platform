import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import cardImage1 from "@/assets/images/hands-ceo.png";
import cardImage2 from "@/assets/images/diverse-people-working-office.png";
import cardImage3 from "@/assets/images/satisfied-businessman.png";
import cardImage4 from "@/assets/images/interior-cozy.png";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function CasesPage() {
  const cards = [
    {
      img: cardImage1,
      title: "TechVerse",
      label: "Tech",
      description: "70% Faster Hiring with AI Interviews ",
      content:
        "Using VU's AI-powered interviews, TechVerse accelerated candidate screening and reduced manual effort while maintaining high hiring quality.",
    },
    {
      img: cardImage2,
      title: "CodeHub",
      label: "Tech",
      description: "Cut Recruitment Costs by 45%",
      content:
        "By automating technical interviews and AI candidate evaluations, CodeHub significantly reduced hiring expenses without compromising quality.Results",
    },
    {
      img: cardImage3,
      title: "Nova Systems",
      label: "Enterprise",
      description: "70% Faster Hiring with AI Interviews ",
      content:
        "Real-time AI analysis helped recruiters identify stronger candidates earlier, improving hiring accuracy and reducing interview bias.",
    },
    {
      img: cardImage4,
      title: "Learnify",
      label: "Education",
      description: "Successfully Hired 10,000+ Candidates",
      content:
        "Learnify managed large-scale campus recruitment campaigns using automated interviews, centralized candidate tracking, and AI scoring.",
    },
  ];
  const reviews = [
    {
      id: 1,
      comment: `"VU transformed the way we recruit. AI-powered interviews, automated evaluations, and real-time monitoring helped us hire faster while improving candidate quality across every department."`,
      avatar: "NA",
      name: "Nuha Ahmed",
      position: "HR Director",
    },
    {
      id: 2,
      comment: `"VU completely streamlined our hiring workflow. What used to take our talent team weeks was cut down to just a few days thanks to automated screening and instant candidate scoring.”`,
      avatar: "TM",
      name: "Tarek Mansour",
      position: "Head of Talent Acquisition",
    },
    {
      id: 3,
      comment: `"The AI insights and structured interview reports gave us complete confidence in our hiring decisions. Plus, our candidates loved how smooth, transparent, and interactive the assessment process was."`,
      avatar: "SE",
      name: "Salma El-Sayed",
      position: "People & Culture Lead",
    },
    {
      id: 4,
      comment: `"Scaling our engineering and product teams used to be a massive bottleneck. VU allowed us to screen hundreds of applicants simultaneously without losing depth or quality in our evaluation."`,
      avatar: "KH",
      name: "Karim Hassan",
      position: "Chief Technology Officer (CTO)",
    },
  ];
  return (
    
      <main className="container">
        <div className="flex flex-col items-center justify-center text-center mt-10">
          <h1 className="text-primary font-bold text-4xl sm:text-6xl m-2">Success Stories</h1>
          <p className="font-semibold text-base sm:text-xl text-neutral-700">
            See how leading companies use VU to hire smarter.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 mt-12.5">
          {cards.map((i) => {
            return (
              <Card 
                key={i.title}
                className="relative mx-auto w-full max-w-sm pt-0 hover:-translate-y-1 hover:shadow-hover">
                <div className="absolute inset-0 z-30 aspect-video " />
                <Image
                  className="relative z-20 aspect-video w-full object-cover"
                  src={i.img}
                  alt={i.title}
                />
                <CardHeader className="h-9/10">
                  <div className="flex justify-between items-center mb-3 ">
                    <CardTitle className="font-bold sm:text-[28px]  text-[#5A5A5D]">
                      {i.title}
                    </CardTitle>
                    <CardTitle className="text-sm sm:text-base text-primary bg-[#BEDBFF]  max-w-25 min-w-10 max-h-10  rounded-corner-radius-m flex items-center justify-center p-2">
                      {i.label}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-black sm:text-2xl font-bold">
                    {i.description}
                  </CardDescription>
                  <CardContent className="p-0 font-medium text-xs md:text-base line-clamp-3">
                    {i.content}
                  </CardContent>
                </CardHeader>
                <CardFooter className="container flex items-end h-15">
                  <Link
                    href={""}
                    className="w-full flex items-center text-primary font-bold md:text-[18px] ">
                    Read Case Study
                    <ArrowRight className="ml-2" />
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="w-full max-h-75  ">
          <Carousel className="w-full m-4 container ">
            <CarouselPrevious className="left-0 z-50" />
            <CarouselContent>
              {reviews.map((i) => (
                <CarouselItem key={i.id}>
                  <div className="p-1">
                    <Card className="w-8/10 m-auto">
                      <CardContent className="flex aspect-auto items-center justify-center p-3 ">
                        <h6 className="italic text-black/60 font-medium text-xs sm:text-sm line-clamp-8">
                          {i.comment}
                        </h6>
                      </CardContent>
                      <CardFooter className="flex gap-3 ">
                        <Avatar>
                          <AvatarImage src="img" alt="@shadcn" />
                          <AvatarFallback className="bg-linear-to-r from-chart-3 to-chart-1 text-white font-extralight text-sm">
                            {i.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h6 className="font-bold text-sm sm:text-base">{i.name}</h6>
                          <p className="text-[#696666] text-xs  sm:text-sm">{i.position}</p>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="right-0 z-50" />
          </Carousel>
        </div>
      </main>
  );
}

export default CasesPage;
