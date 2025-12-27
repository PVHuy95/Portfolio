import './css/Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="hero-gradient"></div>
                <div className="hero-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
            </div>

            <div className="container hero-content">
                <div className="hero-text">
                    <span className="hero-greeting animate-fade-in">Hello, I'm</span>
                    <h1 className="hero-name animate-slide-up">Phu Vinh Huy</h1>
                    <h2 className="hero-title animate-slide-up">Full Stack Developer</h2>
                    <p className="hero-description animate-fade-in">
                        Building modern, user-friendly web applications with a focus on clean code.
                    </p>
                    <div className="hero-buttons animate-fade-in">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-secondary">Contact Me</a>
                    </div>
                </div>

                <div className="hero-image animate-float">
                    <div className="image-wrapper">
                        <div className="image-glow"></div>
                        <div className="image-placeholder">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#ef4444', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#dc2626', stopOpacity: 1 }} />
                                    </linearGradient>
                                    <clipPath id="heroCircleClip">
                                        <circle cx="100" cy="100" r="90" />
                                    </clipPath>
                                </defs>
                                <circle cx="100" cy="100" r="90" fill="url(#heroGradient)" />
                                <image
                                    href="/assets/Huy.jpg"
                                    x="10"
                                    y="10"
                                    width="180"
                                    height="180"
                                    preserveAspectRatio="xMidYMid slice"
                                    clipPath="url(#heroCircleClip)"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <p>Scroll Down</p>
            </div>
        </section>
    );
};

export default Hero;
