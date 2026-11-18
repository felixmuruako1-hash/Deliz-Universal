
import { useState } from "react";

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
    const [showWhatsAppDialog, setShowWhatsAppDialog] = useState(false);

    const whatsappLink =
        "https://wa.me/2348137807605?text=Hello%20Deliz%20Initiative%2C%20I%20would%20like%20to%20make%20an%20inquiry.";

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

            {/* WhatsApp Chat Widget */}
            {showWhatsAppDialog && (
                <div
                    className="fixed bottom-24 right-6 z-[60] w-[calc(100%-3rem)] max-w-xs overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
                >
                    {/* Green Header */}
                    <div className="flex items-center justify-between bg-[#075E54] px-4 py-3 text-white">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path d="M20.52 3.48A11.87 11.87 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.15 1.59 5.96L.06 24l6.28-1.65a11.9 11.9 0 0 0 5.73 1.46h.01c6.57 0 11.91-5.34 11.91-11.91a11.84 11.84 0 0 0-3.47-8.42Z" />
                                </svg>
                            </div>

                            <div>
                                <h2 className="font-semibold">
                                    Deliz Initiative
                                </h2>
                                <p className="text-xs text-green-100">
                                    We're happy to hear from you!
                                </p>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => setShowWhatsAppDialog(false)}
                            aria-label="Close chat"
                            className="rounded-full p-2 text-white hover:bg-white/20"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Chat Area */}
                    <div className="bg-[#f7f7f7] p-4">
                        <div className="mb-3 inline-block max-w-[95%] rounded-2xl rounded-tl-sm bg-white p-3 text-sm leading-6 text-gray-800 shadow-sm">
                            <p className="mb-2 font-semibold">
                                Welcome to Deliz Initiative!
                            </p>

                            Thank you for reaching out. How can we help you
                            today? Feel free to ask us about volunteering,
                            donations, partnerships, or our projects.

                            <p className="mt-2 text-right text-[10px] text-gray-400">
                                Deliz Initiative
                            </p>
                        </div>

                        {/* Contact Number */}
                        <div className="rounded-xl border border-gray-200 bg-white p-3">
                            <p className="text-xs text-gray-500">
                                Chat with us on WhatsApp
                            </p>

                            <p className="mt-1 font-semibold text-gray-900">
                                +234 813 780 7605
                            </p>
                        </div>

                        {/* WhatsApp Link */}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setShowWhatsAppDialog(false)}
                            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1DA851]"
                        >
                            Chat with us →
                        </a>
                    </div>
                </div>
            )}

            {/* Floating WhatsApp Button */}
            <button
                type="button"
                onClick={() => setShowWhatsAppDialog((previous) => !previous)}
                aria-label="Contact Deliz Initiative on WhatsApp"
                aria-expanded={showWhatsAppDialog}
                title="Contact us on WhatsApp"
                className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-110"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-9 w-9"
                >
                    <path d="M20.52 3.48A11.87 11.87 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.15 1.59 5.96L.06 24l6.28-1.65a11.9 11.9 0 0 0 5.73 1.46h.01c6.57 0 11.91-5.34 11.91-11.91a11.84 11.84 0 0 0-3.47-8.42Z" />
                </svg>
            </button>
        </>
    );
}
