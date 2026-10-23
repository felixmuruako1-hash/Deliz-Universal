export default function TransparencyTicker({ items }) {
    return (
        <div className="w-full bg-forest-deep text-emerald-100 py-3.5 px-gutter-mobile md:px-space-lg border-t border-forest-medium/60 shadow-inner">
            <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 font-label-sm text-label-sm tracking-wide">
                {items.map((item, idx) => (
                    <div key={idx} className="contents">
                        {idx > 0 && (
                            <div className="hidden lg:block text-emerald-600/70">
                                •
                            </div>
                        )}

                        <div className="flex items-center gap-2">
                            <span
                                className={`material-symbols-outlined text-[18px] ${item.iconClass}`}
                            >
                                {item.icon}
                            </span>

                            {item.strong ? (
                                <>
                                    <span className="font-semibold text-white">
                                        {item.strong}
                                    </span>
                                    <span>{item.rest}</span>
                                </>
                            ) : (
                                <span>{item.rest}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}