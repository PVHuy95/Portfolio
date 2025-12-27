import './css/About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-image">
                        <div className="about-image-wrapper">
                            <div className="about-glow"></div>
                            <div className="about-placeholder">
                                <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="300" height="400" rx="20" fill="url(#aboutGradient)" />
                                    <image
                                        href="/assets/Huy1.png"
                                        x="0"
                                        y="0"
                                        width="300"
                                        height="400"
                                        preserveAspectRatio="xMidYMid slice"
                                        clipPath="url(#roundedRect)"
                                    />
                                    <defs>
                                        <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#ef4444', stopOpacity: 0.9 }} />
                                            <stop offset="100%" style={{ stopColor: '#dc2626', stopOpacity: 1 }} />
                                        </linearGradient>
                                        <clipPath id="roundedRect">
                                            <rect width="300" height="400" rx="20" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="about-text">
                        <h3>Kickstarting My Professional Journey!</h3>
                        <p>
                            I'm an <strong>Aspiring Full Stack Developer</strong> and a final-year IT student. While I am at the beginning of my career, I have equipped myself with a solid logical mindset and the ability to adapt quickly to new technologies.
                        </p>
                        <p>
                            I believe that attitude determines altitude. I am seeking a professional environment to contribute my energy, learn from experienced mentors, and hone my skills through real-world projects.
                        </p>
                        {/* <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">30+</span>
                                <span className="stat-label">Happy Clients</span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
