const ACTIONS = [
    {
        id: "donate",
        icon: "volunteer_activism",
        iconColor: "bg-amber-50 text-amber-cta",
        title: "Donate",
        description:
            "Your contribution directly helps us reach more people, establish sustainable water sources, and expand classroom access.",
        cta: {
            label: "Donate Now",
            icon: "favorite",
            href: "https://paystack.shop/pay/7i7yj5mbwj",
            external: true,
            path: "donate",
            variant: "primary",
        },
    },
    {
        id: "volunteer",
        icon: "handshake",
        iconColor: "bg-emerald-50 text-forest-deep",
        title: "Volunteer",
        description:
            "Give your time, medical skills, mentoring experience, or technical expertise to support communities on the ground or remotely.",
        cta: {
            label: "Volunteer With Us",
            icon: "group_add",
            href: "#",
            path: "volunteer",
            variant: "outline",
        },
    },
    {
        id: "partner",
        icon: "corporate_fare",
        iconColor: "bg-emerald-50 text-forest-deep",
        title: "Partner With Us",
        description:
            "Partner with our field operations to scale sustainable solutions through institutional grants, corporate CSR, or foundation funding.",
        cta: {
            label: "Partner With Us",
            icon: "hub",
            href: "#",
            path: "partner-with-us",
            variant: "outline",
        },
    },
];

export default function HowToHelp() {
    return (
        <section
            className="w-full py-24 px-4 md:px-6 bg-surface-container-low"
            id="how-to-help"
        >
            <div className="max-w-[1240px] mx-auto flex flex-col gap-16">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-wider text-forest-deep font-bold">
                        WAYS TO CONTRIBUTE
                    </span>

                    <h2 className="text-3xl md:text-4xl text-forest-deep font-bold tracking-tight">
                        Be Part Of The Change
                    </h2>

                    <p className="text-lg text-charcoal-muted">
                        There are meaningful ways to lend your hands, voice,
                        and resources.
                    </p>
                </div>

                {/* Action Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {ACTIONS.map((action) => {
                        const isPrimary =
                            action.cta.variant === "primary";

                        return (
                            <div
                                key={action.id}
                                className="bg-white rounded-xl p-10 border border-border-subtle shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-center items-center gap-6"
                            >
                                <div
                                    className={`w-16 h-16 rounded-full flex items-center justify-center ${action.iconColor}`}
                                >
                                    <span className="material-symbols-outlined text-[32px]">
                                        {action.icon}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-2.5">
                                    <h3 className="text-xl text-forest-deep font-bold">
                                        {action.title}
                                    </h3>

                                    <p className="text-base text-charcoal-muted leading-relaxed">
                                        {action.description}
                                    </p>
                                </div>

                                <a
                                    className={`btn-interactive w-full inline-flex items-center justify-center gap-2 font-semibold text-sm py-3 rounded-lg ${
                                        isPrimary
                                            ? "bg-amber-cta hover:bg-amber-hover text-white shadow-sm"
                                            : "bg-transparent hover:bg-forest-deep hover:text-white border-2 border-forest-deep text-forest-deep"
                                    }`}
                                    data-path={action.cta.path}
                                    href={action.cta.href}
                                    target={
                                        action.cta.external
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel={
                                        action.cta.external
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                >
                                    <span className="material-symbols-outlined text-[18px]">
                                        {action.cta.icon}
                                    </span>

                                    <span>{action.cta.label}</span>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}