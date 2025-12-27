import './css/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p>&copy; {currentYear} Portfolio. Made with ❤️ by Phu Vinh Huy</p>
                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
