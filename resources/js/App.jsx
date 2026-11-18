
import Header from "./components/Header.jsx";
import HeroSlider from "./components/Heroslider.jsx";
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

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/2348137807605?text=Hello%20Deliz%20Initiative%2C%20I%20would%20like%20to%20make%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Deliz Initiative on WhatsApp"
                title="Chat with us on WhatsApp"
                className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8"
                >
                    <path d="M20.52 3.48A11.87 11.87 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.15 1.59 5.96L.06 24l6.28-1.65a11.9 11.9 0 0 0 5.73 1.46h.01c6.57 0 11.91-5.34 11.91-11.91a11.84 11.84 0 0 0-3.47-8.42ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.64-.24-.37a9.85 9.85 0 0 1-1.51-5.27c0-5.45 4.44-9.89 9.9-9.89a9.83 9.83 0 0 1 7 2.9 9.83 9.83 0 0 1 2.9 7c0 5.46-4.44 9.88-9.91 9.88Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.48 0 1.46 1.08 2.87 1.23 3.07.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
                </svg>
            </a>
        </>
    );
}
