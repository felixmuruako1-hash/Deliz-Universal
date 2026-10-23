import { useCallback, useEffect, useState } from "react";

export default function HeroSlider({ slides = [], interval = 6500 }) {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => {
        if (slides.length <= 1) return;

        setCurrent((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const prev = useCallback(() => {
        if (slides.length <= 1) return;

        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    const goTo = useCallback(
        (index) => {
            if (slides.length === 0) return;

            setCurrent(index);
        },
        [slides.length]
    );

    // Automatic slideshow
    useEffect(() => {
        if (slides.length <= 1) return;

        const timer = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, interval);

        return () => clearTimeout(timer);
    }, [current, slides.length, interval]);

    // Make sure current slide always exists
    useEffect(() => {
        if (slides.length === 0) {
            setCurrent(0);
            return;
        }

        if (current >= slides.length) {
            setCurrent(0);
        }
    }, [slides.length, current]);

    if (!slides || slides.length === 0) {
        return null;
    }

    return (
        <section
            id="heroSection"
            className="relative w-full overflow-hidden bg-forest-darkest text-white"
        >
            <div
                id="heroSlider"
                className="relative h-[620px] w-full overflow-hidden md:h-[700px] lg:h-[760px]"
            >
                {/* Slides */}
                {slides.map((slide, index) => {
                    const isActive = index === current;

                    return (
                        <div
                            key={slide.id ?? index}
                            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
                                isActive
                                    ? "z-10 opacity-100"
                                    : "pointer-events-none z-0 opacity-0"
                            }`}
                        >
                            {/* Background image */}
                            <div
                                className="absolute inset-0 bg-cover bg-top"
                                style={{
                                    backgroundImage: `url("${slide.image}")`,
                                }}
                            />

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0B3B24]/95 via-[#0B3B24]/75 to-transparent" />

                            {/* Content */}
                            <div className="relative mx-auto flex h-full max-w-[1240px] flex-col justify-center px-4 md:px-6">
                                <div className="flex max-w-2xl flex-col gap-5 text-white">
                                    {/* Badge */}
                                    {slide.badge && (
                                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-[#0B3B24]/80 px-3 py-1 backdrop-blur-sm">
                                            {slide.badge.icon === "dot" ? (
                                                <span className="h-2 w-2 animate-ping rounded-full bg-amber-cta" />
                                            ) : (
                                                <span className="material-symbols-outlined text-[16px] text-emerald-300">
                                                    {slide.badge.icon}
                                                </span>
                                            )}

                                            <span className="text-xs font-bold uppercase tracking-wider text-emerald-100">
                                                {slide.badge.text}
                                            </span>
                                        </div>
                                    )}

                                    {/* Heading */}
                                    <h1 className="text-[3.5rem] font-bold leading-[1.1] tracking-tight text-white drop-shadow-sm md:text-[4rem]">
                                        {slide.title}

                                        {slide.titleAccent && (
                                            <>
                                                <br />

                                                <span className="text-[#FBBF24]">
                                                    {slide.titleAccent}
                                                </span>
                                            </>
                                        )}
                                    </h1>

                                    {/* Description */}
                                    <p className="max-w-xl text-lg leading-relaxed text-emerald-50/95">
                                        {slide.description}
                                    </p>

                                    {/* Buttons */}
                                    <div className="flex flex-wrap items-center gap-4 pt-4">
                                        {slide.primaryCta && (
                                            <a
                                                className="btn-interactive inline-flex items-center gap-2 rounded-lg bg-amber-cta px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-amber-hover"
                                                href={slide.primaryCta.href}
                                                target={
                                                    slide.primaryCta.external
                                                        ? "_blank"
                                                        : undefined
                                                }
                                                rel={
                                                    slide.primaryCta.external
                                                        ? "noopener noreferrer"
                                                        : undefined
                                                }
                                            >
                                                <span className="material-symbols-outlined text-[20px]">
                                                    {slide.primaryCta.icon}
                                                </span>

                                                <span>
                                                    {slide.primaryCta.label}
                                                </span>
                                            </a>
                                        )}

                                        {slide.secondaryCta && (
                                            <a
                                                className="btn-interactive inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/15 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/25"
                                                href={slide.secondaryCta.href}
                                            >
                                                <span>
                                                    {slide.secondaryCta.label}
                                                </span>

                                                <span className="material-symbols-outlined text-[18px]">
                                                    {slide.secondaryCta.icon}
                                                </span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* Previous button */}
                {slides.length > 1 && (
                    <button
                        type="button"
                        aria-label="Previous Slide"
                        onClick={prev}
                        className="btn-interactive absolute left-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/40 focus:outline-none"
                    >
                        <span className="material-symbols-outlined text-[28px]">
                            chevron_left
                        </span>
                    </button>
                )}

                {/* Next button */}
                {slides.length > 1 && (
                    <button
                        type="button"
                        aria-label="Next Slide"
                        onClick={next}
                        className="btn-interactive absolute right-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/40 focus:outline-none"
                    >
                        <span className="material-symbols-outlined text-[28px]">
                            chevron_right
                        </span>
                    </button>
                )}

                {/* Slide indicators */}
                {slides.length > 1 && (
                    <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3">
                        {slides.map((slide, index) => {
                            const isActive = index === current;

                            return (
                                <button
                                    key={slide.id ?? index}
                                    type="button"
                                    aria-label={`Go to slide ${index + 1}`}
                                    onClick={() => goTo(index)}
                                    className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                                        isActive
                                            ? "w-10 bg-amber-cta"
                                            : "w-3 bg-white/40 hover:bg-white/70"
                                    }`}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}