const BG_IMAGE =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDn9THquYBVBEj_jHCxYjcVqKaTvpyLgjouRnXoVTvFePx_yxIyGaVenZiFk5QkJFbWkfnhiUlRHX4Kggl5WZkVa2WSeks6wEqn91uzcCMVL70aj4KFOY7vJReGD3INrh8qtW9KPt79I_LbEyQMIOMI1oMFbwiXuMHCMVqIjZl4tJOM861Qf79qjKbcg6mPxlCn31osiEjyc8prdPPiMk0C6LUoOGbxva99FCLUUneh2-kSvlpOFJo";

export default function FinalCTA() {
    return (
        <section className="relative w-full py-24 px-4 md:px-6 overflow-hidden bg-forest-darkest text-white">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-25"
                aria-hidden="true"
                style={{ backgroundImage: `url('${BG_IMAGE}')` }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#082618] via-[#0B3B24]/90 to-[#0B3B24]/80" />

            <div className="relative max-w-[960px] mx-auto text-center flex flex-col items-center gap-6 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D3E2E]/80 border border-white/20">
                    <span className="material-symbols-outlined text-amber-cta text-[18px]">
                        favorite
                    </span>

                    <span className="text-xs uppercase tracking-wider text-emerald-100 font-bold">
                        EVERY CONTRIBUTION MATTERS
                    </span>
                </div>

                <h2 className="text-3xl md:text-[3rem] md:leading-[1.15] text-white font-bold tracking-tight">
                    Together, We Can Make A Difference.
                </h2>

                <p className="text-lg text-emerald-100 max-w-2xl leading-relaxed">
                    Your support can help us reach more communities, support more
                    families and create lasting, generational change across East
                    Africa.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                    <a
                        className="btn-interactive inline-flex items-center gap-2 bg-amber-cta hover:bg-amber-hover text-white font-semibold text-sm px-10 py-4 rounded-lg shadow-lg"
                        data-path="donate"
                        href="https://paystack.shop/pay/7i7yj5mbwj"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="material-symbols-outlined text-[20px]">
                            volunteer_activism
                        </span>

                        <span>Donate Now</span>
                    </a>

                    <a
                        className="btn-interactive inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold text-sm px-10 py-4 rounded-lg backdrop-blur-sm border border-white/30"
                        data-path="contact"
                        href="#"
                    >
                        <span>Get Involved</span>

                        <span className="material-symbols-outlined text-[18px]">
                            group
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}