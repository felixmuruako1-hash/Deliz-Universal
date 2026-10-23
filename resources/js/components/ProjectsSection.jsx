import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard.jsx";

export default function ProjectsSection() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const projects = [
        {
            id: 1,
            name: "Education Support Project",
            description:
                "Helping students overcome barriers to education and reach their full potential with learning materials, scholarships, and school lunches.",
            image: "/storage/Images/projects/support%20project.jpg",
            imageAlt: "Education support project",
            badge: {},
            progress: 84,
            funded: 84200,
            goal: 100000,
            footerLabel: "Goal: $100,000",
            status: "active",
        },
        {
            id: 2,
            name: "Clean Water Initiative",
            description:
                "Improving access to clean and reliable water in underserved communities through solar-powered boreholes and community water management boards.",
            image: "/storage/Images/projects/water%20initiative.jpg",
            imageAlt: "Clean water initiative",
            badge: {},
            progress: 100,
            funded: 65000,
            goal: 65000,
            footerLabel: "3,800 Villagers Served",
            status: "completed",
        },
        {
            id: 3,
            name: "Healthcare Outreach",
            description:
                "Bringing essential healthcare services, maternal screenings, and childhood immunization closer to families that need them most.",
            image: "/storage/Images/projects/health%20outreach.jpg",
            imageAlt: "Healthcare outreach project",
            badge: {},
            progress: 73,
            funded: 58400,
            goal: 80000,
            footerLabel: "Goal: $80,000",
            status: "ongoing",
        },
    ];

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(false);

                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            setIsVisible(true);
                        });
                    });
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.25,
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full py-24 px-4 md:px-6 bg-white"
            id="projects"
        >
            {/* Project Image Animation */}
            <style>{`
                @keyframes projectImagePop {
                    0% {
                        opacity: 0;
                        transform: scale(0.90) translateY(35px);
                    }

                    30% {
                        opacity: 0.35;
                        transform: scale(0.94) translateY(20px);
                    }

                    60% {
                        opacity: 0.75;
                        transform: scale(1.015) translateY(5px);
                    }

                    80% {
                        opacity: 0.95;
                        transform: scale(1.005) translateY(1px);
                    }

                    100% {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
            `}</style>

            <div className="max-w-[1240px] mx-auto flex flex-col gap-16">

                {/* Header */}
                <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">

                    <span className="text-xs uppercase tracking-wider text-forest-deep font-bold">
                        IMPACT IN MOTION
                    </span>

                    <h2 className="text-3xl md:text-4xl text-forest-deep font-bold tracking-tight">
                        Our Projects
                    </h2>

                    <p className="text-lg text-charcoal-muted">
                        Turning compassion into action with tangible,
                        community-led initiatives.
                    </p>

                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            isVisible={isVisible}
                        />
                    ))}

                </div>

                {/* Bottom Action Button */}
                <div className="flex justify-center pt-4">

                    <a
                        className="btn-interactive inline-flex items-center gap-2 bg-forest-deep hover:bg-forest-medium text-white font-semibold text-sm px-10 py-3.5 rounded-lg shadow-md"
                        data-path="projects"
                        href="#"
                    >
                        <span>View All Projects</span>

                        <span className="material-symbols-outlined text-[18px]">
                            arrow_forward
                        </span>
                    </a>

                </div>

            </div>
        </section>
    );
}