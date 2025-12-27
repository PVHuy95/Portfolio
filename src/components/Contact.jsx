import './css/Contact.css';

const Contact = () => {
    const contactMethods = [
        {
            icon: '📧',
            title: 'Email',
            info: 'phuvinhhuy1995@gmail.com',
            link: 'mailto:phuvinhhuy1995@gmail.com',
            description: 'Send me an email'
        },
        {
            icon: '📱',
            title: 'Phone',
            info: '+84 926 9999 45',
            link: 'tel:+84926999945',
            description: 'Give me a call'
        },
        {
            icon: '📍',
            title: 'Location',
            info: 'Ho Chi Minh City, Vietnam',
            link: 'https://maps.google.com/?q=Ho+Chi+Minh+City,+Vietnam',
            description: 'Find me here'
        }
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            url: 'https://github.com/PVHuy95',
            color: '#333'
        },
        {
            name: 'LinkedIn',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
            url: 'https://www.linkedin.com/in/huy-pv-611b52352/',
            color: '#0077b5'
        },
        {
            name: 'Facebook',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
            ),
            url: 'https://www.facebook.com/daigiangheo95',
            color: '#1877f2'
        }
    ];

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">Let's connect and make something amazing together!</p>

                <div className="contact-grid">
                    {/* Contact Methods Cards */}
                    {contactMethods.map((method, index) => (
                        <a
                            key={index}
                            href={method.link}
                            className="contact-card"
                            target={method.link.startsWith('http') ? '_blank' : undefined}
                            rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                            <div className="card-icon-wrapper">
                                <span className="card-icon">{method.icon}</span>
                            </div>
                            <h3 className="card-title">{method.title}</h3>
                            <p className="card-info">{method.info}</p>
                            <span className="card-description">{method.description}</span>
                        </a>
                    ))}

                    {/* Social Links Cards */}
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            className="contact-card social-card"
                            target="_blank"
                            rel="noopener noreferrer"
                            title={social.name}
                        >
                            <div className="card-icon-wrapper">
                                <span className="card-icon social-icon">
                                    {typeof social.icon === 'string' ? social.icon : social.icon}
                                </span>
                            </div>
                            <h3 className="card-title">{social.name}</h3>
                            <span className="card-description">Connect on {social.name}</span>
                        </a>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="contact-cta">
                    <h3>Ready to start a project?</h3>
                    <p>I'm always open to discussing new opportunities and collaborations.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
