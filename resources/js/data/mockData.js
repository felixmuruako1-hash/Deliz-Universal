/**
 * Mock data for DelizInitiative
 * Shape matches Laravel API responses
 * (id, slug, name, category, etc.)
 */

/* =========================================================
   HERO SLIDES
========================================================= */

export const heroSlides = [
    {
       id: 0,
        image: "/storage/Images/hero/education.jpg",
        alt: "Joyful smiling African primary school students sitting together at a wooden classroom desk",
        badge: {
            icon: "dot",
            text: "Grassroots Humanitarian Mission",
        },
        title: "Creating Hope.",
        titleAccent: "Changing Lives.",
        description:
            "We work with communities to create opportunities, improve lives and build a better future for those who need it most.",
        primaryCta: {
            label: "Donate Now",
            icon: "volunteer_activism",
            href: "https://paystack.shop/pay/7i7yj5mbwj",
            external: true,
        },
        secondaryCta: {
            label: "Explore Our Work",
            icon: "arrow_forward",
            href: "#focus-areas",
        },
    },

    {
        id: 1,
        image: "/storage/Images/hero/water 1.jpg",
        alt: "Community water project",
        badge: {
            icon: "water_drop",
            text: "Clean Water Initiative",
        },
        title: "Bringing Water.",
        titleAccent: "Building Futures.",
        description:
            "We support communities with sustainable access to clean water and practical solutions that improve everyday life.",
        primaryCta: {
            label: "Support This Work",
            icon: "volunteer_activism",
            href: "https://paystack.shop/pay/7i7yj5mbwj",
            external: true,
        },
        secondaryCta: {
            label: "View Projects",
            icon: "arrow_forward",
            href: "#projects",
        },
    },

    {
        id: 2,
         id: 2,
    image: "/storage/Images/hero/hospital 1.jpg",
    alt: "Community healthcare outreach",
    badge: {
        icon: "health_and_safety",
        text: "Community Health Outreach",
    },
    title: "Improving Health.",
    titleAccent: "Strengthening Communities.",
    description:
        "We bring essential healthcare services closer to families and communities that need support the most.",
        primaryCta: {
            label: "Support Our Mission",
            icon: "volunteer_activism",
            href: "https://paystack.shop/pay/7i7yj5mbwj",
            external: true,
        },
        secondaryCta: {
            label: "Explore Our Work",
            icon: "arrow_forward",
            href: "#focus-areas",
        },
    },
];


/* =========================================================
   TRANSPARENCY TICKER
========================================================= */

export const tickerItems = [
    "10,000+ People Reached",
    "50+ Communities Supported",
    "25+ Projects Completed",
    "15+ Partner Organizations",
];


/* =========================================================
   PROJECTS
========================================================= */

export const projects = [
    {
        id: 1,
        name: "Education Support Project",
        slug: "education-support-project",
        description:
            "Helping students overcome barriers to education and reach their full potential with learning materials, scholarships, and school lunches.",
        category: {
            id: 1,
            name: "Education",
            slug: "education",
        },
        location: "Turkana County",
        image:
            "https://lh3.googleusercontent.com/aida/AEtjO1UEsPmy7MG_7pvDcV727dAzNrwc3s056E0U2tbNUWpIaXLoPcLy_uBjyW3XY21nS3-BDv6D6EhWiE2a194xW_yW8DJ8pYg5eQWB5RK72nRNIvHKKPs91Y4x_dMnD4guDVFTwS493aIrewcUHcQPqTxk31eXwLGMywb9-rFGdFTg4YK-xpl88dRy-Yu2nJwMq7n0f4cjnvGmlkIwiiiRShN_kpPMQ6JpcvRnzbpL7dWpoAinsDThnjnUYw",
        badge: {
            text: "Active Initiative • Turkana County",
            variant: "forest",
        },
        progress: 84,
        funded: 84200,
        goal: 100000,
        status: "active",
        footerLabel: null,
    },

    {
        id: 2,
        name: "Clean Water Initiative",
        slug: "clean-water-initiative",
        description:
            "Improving access to clean and reliable water in underserved communities through solar-powered boreholes and community water management boards.",
        category: {
            id: 3,
            name: "Clean Water",
            slug: "water",
        },
        location: "Kapedo Village",
        image:
            "https://lh3.googleusercontent.com/aida/AEtjO1VOK3EIqp8xS_0gjgElCczp_gHuNxlhlHAsH4CESePX-EILmfBknRc4T3Vcrc-TvLPdIjmO5ytIM-yWxV5Fg8O_rjozYFLdn5LU5YOaAakEOt6DFN4dRokqSA_tJdiQEo_gkZdWx5JVO4h7Y-jg7RO15a7d5M7jdh9N6K0eGmO-kzaeC30-73IEUUTzY-nozh2vermAEdH2JeCkQgtkgIagf-2bKsa3KgvHwNf178dNgl_s5koSKvdxmg",
        badge: {
            text: "Completed Milestone • Kapedo Village",
            variant: "success",
        },
        progress: 100,
        funded: 65000,
        goal: null,
        status: "completed",
        footerLabel: "3,800 Villagers Served",
    },

    {
        id: 3,
        name: "Healthcare Outreach",
        slug: "healthcare-outreach",
        description:
            "Bringing essential healthcare services, maternal screenings, and childhood immunization closer to families that need them most.",
        category: {
            id: 2,
            name: "Health",
            slug: "health",
        },
        location: "Kilifi District",
        image:
            "https://lh3.googleusercontent.com/aida/AEtjO1VoLZNTo26z0eYBtkbBVIgta0SMKYKJZcdrbebrrcvWOa6kEbNO0J3ClsHl_vbr2dgq7R2HACjL1EUNZtC2fyMsTB-BLVmIJqrn6DVSUHBY9gyeV43K1tnVp9bA2OLVFQW-i4qD-02tl3EoeohVy2TfYPUSDcKgYMCAetU1H5nj3RC6662bWbm5zrToT0fkqeAjS2pBFeDYI_AVeYbmwLoqnaABjc52IEpnDMrGotdsLgiZR6PHOSemIA",
        badge: {
            text: "Ongoing Campaign • Kilifi District",
            variant: "forest",
        },
        progress: 73,
        funded: 58400,
        goal: 80000,
        status: "ongoing",
        footerLabel: null,
    },
];


