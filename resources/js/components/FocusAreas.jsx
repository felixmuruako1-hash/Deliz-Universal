export default function FocusAreas({ categories = [] }) {
    return (
        <section
            className="w-full py-24 px-4 md:px-6 bg-surface-cream border-y border-border-subtle"
            id="focus-areas"
        >
            <div className="max-w-[1240px] mx-auto flex flex-col gap-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="flex flex-col gap-2.5 max-w-xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 w-fit">
                            <span className="w-2 h-2 rounded-full bg-amber-cta" />

                            <span className="text-[11px] uppercase tracking-wider text-forest-deep font-bold">
                                Pillars of Change
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl text-forest-deep font-bold tracking-tight leading-tight">
                            Our Strategic Focus Areas
                        </h2>

                        <p className="text-base text-charcoal-muted leading-relaxed">
                            Targeted humanitarian solutions built hand-in-hand with
                            grassroots leaders to achieve enduring local self-sufficiency.
                        </p>
                    </div>

                    <a
                        className="inline-flex items-center gap-2 text-forest-deep hover:text-amber-cta font-semibold text-[15px] transition-colors duration-200 group"
                        data-path="our-work"
                        href="#"
                    >
                        <span>Explore All Domains</span>

                        <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-1">
                            arrow_forward
                        </span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className={`focus-card group bg-white rounded-xl p-7 border border-border-subtle hover:border-amber-cta/60 shadow-[0_2px_8px_rgba(11,59,36,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                                cat.wide
                                    ? "md:col-span-2 lg:col-span-2"
                                    : ""
                            }`}
                        >
                            <div
                                className={`flex ${
                                    cat.wide
                                        ? "flex-col sm:flex-row gap-6 items-start"
                                        : "flex-col gap-5"
                                }`}
                            >
                                <div className="focus-icon-badge w-12 h-12 rounded-xl bg-emerald-50 text-forest-deep group-hover:bg-amber-cta group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm">
                                    <span className="material-symbols-outlined text-[26px]">
                                        {cat.icon}
                                    </span>
                                </div>

                                <div className="focus-content-block flex flex-col gap-2.5">
                                    <h3 className="text-xl text-forest-deep font-bold group-hover:text-amber-cta transition-colors tracking-tight">
                                        {cat.name}
                                    </h3>

                                    <p
                                        className={`text-[15px] text-charcoal-muted leading-relaxed ${
                                            cat.wide ? "max-w-2xl" : ""
                                        }`}
                                    >
                                        {cat.description}
                                    </p>
                                </div>
                            </div>

                            <div className="pt-6 mt-6 border-t border-border-subtle/80 flex items-center justify-between">
                                <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full">
                                    {cat.stat}
                                </span>

                                <a
                                    className="inline-flex items-center gap-1.5 text-amber-cta hover:text-amber-hover font-semibold text-[14px] group-hover:underline"
                                    data-path="our-work"
                                    href="#"
                                >
                                    <span>Learn More</span>

                                    <span className="material-symbols-outlined text-[16px]">
                                        arrow_forward
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}