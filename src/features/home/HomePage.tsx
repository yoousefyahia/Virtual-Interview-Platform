import HeroSection from "@/features/home/components/HeroSection";
import StatsSection from "@/features/home/components/StatsSection";
import PlatformCapabilities from "@/features/home/components/PlatformCapabilities";
import AudienceCards from "@/features/home/components/AudienceCards";
import ProcessSection from "@/features/home/components/ProcessSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <PlatformCapabilities />
      <AudienceCards />
      <ProcessSection />
    </>
  );
}
      