/* =========================================================
   FOCUS CATEGORIES
========================================================= */

export const focusCategories = [
    {
        id: 1,
        slug: "education",
        name: "Education & Literacy",
        icon: "school",
        description:
            "Unlocking potential through educational scholarships, solar digital classrooms, teacher training kits, and daily nutrition programs.",
        stat: "4,200+ Pupils",
        wide: false,
    },

    {
        id: 2,
        slug: "health",
        name: "Community Health",
        icon: "health_and_safety",
        description:
            "Deploying frontline mobile clinics, maternal-infant screening protocols, and rapid diagnostic supplies to remote rural villages.",
        stat: "18 Mobile Clinics",
        wide: false,
    },

    {
        id: 3,
        slug: "water",
        name: "Clean Water & Sanitation",
        icon: "water_drop",
        description:
            "Engineering sustainable solar borehole wells and training local water stewardship councils to preserve hygienic drinking supplies.",
        stat: "32 Boreholes Active",
        wide: false,
    },

    {
        id: 4,
        slug: "food-security",
        name: "Food Security",
        icon: "restaurant",
        description:
            "Equipping agrarian communities with climate-hardy seeds, drought-resistant drip irrigation, and emergency caloric response packages.",
        stat: "95 Metric Tons Food",
        wide: false,
    },

    {
        id: 5,
        slug: "livelihoods",
        name: "Livelihoods & Community Empowerment",
        icon: "psychology_alt",
        description:
            "Empowering women and young adults through revolving micro-loan syndicates, technical trade certification, regenerative agribusiness workshops, and sustainable access to regional commerce.",
        stat: "1,840 Women & Youth",
        wide: true,
    },
];


/* =========================================================
   IMPACT METRICS
========================================================= */

export const impactMetrics = [
    {
        id: 1,
        value: "10,000+",
        label: "People Reached",
        description:
            "Benefiting from healthcare, education & water programs",
    },

    {
        id: 2,
        value: "50+",
        label: "Communities Supported",
        description:
            "Across arid and semi-arid East African sub-counties",
    },

    {
        id: 3,
        value: "25+",
        label: "Projects Completed",
        description:
            "Delivered on schedule with direct local oversight",
    },

    {
        id: 4,
        value: "15+",
        label: "Partner Organizations",
        description:
            "International alliances & grassroots cooperative leagues",
    },
];


/* =========================================================
   FEATURED STORY
========================================================= */

export const featuredStory = {
    id: 1,

    title: "Building Sustainable Change, One Community at a Time",

    excerpt:
        "Our work is built around partnering with communities to create practical, sustainable solutions in education, healthcare, clean water, and livelihoods.",

   image: "/storage/images/about/community.jpg",

    imageAlt:
        "Community members participating in an Deliz Initiative program",

    category: "Community Impact",

    publishedAtLabel: "Field Report",
};


/* =========================================================
   TESTIMONIALS
========================================================= */

export const testimonials = [
    {
        id: 1,
        quote:
            "This support gave my children an opportunity to stay in school and continue their education without missing meals. Now, my eldest daughter dreams of becoming a registered community nurse.",
        initials: "GM",
        name: "Grace M.",
        role: "Parent & School Committee Chair, Lodwar",
    },

    {
        id: 2,
        quote:
            "Having regular mobile medical supplies and diagnostics has halved maternal transfer delays in the entire sub-county. We can treat emergency pediatric cases right in the community.",
        initials: "SO",
        name: "Dr. Samuel O.",
        role: "Field Medical Director, Garissa",
    },

    {
        id: 3,
        quote:
            "The solar well transformed our daily life; our daughters now spend their mornings learning rather than walking miles for water. We cultivate clean irrigation crops year-round.",
        initials: "PK",
        name: "Peter K.",
        role: "Water Committee Chairman, Kapedo",
    },
];


/* =========================================================
   GALLERY
========================================================= */

export const galleryImages = [];


/* =========================================================
   BLOG POSTS
========================================================= */

export const blogPosts = [];