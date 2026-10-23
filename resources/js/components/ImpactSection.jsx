export default function ImpactSection({ metrics = [] }) {
    return (
        <section
            className="relative w-full py-24 px-4 md:px-6 bg-forest-deep text-white overflow-hidden"
            id="impact"
        >
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg
                    className="w-full h-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0,0 C30,40 70,20 100,50 L100,100 L0,100 Z"
                        fill="currentColor"
                    />
                </svg>
            </div>

            <div className="relative max-w-[1240px] mx-auto flex flex-col gap-16">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
                    <div className="inline-flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-cta" />

                        <span className="text-xs uppercase tracking-wider text-amber-cta font-bold">
                            MEASURABLE RESULTS
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl text-white font-bold tracking-tight">
                        Our Impact
                    </h2>

                    <p className="text-lg text-emerald-100">
                        Every project begins with a community need and ends with
                        measurable impact.
                    </p>
                </div>

                {/* Impact Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((m) => (
                        <div
                            key={m.id}
                            className="impact-beam-card p-6 flex flex-col items-center text-center gap-2 hover:-translate-y-1 transition-all duration-300"
                        >
                            <span className="text-4xl md:text-5xl text-[#FBBF24] font-extrabold">
                                {m.value}
                            </span>

                            <span className="text-lg text-white font-semibold">
                                {m.label}
                            </span>

                            <p className="text-sm text-emerald-100/90 leading-tight mt-1">
                                {m.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Transparency Guarantee */}
                <div className="w-full max-w-2xl mx-auto rounded-xl bg-[#0D3E2E]/50 p-4 border border-emerald-400/30 flex items-center gap-3.5 text-emerald-100 text-xs">
                    <span className="material-symbols-outlined text-emerald-300 text-[24px] shrink-0">
                        fact_check
                    </span>

                    <p className="leading-relaxed">
                        <strong>Transparency Guarantee:</strong> Audited annually
                        by independent chartered public accountants. 94 cents of
                        every dollar goes directly to frontline community field
                        programs.
                    </p>
                </div>
            </div>
        </section>
    );
}