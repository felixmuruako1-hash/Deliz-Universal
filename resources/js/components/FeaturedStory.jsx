export default function FeaturedStory({ story }) {
    if (!story) return null;

    return (
        <section className="w-full py-24 px-4 md:px-6 bg-surface-cream">
            <div className="max-w-[1240px] mx-auto">
                <div className="bg-white rounded-2xl border border-border-subtle shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
                    {/* Image */}
                    <div className="lg:col-span-6 p-4 md:p-6">
                        <div className="content-image-reveal h-[380px] lg:h-[490px] relative rounded-xl overflow-hidden shadow-sm">
                            <img
                                className="w-full h-full object-cover"
                                alt={story.imageAlt || story.title}
                                src={story.image}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-text/50 via-transparent to-transparent lg:hidden" />
                        </div>
                    </div>

                    {/* Story Content */}
                    <div className="lg:col-span-6 p-6 md:p-10 lg:p-16 flex flex-col gap-5">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-cta" />

                            <span className="text-xs uppercase tracking-wider text-amber-cta font-bold">
                                {story.eyebrow}
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl text-forest-deep font-bold tracking-tight">
                            {story.title}
                        </h2>

                        <blockquote className="text-lg text-charcoal-text leading-relaxed">
                            "{story.quote}"
                        </blockquote>

                        <div className="inline-flex items-center gap-3 bg-emerald-50/80 px-4 py-3 rounded-lg border border-emerald-200/60 w-fit">
                            <span className="material-symbols-outlined text-success-leaf text-[22px]">
                                {story.highlightIcon}
                            </span>

                            <span className="text-sm text-forest-deep font-semibold">
                                {story.highlightText}
                            </span>
                        </div>

                        <div className="pt-2">
                            <a
                                className="inline-flex items-center gap-2 text-forest-deep hover:text-amber-cta font-semibold text-sm font-bold group transition-colors"
                                data-path={story.ctaPath}
                                href={story.ctaHref || "#"}
                            >
                                <span>Read Full Story</span>

                                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                                    arrow_forward
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}