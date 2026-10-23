const fmtUSD = (n) =>
    new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    }).format(n);

export default function ProjectCard({
    project,
    index = 0,
    isVisible = false,
}) {
    const {
        name,
        description,
        image,
        imageAlt,
        progress,
        funded,
        goal,
        status,
        footerLabel,
    } = project;

    const completed = status === "completed" || progress >= 100;

    const barClass = completed
        ? "bg-success-leaf"
        : "bg-amber-cta";

    const pctClass = completed
        ? "text-success-leaf font-bold"
        : "text-amber-cta font-bold";

    return (
        <article className="bg-white rounded-xl overflow-hidden border border-border-subtle shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">

            {/* Project Image */}
            <div className="relative h-56 rounded-xl overflow-hidden m-3 mb-0">

                <img
                    src={image}
                    alt={imageAlt || name}
                    className="w-full h-full object-cover"
                    style={{
    opacity: isVisible ? 1 : 0,

    animation: isVisible
        ? `projectImagePop 2500ms cubic-bezier(0.22, 1, 0.36, 1) ${
              index * 600
          }ms both`
        : "none",
                    }}
                />

            </div>

            {/* Project Content */}
            <div className="p-6 flex flex-col flex-grow justify-between gap-5">

                <div className="flex flex-col gap-2.5">

                    <h3 className="text-lg text-forest-deep font-bold">
                        {name}
                    </h3>

                    <p className="text-sm text-charcoal-muted leading-relaxed">
                        {description}
                    </p>

                </div>

                {/* Progress */}
                <div className="flex flex-col gap-2 pt-2">

                    <div className="flex justify-between text-xs text-charcoal-text">

                        <span>
                            Funded: <strong>{fmtUSD(funded)}</strong>
                        </span>

                        <span className={pctClass}>
                            {completed
                                ? "100% Complete"
                                : `${progress}%`}
                        </span>

                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">

                        <div
                            className={`h-full rounded-full ${barClass}`}
                            style={{
                                width: `${Math.min(progress, 100)}%`,
                            }}
                        />

                    </div>

                    <div className="flex items-center pt-2">

                        <span className="text-sm text-charcoal-muted">
                            {footerLabel ??
                                (goal
                                    ? `Goal: ${fmtUSD(goal)}`
                                    : "")}
                        </span>

                    </div>

                </div>
            </div>
        </article>
    );
}