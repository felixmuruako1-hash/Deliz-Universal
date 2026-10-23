
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { path: "/our-work", label: "Our Work" },
    { path: "/projects", label: "Projects" },
    { path: "/impact", label: "Impact" },
    { path: "/gallery", label: "Gallery" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
];

const ABOUT_IMAGES = [
    {
        src: "/storage/Images/about/education%20access.jpg",
        alt: "School children learning together in a classroom",
        label: "Education Access",
        title: "Dignified Classrooms",
        description:
            "Supporting children through accessible education and community-led literacy programmes.",
    },
    {
        src: "/storage/Images/about/solar%20infrastructure.jpg",
        alt: "Community members accessing solar-powered water infrastructure",
        label: "Solar Infrastructure",
        title: "Clean Water Networks",
        description:
            "Supporting access to safe drinking water through sustainable, solar-powered infrastructure.",
    },
    {
        src: "/storage/Images/about/primary%20healthcare%20.jpg",
        alt: "Healthcare worker providing care to a young child",
        label: "Primary Healthcare",
        title: "Mobile Medical Outreaches",
        description:
            "Supporting clinical screenings, childhood immunisation and maternal healthcare in underserved communities.",
    },
];

const CORE_VALUES = [
    {
        icon: "policy",
        title: "Radical Transparency",
        text: "Promoting accountability, transparent reporting and responsible management of community resources.",
    },
    {
        icon: "volunteer_activism",
        title: "Grassroots Empathy",
        text: "Listening to community members and working with them to identify and address local needs.",
    },
    {
        icon: "query_stats",
        title: "Measurable Impact",
        text: "Evaluating programmes through meaningful outcomes and ongoing assessment of community needs.",
    },
    {
        icon: "eco",
        title: "Sustainable Stewardship",
        text: "Encouraging sustainable infrastructure, environmental responsibility and community ownership.",
    },
];

const MILESTONES = [
    {
        year: "'12",
        yearFull: "2012",
        tag: "Genesis",
        title: "Founded in Kibera",
        body: "Began with community-focused literacy support and initiatives designed to improve learning opportunities for children.",
    },
    {
        year: "'16",
        yearFull: "2016",
        tag: "Water Expansion",
        title: "Arid Borehole Pilot",
        body: "Expanded water access initiatives to communities facing water scarcity and challenging environmental conditions.",
    },
    {
        year: "'20",
        yearFull: "2020",
        tag: "Rapid Response",
        title: "Mobile Medical Clinics",
        body: "Developed mobile healthcare outreach initiatives to help underserved communities access essential medical services.",
    },
    {
        year: "'25",
        yearFull: "2025",
        tag: "Scale & Governance",
        title: "Community Development",
        body: "Continued supporting community-led infrastructure and strengthening accountability in development programmes.",
        featured: true,
    },
];

const LEADERSHIP = [
    {
        img: "/storage/Images/about/Amy.jpg",
        name: "Dr. Amy Grace",
        role: "Executive Director & Co-Founder",
        bio: "Leads community development initiatives focused on sustainable growth, education and access to essential services.",
        location: "Nairobi / Field HQ",
        linkedin: "",
    },
    {
        img: "/storage/Images/about/pelumi.jpg",
        name: "Pelumi Adebayo, PA",
        role: "Head of Field Infrastructure",
        bio: "Supports infrastructure initiatives, water access projects and community capacity development.",
        location: "Lodwar, Turkana",
        linkedin: "",
    },
    {
        img: "/storage/Images/about/jasmine.jpg",
        name: "Dr. Jasmine, MD",
        role: "Chief Medical Officer",
        bio: "Supports community healthcare initiatives, preventive care and outreach to underserved populations.",
        location: "Eldoret & Mobile",
        linkedin: "",
    },
    {
        img: "/storage/Images/about/Tosin.jpg",
        name: "Tosin Hassan",
        role: "Director of Community Trusts",
        bio: "Works to strengthen community participation, local partnerships and responsible project ownership.",
        location: "Garissa / Wajir",
        linkedin: "",
    },
];

