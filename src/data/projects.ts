export const TAGS = {
    JAVA: {
        name: "Java",
        class: "bg-red-900/30 text-red-200",
        icon: "lucide:coffee",
    },
    SPRING: {
        name: "Spring Boot",
        class: "bg-green-900/30 text-green-200",
        icon: "lucide:leaf",
    },
    PYTHON: {
        name: "Python",
        class: "bg-blue-900/30 text-blue-200",
        icon: "lucide:bot",
    },
    SQL: {
        name: "SQL",
        class: "bg-slate-800 text-slate-100",
        icon: "lucide:database",
    },
    GCP: {
        name: "GCP",
        class: "bg-cyan-900/30 text-cyan-200",
        icon: "lucide:cloud",
    },
    GIS: {
        name: "GIS",
        class: "bg-indigo-900/30 text-indigo-200",
        icon: "lucide:map",
    },
};

export const PROJECTS = [
    {
        title: "API Migration Validation Automation",
        description:
            "Built Python-based validation automation to compare legacy and modern API responses across databases, improving migration confidence and release safety.",
        highlights: [
            "Automated cross-environment API response comparisons",
            "Protected data integrity during system transitions",
            "Shortened QA feedback loops for backend releases",
        ],
        link: "https://www.linkedin.com/in/alexyooo/details/experience/",
        github: "https://github.com/AlexanderYoo/api_data_migration_validator",
        image: "/projects/api_validator.png",
        tags: [TAGS.PYTHON, TAGS.SQL, TAGS.JAVA],
    },
    {
        title: "Healthcare and E-commerce Platform Engineering",
        description:
            "Led backend feature delivery for healthcare and commerce services, integrating secure payment workflows and stabilizing API behavior across releases.",
        highlights: [
            "Implemented payment-related backend flows with Spring MVC and MyBatis",
            "Improved API reliability through systematic debugging",
            "Collaborated across product, QA, and engineering for delivery",
        ],
        link: "https://www.linkedin.com/in/alexyooo/details/experience/",
        github: "https://github.com/AlexanderYoo",
        image: "/projects/e-xenedu.jpg",
        tags: [TAGS.JAVA, TAGS.SPRING, TAGS.SQL],
    },
    {
        title: "GIS Accessibility and Mapping Systems",
        description:
            "Contributed to GIS R&D initiatives including an online braille map project and core GIS engine development focused on practical accessibility and mapping performance.",
        highlights: [
            "Supported GIS frontend and platform functionality",
            "Contributed to an accessibility-focused braille map initiative",
            "Delivered mapping features for production GIS workflows",
        ],
        link: "https://www.linkedin.com/in/alexyooo/details/experience/",
        github: "https://github.com/AlexanderYoo",
        image: "/projects/gis.png",
        tags: [TAGS.GIS, TAGS.JAVA, TAGS.GCP],
    },
];
