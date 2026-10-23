const SOCIAL = [
    { icon: "public", label: "Community Network" },
    { icon: "forum", label: "Global Pulse" },
    { icon: "photo_camera", label: "Impact Gallery" },
    { icon: "hub", label: "Professional Network" },
    { icon: "smart_display", label: "Documentary Channel" },
];

const EXPLORE_LINKS = [
    { path: "about-us", label: "About Us" },
    { path: "our-work", label: "Our Work" },
    { path: "projects", label: "Projects" },
    { path: "impact", label: "Impact" },
    { path: "community-stories", label: "Community Stories" },
    { path: "gallery", label: "Gallery" },
    { path: "blog", label: "Blog" },
];

const INVOLVED_LINKS = [
    {
        path: "donate",
        label: "Donate Today",
        icon: "volunteer_activism",
        href: "https://paystack.shop/pay/7i7yj5mbwj",
        external: true,
    },
    { path: "volunteer", label: "Become a Volunteer", icon: "handshake" },
    { path: "partner-with-us", label: "Partner With Us", icon: "corporate_fare" },
    { path: "careers", label: "Careers", icon: "work" },
    { path: "contact", label: "Contact Us", icon: "mail" },
];

export default function Footer() {
    return (
        <footer className="w-full bg-forest-darkest text-cream-surface">
            <div className="max-w-[1240px] mx-auto px-4 md:px-6 pt-24 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <span className="text-xl text-white tracking-tight font-bold">
                                Deliz Initiative
                            </span>
                        </div>

                        <p className="text-base text-emerald-100/80 leading-relaxed">
                            Working together to create opportunities, improve lives
                            and build stronger communities.
                        </p>

                        <div className="flex items-center gap-3 pt-2">
                            {SOCIAL.map((s) => (
                                <a
                                    key={s.label}
                                    aria-label={s.label}
                                    className="btn-interactive w-9 h-9 rounded-full bg-[#0D3E2E] hover:bg-amber-cta flex items-center justify-center text-white"
                                    href="#"
                                >
                                    <span className="material-symbols-outlined text-[18px]">
                                        {s.icon}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm text-white uppercase tracking-wider font-semibold">
                            Explore
                        </h3>

                        <nav className="flex flex-col gap-2.5 text-sm text-emerald-100/80">
                            {EXPLORE_LINKS.map((l) => (
                                <a
                                    key={l.path}
                                    className="hover:text-amber-cta transition-colors flex items-center gap-1.5 py-0.5"
                                    data-path={l.path}
                                    href="#"
                                >
                                    <span className="material-symbols-outlined text-[14px] text-amber-cta">
                                        chevron_right
                                    </span>
                                    {l.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm text-white uppercase tracking-wider font-semibold">
                            Get Involved
                        </h3>

                        <nav className="flex flex-col gap-2.5 text-sm text-emerald-100/80">
                            {INVOLVED_LINKS.map((l) => (
                                <a
                                    key={l.path}
                                    className="hover:text-amber-cta transition-colors flex items-center gap-1.5 py-0.5"
                                    data-path={l.path}
                                    href={l.href ?? "#"}
                                    target={l.external ? "_blank" : undefined}
                                    rel={l.external ? "noopener noreferrer" : undefined}
                                >
                                    <span className="material-symbols-outlined text-[14px] text-amber-cta">
                                        {l.icon}
                                    </span>
                                    {l.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm text-white uppercase tracking-wider font-semibold">
                            Headquarters
                        </h3>

                        <div className="flex flex-col gap-3 text-sm text-emerald-100/80">
                            <div className="flex items-start gap-2.5">
                                <span className="material-symbols-outlined text-amber-cta text-[18px] shrink-0 mt-0.5">
                                    location_on
                                </span>

                                <span>
                                    42 Kibera Reach Road, Nairobi
                                    <br />
                                    <span className="text-xs text-emerald-300/70">
                                        Regional Operations: East &amp; Horn of Africa
                                    </span>
                                </span>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <span className="material-symbols-outlined text-amber-cta text-[18px] shrink-0">
                                    call
                                </span>

                                <a
                                    className="hover:text-amber-cta transition-colors"
                                    href="tel:+254208924000"
                                >
                                    +254 (0) 20 892 4000
                                </a>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <span className="material-symbols-outlined text-amber-cta text-[18px] shrink-0">
                                    mail
                                </span>

                                <a
                                    className="hover:text-amber-cta transition-colors"
                                    href="mailto:contact@Deliz-initiative.ngo"
                                >
                                    contact@Deliz-initiative.ngo
                                </a>
                            </div>

                            <div className="mt-2 inline-flex items-center gap-2 bg-[#0D3E2E] px-3 py-1.5 rounded-lg border border-emerald-500/20">
                                <span className="material-symbols-outlined text-emerald-400 text-[18px]">
                                    verified
                                </span>

                                <span className="text-xs text-white font-bold">
                                    NGO Board Registered #NGO/2014/892
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-emerald-950 bg-black/20">
                <div className="max-w-[1240px] mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-emerald-100/70">
                    <p>© 2026 Deliz Initiative. All Rights Reserved.</p>

                    <div className="flex flex-wrap items-center gap-6">
                        <a
                            className="hover:text-amber-cta transition-colors"
                            data-path="privacy-policy"
                            href="#"
                        >
                            Privacy Policy
                        </a>

                        <a
                            className="hover:text-amber-cta transition-colors"
                            data-path="terms-of-service"
                            href="#"
                        >
                            Terms of Service
                        </a>

                        <a
                            className="hover:text-amber-cta transition-colors"
                            data-path="financial-transparency"
                            href="#"
                        >
                            Financial Transparency
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}