export default function Gallery({ images = [] }) {
    return (
        <section
            className="w-full py-24 px-4 md:px-6 bg-white"
            id="gallery"
        >
            <div className="max-w-[1240px] mx-auto flex flex-col gap-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="flex flex-col gap-2 max-w-xl">
                        <span className="text-xs uppercase tracking-wider text-forest-deep font-bold">
                            FIELD DOCUMENTATION
                        </span>

                        <h2 className="text-3xl md:text-4xl text-forest-deep font-bold tracking-tight">
                            Moments From Our Work
                        </h2>

                        <p className="text-lg text-charcoal-muted">
                            Real moments documenting our programs across education,
                            water, and community wellness.
                        </p>
                    </div>

                    <a
                        className="inline-flex items-center gap-1.5 text-amber-cta hover:text-amber-hover font-semibold text-sm transition-colors"
                        data-path="gallery"
                        href="#"
                    >
                        <span>View Full Gallery</span>

                        <span className="material-symbols-outlined text-[18px]">
                            arrow_forward
                        </span>
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img) => (
                        <div
                            key={img.id}
                            className="content-image-reveal group relative h-64 rounded-xl overflow-hidden shadow-sm border-2 border-amber-cta"
                        >
                            <img
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                alt={img.alt || img.caption || "Gallery image"}
                                src={img.src}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                <span className="text-white font-semibold text-sm">
                                    {img.caption}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center pt-2">
                    <a
                        className="btn-interactive inline-flex items-center gap-2 bg-transparent hover:bg-forest-deep hover:text-white text-forest-deep border-2 border-forest-deep font-semibold text-sm px-10 py-3 rounded-lg shadow-sm"
                        data-path="gallery"
                        href="#"
                    >
                        <span>Explore All 240+ Photo Archives</span>

                        <span className="material-symbols-outlined text-[18px]">
                            photo_library
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}