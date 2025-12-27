import './css/Projects.css';

const Projects = () => {
    const projects = [
        {
            emoji: '🔬',
            title: 'Nobel Prize Winner - Marie Curie',
            description: 'An informative website about Marie Curie, the pioneering physicist and chemist who won two Nobel Prizes for her groundbreaking research on radioactivity.',
            tags: ['React', 'Bootstrap'],
            color: 'project-1',
            link: 'https://nobel-prize-winner.onrender.com/'
        },
        {
            emoji: '📊',
            title: 'Dashboard Analytics',
            description: 'Real-time data analytics dashboard with interactive charts and automated reporting.',
            tags: ['Vue.js', 'Python', 'PostgreSQL'],
            color: 'project-2'
        },
        {
            emoji: '💬',
            title: 'Chat Application',
            description: 'Real-time chat application with end-to-end encryption, file sharing, and video calls.',
            tags: ['Next.js', 'WebSocket', 'Redis'],
            color: 'project-3'
        },
        {
            emoji: '🏥',
            title: 'Healthcare Management',
            description: 'Hospital management system with appointment scheduling, medical records, and online consultation.',
            tags: ['React', '.NET', 'SQL Server'],
            color: 'project-4'
        },
        {
            emoji: '🎓',
            title: 'Learning Management System',
            description: 'Online learning platform with video lectures, quizzes, and progress tracking.',
            tags: ['React Native', 'Firebase'],
            color: 'project-5'
        },
        {
            emoji: '🎵',
            title: 'Music Streaming App',
            description: 'Music streaming application with personalized playlists, smart recommendations, and high quality.',
            tags: ['Vue.js', 'Express', 'AWS'],
            color: 'project-6'
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
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project →</a>
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
