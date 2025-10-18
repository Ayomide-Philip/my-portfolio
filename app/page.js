import AboutSection from "./componet/home/aboutMe";
import HeroSection from "./componet/home/hero";
import ServiceSection from "./componet/home/service";
import Skills from "./componet/home/skills";
import ContactPage from "./componet/home/contactPage";
import ProjectSection from "./componet/home/project";
import ScrollAnimation from "./componet/scrollFollow";

export default function Home() {
  return (
    <>
      <ScrollAnimation />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <Skills />
      <ProjectSection />
      <ContactPage />
    </>
  );
}
