import './Skills.css';

const Skills = () => {
    const skills = [
        {
            icon: '🎨',
            title: 'Frontend Development',
            description: 'HTML, CSS, JavaScript, React, Vue.js, Next.js',
            progress: 90
        },
        {
            icon: '⚙️',
            title: 'Backend Development',
            description: 'Node.js, Python, C#, .NET, Express, Django',
            progress: 85
        },
        {
            icon: '💾',
            title: 'Database',
            description: 'MySQL, PostgreSQL, MongoDB, Redis',
            progress: 80
        },
        {
            icon: '☁️',
            title: 'DevOps & Cloud',
            description: 'Docker, AWS, Azure, CI/CD, Git',
            progress: 75
        },
        {
            icon: '📱',
            title: 'Mobile Development',
            description: 'React Native, Flutter, Progressive Web Apps',
            progress: 70
        },
        {
            icon: '🎯',
            title: 'UI/UX Design',
            description: 'Figma, Adobe XD, Responsive Design, Accessibility',
            progress: 85
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <p className="section-subtitle">Technologies and tools I use every day</p>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-icon">{skill.icon}</div>
                            <h3>{skill.title}</h3>
                            <p>{skill.description}</p>
                            <div className="skill-bar">
                                <div
                                    className="skill-progress"
                                    style={{ width: `${skill.progress}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
