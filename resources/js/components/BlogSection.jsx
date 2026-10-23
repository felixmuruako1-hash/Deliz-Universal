export default function BlogSection({ posts = [] }) {
    return (
        <section
            className="w-full py-24 px-4 md:px-6 bg-surface-cream"
            id="blog"
        >
            <div className="max-w-[1240px] mx-auto flex flex-col gap-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="flex flex-col gap-2 max-w-xl">
                        <span className="text-xs uppercase tracking-wider text-forest-deep font-bold">
                            STORIES &amp; UPDATES
                        </span>

                        <h2 className="text-3xl md:text-4xl text-forest-deep font-bold tracking-tight">
                            Latest From Our Work
                        </h2>

                        <p className="text-lg text-charcoal-muted">
                            Insights, field dispatches, and reports directly from
                            our project teams.
                        </p>
                    </div>

                    <a
                        className="inline-flex items-center gap-1.5 text-forest-deep hover:text-amber-cta font-semibold text-sm transition-colors"
                        data-path="blog"
                        href="#"
                    >
                        <span>View All Articles</span>

                        <span className="material-symbols-outlined text-[18px]">
                            arrow_forward
                        </span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-xl overflow-hidden border border-border-subtle shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                        >
                            <div className="content-image-reveal h-48 border-2 border-amber-cta rounded-xl overflow-hidden m-3 mb-0">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    alt={post.imageAlt || post.title}
                                    src={post.image}
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                                <div className="flex flex-col gap-2.5">
                                    <div className="flex items-center justify-between text-xs text-charcoal-muted">
                                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-forest-deep font-semibold">
                                            {post.category?.name}
                                        </span>

                                        <span>{post.publishedAtLabel}</span>
                                    </div>

                                    <h3 className="text-xl text-forest-deep font-bold hover:text-amber-cta transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-sm text-charcoal-muted leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <div className="pt-2">
                                    <a
                                        className="inline-flex items-center gap-1 text-amber-cta hover:text-amber-hover font-semibold text-sm hover:underline"
                                        data-path="blog"
                                        href="#"
                                    >
                                        <span>Read More</span>

                                        <span className="material-symbols-outlined text-[16px]">
                                            arrow_forward
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}