const ALLOCATION = [
    {
        color: "#0D3E2E",
        title: "Direct Field Programs",
        sub: "Community programmes and essential services",
        pct: "94.0%",
    },
    {
        color: "#F77E28",
        title: "Administration & Field Safety",
        sub: "Administration, governance and field operations",
        pct: "4.0%",
    },
    {
        color: "#717974",
        title: "Fundraising & Donor Engagement",
        sub: "Donor communication and fundraising",
        pct: "2.0%",
    },
];

const REPORTS = [
    {
        title: "2025 Audited Financial Statement",
        meta: "Certified PDF • 4.2 MB • Released Jan 2026",
        href: "",
    },
    {
        title: "2024 Annual Impact & Audit Report",
        meta: "Certified PDF • 6.8 MB",
        href: "",
    },
    {
        title: "2023 Financial Governance Review",
        meta: "Certified PDF • 3.9 MB",
        href: "",
    },
];

const TESTIMONIALS = [
    {
        quote:
            "Before the water project, our young girls walked long distances to collect water. Having a source closer to our school has made daily life easier for our community.",
        initials: "EK",
        name: "Ekiru Korinyang",
        role: "Community Water Stewardship Council",
    },
    {
        quote:
            "Community development works best when local people are listened to. Working together helps us identify the needs that matter most to our children.",
        initials: "MN",
        name: "Mary Njeri Chege",
        role: "Community Health Volunteer",
    },
];

function SectionLabel({ children }) {
    return (
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-bold">
            {children}
        </span>
    );
}

function RevealImage({
    src,
    alt,
    index,
    imageRefs,
    visibleImages,
    className = "",
    delay = 0,
}) {
    const visible = Boolean(visibleImages[index]);

    return (
        <img
            ref={(element) => {
                imageRefs.current[index] = element;
            }}
            src={src}
            alt={alt}
            loading={index < 3 ? "eager" : "lazy"}
            decoding="async"
            className={className}
            onError={(event) => {
                event.currentTarget.style.visibility = "hidden";
            }}
            style={{
                opacity: visible ? 1 : 0,
                animation: visible
                    ? `aboutImageReveal 1800ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms both`
                    : "none",
                willChange: "transform, opacity",
            }}
        />
    );
}

