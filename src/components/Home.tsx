import {AboutSection, ContactSection, HeroSection, ProjectsSection, SkillsSection} from "@/components/index";

const Home = () => {
    return (
        <>
            <div id="home" className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
                <HeroSection/>
                <AboutSection/>
                <ProjectsSection/>
                <SkillsSection/>
                <ContactSection/>
            </div>
        </>

    );
}

export default Home;