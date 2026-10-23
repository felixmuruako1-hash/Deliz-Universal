export default function Testimonials({ testimonials = [] }) {
    return (
        <section className="w-full py-24 px-4 md:px-6 bg-cream-surface">
            <div className="max-w-[1240px] mx-auto flex flex-col gap-16">
                <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-wider text-forest-deep font-bold">
                        VOICES FROM THE FIELD
                    </span>

                    <h2 className="text-3xl md:text-4xl text-forest-deep font-bold tracking-tight">
                        Stories From The Communities
                    </h2>

                    <p className="text-lg text-charcoal-muted">
                        First-person reflections from the people leading and living
                        these transformations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t) => (
                        <div
                            key={t.id}
                            className="bg-white p-6 rounded-xl border border-border-subtle shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between gap-6 relative"
                        >
                            <span className="material-symbols-outlined text-amber-cta/25 text-[48px] absolute top-4 right-4">
                                format_quote
                            </span>

                            <p className="text-base text-charcoal-text leading-relaxed relative z-10 italic">
                                "{t.quote}"
                            </p>

                            <div className="flex items-center gap-3.5 pt-4 border-t border-border-subtle">
                                <div className="w-12 h-12 rounded-full bg-emerald-50 text-forest-deep font-bold flex items-center justify-center shrink-0">
                                    {t.initials}
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-lg text-forest-deep font-bold">
                                        {t.name}
                                    </span>

                                    <span className="text-sm text-charcoal-muted">
                                        {t.role}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}