export default function AboutSection() {
    const imageRefs = useRef([]);
    const [visibleImages, setVisibleImages] = useState({});

    useEffect(() => {
        if (
            typeof window === "undefined" ||
            !("IntersectionObserver" in window)
        ) {
            setVisibleImages(
                Object.fromEntries(
                    imageRefs.current.map((image, index) => [
                        index,
                        Boolean(image),
                    ])
                )
            );
            return undefined;
        }

        const elements = imageRefs.current.filter(Boolean);
        const animationFrames = new Set();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = imageRefs.current.indexOf(
                        entry.target
                    );

                    if (index === -1) return;

                    if (entry.isIntersecting) {
                        // Reset the animation before replaying it.
                        setVisibleImages((previous) => ({
                            ...previous,
                            [index]: false,
                        }));

                        const frame = requestAnimationFrame(() => {
                            animationFrames.delete(frame);

                            setVisibleImages((previous) => ({
                                ...previous,
                                [index]: true,
                            }));
                        });

                        animationFrames.add(frame);
                    } else {
                        // Allow the reveal to replay on re-entry.
                        setVisibleImages((previous) => {
                            if (!previous[index]) return previous;

                            return {
                                ...previous,
                                [index]: false,
                            };
                        });
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -30px 0px",
            }
        );

        elements.forEach((element) => observer.observe(element));

        return () => {
            observer.disconnect();

            animationFrames.forEach((frame) => {
                cancelAnimationFrame(frame);
            });

            animationFrames.clear();
        };
    }, []);

    return (
        <>
            <style>{`
                @keyframes aboutImageReveal {
                    0% {
                        opacity: 0;
                        transform: scale(0.92) translateY(24px);
                    }
                    60% {
                        opacity: 0.75;
                        transform: scale(0.99) translateY(4px);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .about-reveal-image {
                        animation: none !important;
                        transition: none !important;
                    }
                }
            `}</style>

            {/* Breadcrumb and Introduction */}
            <section className="relative w-full overflow-hidden bg-surface-cream px-6 pb-16 pt-10 lg:px-12">
                <div className="mx-auto flex max-w-7xl flex-col gap-8">
                    <nav
                        aria-label="Breadcrumb"
                        className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant"
                    >
                        <a
                            className="transition-colors hover:text-primary"
                            href="/"
                        >
                            Home
                        </a>

                        <span
                            aria-hidden="true"
                            className="material-symbols-outlined text-[16px] text-outline"
                        >
                            chevron_right
                        </span>

                        <span
                            aria-current="page"
                            className="font-semibold text-primary"
                        >
                            About Us
                        </span>
                    </nav>

                    <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
                        <div className="flex flex-col gap-4 lg:col-span-8">
                            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-surface-container-high px-3.5 py-1.5">
                                <span className="h-2 w-2 animate-pulse rounded-full bg-on-tertiary-container" />

                                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">
                                    Grassroots Stewardship Since 2012
                                </span>
                            </div>

                            <h1 className="font-display text-display-mobile tracking-tight text-primary md:text-display">
                                Rooted in Community,{" "}
                                <br className="hidden sm:inline" />
                                <span className="text-on-tertiary-container">
                                    Driven by Impact.
                                </span>
                            </h1>

                            <p className="max-w-2xl font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
                                Amani Initiative works to strengthen
                                communities through locally driven development
                                initiatives, including education, access to
                                clean water and primary healthcare.
                            </p>
                        </div>

                        <div className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl bg-primary p-8 text-on-primary shadow-md lg:col-span-4">
                            <div
                                aria-hidden="true"
                                className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary-container/40 blur-2xl"
                            />

                            <div className="relative flex items-start justify-between">
                                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed">
                                    Official Registration
                                </span>

                                <span className="material-symbols-outlined text-2xl text-primary-fixed">
                                    verified
                                </span>
                            </div>

                            <div className="relative">
                                <div className="break-words font-display text-[32px] font-bold leading-tight text-on-primary">
                                    #NGO/2014/892
                                </div>

                                <p className="mt-1 font-body-sm text-body-sm text-primary-fixed-dim">
                                    Registration details to be verified
                                    against the official NGO register.
                                </p>
                            </div>

                            <div className="relative flex items-center justify-between border-t border-primary-container pt-4 font-label-md text-label-md">
                                <span>Direct Field Efficiency</span>
                                <span className="font-bold text-on-tertiary-container">
                                    94.0%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programme Image Cards */}
            <section className="w-full bg-surface-container-low px-6 py-12 lg:px-12">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
                    {ABOUT_IMAGES.map((item, index) => (
                        <article
                            key={item.title}
                            className="group relative flex flex-col overflow-hidden rounded-2xl bg-surface-container-lowest shadow-sm"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <RevealImage
                                    src={item.src}
                                    alt={item.alt}
                                    index={index}
                                    imageRefs={imageRefs}
                                    visibleImages={visibleImages}
                                    className="about-reveal-image h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    delay={index * 250}
                                />

                                <span className="absolute left-4 top-4 rounded-full bg-primary/80 px-3 py-1 font-label-sm text-label-sm text-on-primary backdrop-blur-md">
                                    {item.label}
                                </span>
                            </div>

                            <div className="flex flex-col gap-2 p-6">
                                <h3 className="font-headline-sm text-headline-sm text-primary">
                                    {item.title}
                                </h3>

                                <p className="font-body-sm text-body-sm text-on-surface-variant">
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Mission, Vision and Values */}
            <section className="w-full bg-surface-cream px-6 py-20 lg:px-12">
                <div className="mx-auto flex max-w-7xl flex-col gap-12">
                    <div>
                        <SectionLabel>Our Foundation</SectionLabel>

                        <h2 className="mt-2 max-w-3xl font-headline-lg text-headline-lg text-primary">
                            Guiding Principles for Every Community We Serve
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
                        <article className="flex flex-col justify-between gap-4 rounded-2xl border-l-4 border-l-primary bg-surface-container-lowest p-6 shadow-sm lg:col-span-6">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-high text-primary">
                                    <span className="material-symbols-outlined text-xl">
                                        target
                                    </span>
                                </div>

                                <h3 className="font-headline-sm text-headline-sm text-primary">
                                    Our Mission
                                </h3>
                            </div>

                            <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                                To work alongside underserved communities to
                                expand opportunities through education, clean
                                water, healthcare and sustainable local
                                development.
                            </p>

                            <div className="flex items-center gap-2 font-label-md text-label-md font-bold text-primary">
                                <span>Action-first methodology</span>
                                <span className="material-symbols-outlined text-[18px]">
                                    arrow_forward
                                </span>
                            </div>
                        </article>

                        <article className="flex flex-col justify-between gap-4 rounded-2xl border-l-4 border-l-on-tertiary-container bg-surface-container-lowest p-6 shadow-sm lg:col-span-6">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-tertiary-fixed text-tertiary">
                                    <span className="material-symbols-outlined text-xl">
                                        visibility
                                    </span>
                                </div>

                                <h3 className="font-headline-sm text-headline-sm text-primary">
                                    Our Vision
                                </h3>
                            </div>

                            <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                                A future where communities have the
                                opportunities, resources and local
                                partnerships they need to thrive with dignity
                                and resilience.
                            </p>

                            <div className="flex items-center gap-2 font-label-md text-label-md font-bold text-on-tertiary-container">
                                <span>Equitable opportunities</span>
                                <span className="material-symbols-outlined text-[18px]">
                                    arrow_forward
                                </span>
                            </div>
                        </article>

                        {CORE_VALUES.map((value) => (
                            <article
                                key={value.title}
                                className="flex flex-col gap-3 rounded-2xl bg-surface-container-lowest p-6 shadow-sm lg:col-span-3"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container text-primary">
                                    <span className="material-symbols-outlined text-[22px]">
                                        {value.icon}
                                    </span>
                                </div>

                                <h3 className="font-title-lg text-title-lg text-primary">
                                    {value.title}
                                </h3>

                                <p className="font-body-sm text-body-sm text-on-surface-variant">
                                    {value.text}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="w-full bg-surface-container-low px-6 py-20 lg:px-12">
                <div className="mx-auto flex max-w-7xl flex-col gap-16">
                    <div className="mx-auto flex max-w-3xl flex-col gap-3 text-center">
                        <SectionLabel>Our Journey</SectionLabel>

                        <h2 className="font-headline-lg text-headline-lg text-primary">
                            Milestones in Community Development
                        </h2>

                        <p className="font-body-md text-body-md text-on-surface-variant">
                            A journey focused on expanding opportunities,
                            strengthening local partnerships and supporting
                            sustainable community development.
                        </p>
                    </div>

                    <div className="relative grid grid-cols-1 gap-8 md:grid-cols-4">
                        <div className="absolute left-12 right-12 top-8 z-0 hidden h-1 bg-outline-variant/60 md:block" />

                        {MILESTONES.map((milestone) => (
                            <article
                                key={milestone.yearFull}
                                className={`relative z-10 flex flex-col gap-4 rounded-2xl bg-surface-container-lowest p-6 shadow-sm ${
                                    milestone.featured
                                        ? "ring-2 ring-on-tertiary-container/20"
                                        : ""
                                }`}
                            >
                                <div
                                    className={`flex h-12 w-12 items-center justify-center rounded-full font-display text-lg font-bold shadow-sm ${
                                        milestone.featured
                                            ? "bg-on-tertiary-container text-white"
                                            : "bg-primary text-on-primary"
                                    }`}
                                >
                                    {milestone.year}
                                </div>

                                <div className="flex flex-wrap items-baseline gap-2">
                                    <span className="font-display text-2xl font-bold text-primary">
                                        {milestone.yearFull}
                                    </span>

                                    <span className="font-label-sm text-label-sm font-bold uppercase text-on-tertiary-container">
                                        {milestone.tag}
                                    </span>
                                </div>

                                <h3 className="font-title-md text-title-md text-primary">
                                    {milestone.title}
                                </h3>

                                <p className="font-body-sm text-body-sm text-on-surface-variant">
                                    {milestone.body}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="w-full bg-surface-cream px-6 py-20 lg:px-12">
                <div className="mx-auto flex max-w-7xl flex-col gap-14">
                    <div>
                        <SectionLabel>People of Amani Initiative</SectionLabel>

                        <h2 className="mt-2 font-headline-lg text-headline-lg text-primary">
                            Executive Leadership &amp; Field Council
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {LEADERSHIP.map((person, personIndex) => {
                            const imageIndex = 3 + personIndex;

                            return (
                                <article
                                    key={person.name}
                                    className="flex flex-col overflow-hidden rounded-2xl bg-surface-container-lowest shadow-sm"
                                >
                                    <div className="relative h-72 w-full overflow-hidden bg-surface-container">
                                        <RevealImage
                                            src={person.img}
                                            alt={`Portrait of ${person.name}`}
                                            index={imageIndex}
                                            imageRefs={imageRefs}
                                            visibleImages={visibleImages}
                                            className="about-reveal-image h-full w-full object-cover object-top"
                                            delay={personIndex * 250}
                                        />
                                    </div>

                                    <div className="flex flex-1 flex-col justify-between gap-4 p-6">
                                        <div>
                                            <h3 className="font-title-lg text-title-lg text-primary">
                                                {person.name}
                                            </h3>

                                            <p className="font-label-md text-label-md font-semibold text-on-tertiary-container">
                                                {person.role}
                                            </p>

                                            <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">
                                                {person.bio}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between gap-2 border-t border-surface-container pt-4">
                                            <span className="font-label-sm text-label-sm text-outline">
                                                {person.location}
                                            </span>

                                            {person.linkedin && (
                                                <a
                                                    href={person.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`${person.name}'s LinkedIn profile`}
                                                    className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-subtle font-bold text-primary transition-colors hover:bg-primary hover:text-on-primary"
                                                >
                                                    <span className="text-xs">
                                                        in
                                                    </span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Financial Transparency */}
            <section className="w-full bg-surface-container-low px-6 py-20 lg:px-12">
                <div className="mx-auto flex max-w-7xl flex-col gap-12">
                    <div className="flex flex-col gap-3">
                        <SectionLabel>Accountability</SectionLabel>

                        <h2 className="font-headline-lg text-headline-lg text-primary">
                            Financial Allocation &amp; Annual Audits
                        </h2>

                        <p className="max-w-2xl font-body-md text-body-md text-on-surface-variant">
                            Financial reporting and independent reviews help
                            organisations demonstrate accountability and
                            responsible use of funds.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
                        <div className="flex flex-col justify-between gap-8 rounded-2xl bg-surface-container-lowest p-6 shadow-sm lg:col-span-7 lg:p-10">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <h3 className="font-title-lg text-title-lg text-primary">
                                    FY 2025 Resource Deployment
                                </h3>

                                <span className="rounded-full bg-surface-container px-3 py-1 font-label-sm text-label-sm font-bold text-primary">
                                    Financial Overview
                                </span>
                            </div>

                            <div className="flex flex-col items-center gap-8 sm:flex-row">
                                <div className="relative flex h-44 w-44 shrink-0 items-center justify-center">
                                    <svg
                                        className="h-full w-full -rotate-90"
                                        viewBox="0 0 100 100"
                                        role="img"
                                        aria-label="Illustrative resource allocation chart: 94 percent direct field programmes, 4 percent administration, and 2 percent fundraising"
                                    >
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            fill="none"
                                            stroke="#E2E8E4"
                                            strokeWidth="14"
                                        />

                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            fill="none"
                                            stroke="#0D3E2E"
                                            strokeWidth="14"
                                            strokeDasharray="236.24 251.32"
                                            strokeLinecap="butt"
                                        />

                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            fill="none"
                                            stroke="#F77E28"
                                            strokeWidth="14"
                                            strokeDasharray="10.05 251.32"
                                            strokeDashoffset="-236.24"
                                            strokeLinecap="butt"
                                        />

                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            fill="none"
                                            stroke="#717974"
                                            strokeWidth="14"
                                            strokeDasharray="5.03 251.32"
                                            strokeDashoffset="-246.29"
                                            strokeLinecap="butt"
                                        />
                                    </svg>

                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                        <span className="font-display text-headline-sm font-bold text-primary">
                                            94%
                                        </span>

                                        <span className="font-label-sm text-[10px] font-bold uppercase tracking-wider text-outline">
                                            Direct Aid
                                        </span>
                                    </div>
                                </div>

                                <div className="flex w-full flex-col gap-4">
                                    {ALLOCATION.map((item) => (
                                        <div
                                            key={item.title}
                                            className="flex items-center justify-between gap-3 rounded-lg bg-surface-subtle p-3"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span
                                                    className="h-3.5 w-3.5 shrink-0 rounded-full"
                                                    style={{
                                                        backgroundColor:
                                                            item.color,
                                                    }}
                                                />

                                                <div>
                                                    <h4 className="font-title-md text-sm font-semibold text-primary">
                                                        {item.title}
                                                    </h4>

                                                    <p className="font-body-sm text-xs text-on-surface-variant">
                                                        {item.sub}
                                                    </p>
                                                </div>
                                            </div>

                                            <span className="font-display text-title-md font-bold text-primary">
                                                {item.pct}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-3 rounded-xl bg-surface-container p-4 font-body-sm text-body-sm text-primary">
                                <span className="material-symbols-outlined text-[20px]">
                                    gavel
                                </span>

                                <span>
                                    Publish the applicable audit report and
                                    independent auditor details here once
                                    verified.
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between gap-6 rounded-2xl bg-surface-container-lowest p-6 shadow-sm lg:col-span-5 lg:p-10">
                            <div className="flex flex-col gap-2">
                                <h3 className="font-title-lg text-title-lg text-primary">
                                    Audited Reports &amp; Disclosures
                                </h3>

                                <p className="font-body-sm text-body-sm text-on-surface-variant">
                                    Make approved financial statements and
                                    impact reports available for public review.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                {REPORTS.map((report) =>
                                    report.href ? (
                                        <a
                                            key={report.title}
                                            href={report.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center justify-between gap-3 rounded-xl bg-surface-subtle p-4 transition-colors hover:bg-surface-container"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                                                    <span className="material-symbols-outlined text-[20px]">
                                                        description
                                                    </span>
                                                </div>

                                                <div>
                                                    <div className="font-title-md text-sm font-bold text-primary">
                                                        {report.title}
                                                    </div>

                                                    <div className="font-label-sm text-xs text-on-surface-variant">
                                                        {report.meta}
                                                    </div>
                                                </div>
                                            </div>

                                            <span className="material-symbols-outlined text-outline">
                                                download
                                            </span>
                                        </a>
                                    ) : (
                                        <div
                                            key={report.title}
                                            className="flex items-center gap-3 rounded-xl bg-surface-subtle p-4"
                                        >
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                <span className="material-symbols-outlined text-[20px]">
                                                    description
                                                </span>
                                            </div>

                                            <div>
                                                <div className="font-title-md text-sm font-bold text-primary">
                                                    {report.title}
                                                </div>

                                                <div className="font-label-sm text-xs text-on-surface-variant">
                                                    {report.meta}
                                                </div>

                                                <p className="mt-1 text-xs text-outline">
                                                    Report link not yet
                                                    configured.
                                                </p>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>

                            <div className="flex items-center gap-2 pt-2 font-label-sm text-label-sm text-on-surface-variant">
                                <span className="material-symbols-outlined text-[16px]">
                                    lock
                                </span>

                                <span>
                                    Add verified audit and registration
                                    documents before publishing claims of
                                    certification.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="w-full bg-surface-cream px-6 py-20 lg:px-12">
                <div className="mx-auto flex max-w-7xl flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <SectionLabel>Voices from the Field</SectionLabel>

                        <h2 className="font-headline-lg text-headline-lg text-primary">
                            Real Voices, Community-Led Solutions
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {TESTIMONIALS.map((testimonial) => (
                            <article
                                key={testimonial.name}
                                className="relative flex flex-col justify-between gap-6 rounded-2xl bg-surface-container-lowest p-8 shadow-sm"
                            >
                                <span
                                    aria-hidden="true"
                                    className="material-symbols-outlined absolute right-6 top-6 select-none text-6xl text-surface-container"
                                >
                                    format_quote
                                </span>

                                <blockquote className="relative z-10 font-body-lg text-body-lg leading-relaxed text-on-surface">
                                    {testimonial.quote}
                                </blockquote>

                                <div className="relative z-10 flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-container-high font-bold text-primary">
                                        {testimonial.initials}
                                    </div>

                                    <div>
                                        <h3 className="font-title-md text-title-md text-primary">
                                            {testimonial.name}
                                        </h3>

                                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="w-full bg-surface-cream px-6 pb-20 lg:px-12">
                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-forest-deep p-8 text-on-primary shadow-xl sm:p-10 lg:p-16">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary-container opacity-50 blur-3xl"
                    />

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-on-tertiary-container/30 blur-3xl"
                    />

                    <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">
                        <div className="flex max-w-2xl flex-col gap-4 text-center lg:text-left">
                            <div className="mx-auto inline-flex w-fit items-center gap-2 rounded-full bg-on-tertiary-container/20 px-3 py-1 lg:mx-0">
                                <span className="h-2 w-2 rounded-full bg-on-tertiary-container" />

                                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed">
                                    Become a Catalyst
                                </span>
                            </div>

                            <h2 className="font-display text-headline-lg leading-tight text-on-primary lg:text-display">
                                Join Amani Initiative as a Volunteer or Donor
                            </h2>

                            <p className="font-body-lg text-body-lg leading-relaxed text-primary-fixed">
                                Whether you want to volunteer your time,
                                support community programmes or explore an
                                organisational partnership, we welcome you to
                                get involved.
                            </p>
                        </div>

                        <div className="flex w-full shrink-0 flex-col items-center gap-4 sm:w-auto sm:flex-row">
                            <a
                                href="/donate"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-on-tertiary-container px-8 py-4 font-label-lg text-label-lg text-white shadow-md transition-colors hover:opacity-90 sm:w-auto"
                            >
                                <span>Make a Contribution</span>

                                <span className="material-symbols-outlined text-[18px]">
                                    favorite
                                </span>
                            </a>

                            <a
                                href="/contact"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-surface-container-lowest px-8 py-4 font-label-lg text-label-lg text-primary shadow-sm transition-colors hover:bg-surface-cream sm:w-auto"
                            >
                                <span>Contact Us</span>

                                <span className="material-symbols-outlined text-[18px]">
                                    arrow_forward
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
