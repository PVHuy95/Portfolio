import './css/Projects.css';

const Projects = () => {
    const projects = [
        {
            emoji: '🚑',
            title: 'LifeLink - Ambulance Service',
            description: 'Emergency ambulance service platform with real-time tracking, appointment booking, and quick response system for medical emergencies.',
            tags: ['React', 'Vite', 'Healthcare'],
            color: 'project-1',
            link: 'https://lifelink-k693.onrender.com'
        },
        {
            emoji: '🔬',
            title: 'Nobel Prize Winner - Marie Curie',
            description: 'An informative website about Marie Curie, the pioneering physicist and chemist who won two Nobel Prizes for her groundbreaking research on radioactivity.',
            tags: ['React', 'Bootstrap'],
            color: 'project-2',
            link: 'https://nobel-prize-winner.onrender.com/'
        },
        {
            emoji: '🏥',
            title: 'HealthLink - Healthcare Management',
            description: 'Comprehensive healthcare management platform with appointment scheduling, patient records, and doctor assignment system.',
            tags: ['React', 'JavaScript', 'Healthcare'],
            color: 'project-3',
            link: 'https://github.com/PVHuy95/HealthLink'
        },
        {
            emoji: '🌴',
            title: 'MoonBay - Hotel Booking System',
            description: 'Online hotel reservation platform for MoonBay Hotel with room booking, transparent pricing, and interactive management.',
            tags: ['ReactJS', 'Laravel', 'MySQL'],
            color: 'project-4',
            link: 'https://github.com/PVHuy95/MoonBay'
        },
        {
            emoji: '☕',
            title: 'NuoiToi - Personal Web Platform',
            description: 'Interactive personal support website featuring integrated VietQR instant payment and donation system.',
            tags: ['JavaScript', 'HTML/CSS', 'VietQR'],
            color: 'project-5',
            link: 'https://github.com/PVHuy95/nuoitoi'
        },
        {
            emoji: '💻',
            title: 'My Profile Website',
            description: 'Personal developer portfolio application built with React and Tailwind CSS to showcase software engineering skills and projects.',
            tags: ['React', 'Tailwind CSS', 'JavaScript'],
            color: 'project-6',
            link: 'https://github.com/PVHuy95/my-profile'
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">Some of my proudest projects</p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className={`project-image ${project.color}`}>
                                <div className="project-emoji">{project.emoji}</div>
                                <div className="project-overlay">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                        {project.link?.includes('github.com') ? 'View GitHub →' : 'View Demo →'}
                                    </a>
                                </div>
                            </div>

                            <div className="project-content">
                                <div className="project-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span className="tag" key={tagIndex}>{tag}</span>
                                    ))}
                                </div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
