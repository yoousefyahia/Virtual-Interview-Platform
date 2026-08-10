import Image from "next/image";
import heart from "@/assets/images/Heart.svg"
import diamond from "@/assets/images/Diamond.svg"
import users from "@/assets/images/Users.svg"
import insight from "@/assets/images/insight.svg"
import backgroundImage from "@/assets/images/3d-render-futuristic-architecture-skyscraper-building-with-curve-glass-window.png";
type ValuesTypes={
  icon:string,
  title:string,
  description:string
}[];
type companyStates={
  label:string,
  state:string
}[]
function AboutPage() {
  const Values :ValuesTypes=[
    {
      icon:heart,
      title:"Integrity",
      description:"Fair evaluation for all"
    },
     {
      icon:diamond,
      title:"Innovation",
      description:"Always one step ahead"
    }, {
      icon:users,
      title:"Human-Centered",
      description:"People over process"
    }, {
      icon:insight,
      title:"Transparency",
      description:"Clear insights"
    },
  ]
  const companyStates:companyStates=[
    {
      label:"Founded",
      state:"2021"
    },
    { label:"Active Users",
      state:"50K+"
    },
    { label:"Partner Companies",
      state:"340+"
    },
    { label:"Platform Uptime",
      state:"98.2%"
    },

  ]
  return (
  
    <div className="overflow-hidden">
      <div className="relative z-0 w-full h-120">
        <Image
          src={backgroundImage}
          className="w-full h-full absolute  "
          alt=""
          priority
        />
        <div className="absolute z-40 w-3/4 top-10 sm:top-1/4 left-1/10">
          <h1 className="text-secondary text-xl sm:text-4xl md:text-5xl font-bold w-1/2 mb-4 ">
            Building the future of fair and efficient hiring
          </h1>
          <p className="w-3/4 text-neutral-700 text-xs sm:text-sm md:text-base">
            We believe every talented person deserves a fair chance, and every
            company deserves the right people — faster and smarter
          </p>
        </div>
      </div>
      <main className="m-auto w-11/12 ">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/50 backdrop-blur-xs border rounded-2xl border-neutral-300 -mt-15 m-auto max-h-35 w-11/12 p-3 ">
       {companyStates.map((i)=>{
        return(
          <div key={i.label}>
            <h4 className="text-sm sm:text-2xl font-semibold text-black h4 text-center">{i.state}</h4>
            <p className="text-xs sm:text-sm font-bold  text-center text-neutral-700">{i.label}</p>
          </div>
        )
})}
        </div>
        <div className="bg-primary/5 rounded-2xl w-full h-60 mt-15 mb-15 flex items-center justify-center flex-col">
    <h2 className="text-xl sm:text-4xl text-primary mb-2 font-bold">Our Mission</h2>
    <p className="w-9/12 font-medium text-center text-black/60 text-sm sm:text-xl">To revolutionize the hiring experience through ethical AI and technology, making in-
terviews more accurate, transparent, and accessible for everyone.</p>
        </div>
        <div className="flex flex-col items-center justify-center mb-15">
          <h2 className="text-xl sm:text-4xl font-bold mb-5">Our Values</h2>
        <div className="grid grid-cols-2 w-full sm:grid-cols-4 gap-3">
          {Values.map((i)=>{
            return(
              <div className="bg-white m-2 rounded-2xl p-2 w-full " key={i.title}>
               <div className="h-12.5 w-12.5 bg-primary/5 rounded-full flex justify-center"
>
                 <Image 
                src={i.icon}
                alt="icon"
                
                />
               </div>
                <h4 className="h4 font-bold  mb-1.5 text-sm sm:text-lg md:text-xl wrap-break-word">{i.title}</h4>
                <p className="font-normal text-[#8A8D96] text-xs sm:text-sm md:text-base">{i.description}</p>
              </div>
            )
          })}
        </div>
        </div>
      </main>
    </div>
  );
}

export default AboutPage;
