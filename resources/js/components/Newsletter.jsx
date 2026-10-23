import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) return;

        setLoading(true);

        try {
            // Wire to Laravel API when the newsletter endpoint is ready.
            // await api.subscribeNewsletter(email);

            setSubmitted(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full py-16 px-4 md:px-6 bg-surface-cream border-y border-border-subtle">
            <div className="max-w-[1240px] mx-auto rounded-2xl bg-white border border-[#0D3E2E]/10 p-8 md:p-12 shadow-[0_4px_24px_rgba(11,59,36,0.04)]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-6 flex flex-col gap-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 w-fit">
                            <span className="material-symbols-outlined text-amber-cta text-[16px]">
                                mark_email_read
                            </span>

                            <span className="text-[11px] uppercase tracking-wider text-forest-deep font-bold">
                                Field Dispatches
                            </span>
                        </div>

                        <h2 className="text-2xl md:text-3xl text-forest-deep font-bold tracking-tight leading-tight">
                            Stay Informed with Ground Reports
                        </h2>

                        <p className="text-[15px] text-charcoal-muted leading-relaxed">
                            Receive verified quarterly impact audits, firsthand
                            stories from community leaders, and transparent
                            financial stewardship dispatches.
                        </p>
                    </div>

                    <div className="lg:col-span-6 flex flex-col gap-3">
                        {!submitted ? (
                            <form
                                className="flex flex-col sm:flex-row items-center gap-3 w-full"
                                onSubmit={handleSubmit}
                            >
                                <div className="relative w-full">
                                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal-muted text-[20px]">
                                        mail
                                    </span>

                                    <input
                                        aria-label="Email address"
                                        className="w-full h-12 pl-11 pr-4 rounded-lg bg-surface-container-low text-charcoal-text text-[15px] border border-border-subtle focus:outline-none focus:border-forest-deep focus:bg-white focus:ring-2 focus:ring-forest-deep/10 transition-all shadow-sm"
                                        placeholder="name@organization.org"
                                        required
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <button
                                    className="btn-interactive w-full sm:w-auto h-12 px-6 rounded-lg bg-amber-cta hover:bg-amber-hover text-white font-semibold text-[15px] whitespace-nowrap shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-60"
                                    type="submit"
                                    disabled={loading}
                                >
                                    {loading ? "Subscribing…" : "Subscribe"}
                                </button>
                            </form>
                        ) : (
                            <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-forest-deep font-medium text-[14px]">
                                Thank you for subscribing! You will receive our
                                next quarterly dispatch.
                            </div>
                        )}

                        <div className="flex items-center gap-2 text-xs text-charcoal-muted">
                            <span className="material-symbols-outlined text-emerald-600 text-[16px]">
                                lock
                            </span>

                            <span>
                                Zero spam. Direct unsubscribe anytime. Your email
                                remains confidential.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}