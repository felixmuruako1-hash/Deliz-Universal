import Header from "./components/Header.jsx";
import HeroSlider from "./components/HeroSlider.jsx";
import TransparencyTicker from "./components/TransparencyTicker.jsx";
import AboutSection from "./components/AboutSection.jsx";
import FocusAreas from "./components/FocusAreas.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import ImpactSection from "./components/ImpactSection.jsx";
import FeaturedStory from "./components/FeaturedStory.jsx";
import HowToHelp from "./components/HowToHelp.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Gallery from "./components/Gallery.jsx";
import BlogSection from "./components/BlogSection.jsx";
import Newsletter from "./components/Newsletter.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";

import {
    heroSlides,
    tickerItems,
    focusCategories,
    projects,
    impactMetrics,
    featuredStory,
    testimonials,
    galleryImages,
    blogPosts,
} from "./data/mockData.js";

export default function App() {
    return (
        <>
            <Header activePath="home" />

            <main className="min-h-screen w-full bg-white pt-20">
                <div className="flex w-full flex-col">

                    {/* Home */}
                    <section id="home" className="scroll-mt-20">
                        <HeroSlider
                            slides={heroSlides}
                            interval={6500}
                        />
                    </section>

                    {/* Transparency */}
                    <TransparencyTicker items={tickerItems} />

                    {/* About Us */}
                    <div id="about-us" className="scroll-mt-24">
                        <AboutSection />
                    </div>

                    {/* Our Work */}
                    <div id="our-work" className="scroll-mt-24">
                        <FocusAreas categories={focusCategories} />
                    </div>

                    {/* Projects */}
                    <div id="projects" className="scroll-mt-24">
                        <ProjectsSection projects={projects} />
                    </div>

                    {/* Impact */}
                    <div id="impact" className="scroll-mt-24">
                        <ImpactSection metrics={impactMetrics} />
                    </div>

                    {/* Featured Story */}
                    {featuredStory && (
                        <FeaturedStory story={featuredStory} />
                    )}

                    {/* How To Help */}
                    <HowToHelp />

                    {/* Testimonials */}
                    <Testimonials testimonials={testimonials} />

                    {/* Gallery */}
                    <div id="gallery" className="scroll-mt-24">
                        <Gallery images={galleryImages} />
                    </div>

                    {/* Blog */}
                    <div id="blog" className="scroll-mt-24">
                        <BlogSection posts={blogPosts} />
                    </div>

                    {/* Newsletter */}
                    <Newsletter />

                    {/* Contact */}
                    <div id="contact" className="scroll-mt-24">
                        <FinalCTA />
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}