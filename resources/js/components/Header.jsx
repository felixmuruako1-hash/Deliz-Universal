
import { useState } from "react";

const NAV_LINKS = [
    { path: "home", label: "Home" },
    { path: "about-us", label: "About Us" },
    { path: "our-work", label: "Our Work" },
    { path: "projects", label: "Projects" },
    { path: "impact", label: "Impact" },
    { path: "gallery", label: "Gallery" },
    { path: "blog", label: "Blog" },
];

const DONATE_URL = "https://paystack.shop/pay/7i7yj5mbwj";

export default function Header({ activePath = "home" }) {
    const [open, setOpen] = useState(false);

    const handleNavClick = (event, path) => {
        event.preventDefault();

        const target = document.getElementById(path);

        if (!target) {
            console.error(
                `Section with id="${path}" was not found. Check the section ID on your homepage.`
            );
            setOpen(false);
            return;
        }

        target.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        window.history.replaceState(null, "", `#${path}`);
        setOpen(false);
    };

    const renderNavLinks = (mobile = false) =>
        NAV_LINKS.map((link) => {
            const active = activePath === link.path;

            return (
                <a
                    key={link.path}
                    href={`#${link.path}`}
                    aria-current={active ? "page" : undefined}
                    onClick={(event) =>
                        handleNavClick(event, link.path)
                    }
                    className={
                        mobile
                            ? `block rounded-lg px-4 py-3 transition-colors ${
                                  active
                                      ? "bg-emerald-50 font-semibold text-[#0B3B24]"
                                      : "text-[#0B3B24] hover:bg-[#0B3B24]/5"
                              }`
                            : `inline-flex h-full items-center border-b-2 text-[15px] transition-colors ${
                                  active
                                      ? "border-[#EA580C] font-semibold text-[#0B3B24]"
                                      : "border-transparent font-medium text-[#0B3B24]/80 hover:border-[#EA580C]/60 hover:text-[#EA580C]"
                              }`
                    }
                >
                    {link.label}
                </a>
            );
        });

    return (
        <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-[#0D3E2E]/10 bg-white/95 shadow-sm backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <a
                    href="#home"
                    onClick={(event) => handleNavClick(event, "home")}
                    aria-label="Deliz Initiative Home"
                    className="flex shrink-0 items-center gap-3"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B3B24] text-white">
                        <span className="material-symbols-outlined text-[22px]">
                            volunteer_activism
                        </span>
                    </div>

                    <span className="whitespace-nowrap text-lg font-bold tracking-tight text-[#0B3B24]">
                        Deliz Initiative
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav
                    className="hidden h-full items-center gap-6 xl:flex"
                    aria-label="Main Navigation"
                >
                    {renderNavLinks()}
                </nav>

                {/* Right Actions */}
                <div className="flex shrink-0 items-center gap-2 md:gap-3">
                    <a
                        href={DONATE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Donate securely to Amani Initiative via Paystack"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#EA580C] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#C2410C] md:px-5"
                    >
                        <span className="material-symbols-outlined text-[19px]">
                            volunteer_activism
                        </span>
                        <span>Donate Now</span>
                    </a>

                    <a
                        href="/member-portal"
                        aria-label="Member Portal"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B3B24]/10 text-[#0B3B24] transition-colors hover:bg-[#0B3B24] hover:text-white"
                    >
                        <span className="material-symbols-outlined text-[19px]">
                            person
                        </span>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        type="button"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        aria-controls="mobileDrawer"
                        onClick={() => setOpen((value) => !value)}
                        className="rounded-lg p-2 text-[#0B3B24] hover:bg-[#0B3B24]/5 focus:outline-none focus:ring-2 focus:ring-[#EA580C] xl:hidden"
                    >
                        <span className="material-symbols-outlined text-[26px]">
                            {open ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                id="mobileDrawer"
                hidden={!open}
                className="border-t border-[#0D3E2E]/10 bg-white shadow-xl xl:hidden"
            >
                <nav
                    className="mx-auto flex max-w-[1240px] flex-col gap-1 px-4 py-5"
                    aria-label="Mobile Navigation"
                >
                    {renderNavLinks(true)}

                    <a
                        href={DONATE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#EA580C] py-3 font-semibold text-white hover:bg-[#C2410C]"
                    >
                        <span className="material-symbols-outlined">
                            volunteer_activism
                        </span>
                        Donate Now
                    </a>
                </nav>
            </div>
        </header>
    );
}
