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

            {/* WhatsApp Welcome Dialogue */}
            {showWhatsAppDialog && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
                    onClick={() => setShowWhatsAppDialog(false)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="whatsapp-dialog-title"
                        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="mb-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-7 w-7"
                                    >
                                        <path d="M20.52 3.48A11.87 11.87 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.15 1.59 5.96L.06 24l6.28-1.65a11.9 11.9 0 0 0 5.73 1.46h.01c6.57 0 11.91-5.34 11.91-11.91a11.84 11.84 0 0 0-3.47-8.42Z" />
                                    </svg>
                                </div>

                                <div>
                                    <h2
                                        id="whatsapp-dialog-title"
                                        className="text-xl font-bold text-gray-900"
                                    >
                                        Contact Deliz Initiative
                                    </h2>
                                    <p className="text-sm text-green-600">
                                        We're happy to hear from you!
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => setShowWhatsAppDialog(false)}
                                aria-label="Close dialogue"
                                className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
                            >
                                ✕
                            </button>
                        </div>

                        <p className="mb-4 leading-7 text-gray-600">
                            Thank you for your interest in Deliz Initiative!
                            We're glad you want to connect with us.
                        </p>

                        <div className="mb-5 rounded-xl bg-gray-50 p-4">
                            <h3 className="mb-2 font-semibold text-gray-900">
                                What should you do next?
                            </h3>

                            <ol className="list-decimal space-y-2 pl-5 text-sm leading-6 text-gray-600">
                                <li>
                                    Click the Continue to WhatsApp button below.
                                </li>
                                <li>
                                    WhatsApp will open with a message ready for you.
                                </li>
                                <li>
                                    Send your message and tell us how we can help.
                                </li>
                            </ol>
                        </div>

                        <p className="mb-5 text-sm text-gray-600">
                            You can contact us about volunteering, donations,
                            partnerships, our projects, or any other inquiry.
                        </p>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setShowWhatsAppDialog(false)}
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 font-semibold text-white shadow-md transition hover:bg-[#1DA851]"
                        >
                            Continue to WhatsApp
                        </a>

                        <button
                            type="button"
                            onClick={() => setShowWhatsAppDialog(false)}
                            className="mt-3 w-full rounded-xl border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Larger Floating WhatsApp Button */}
            <button
                type="button"
                onClick={() => setShowWhatsAppDialog(true)}
                aria-label="Contact Deliz Initiative on WhatsApp"
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