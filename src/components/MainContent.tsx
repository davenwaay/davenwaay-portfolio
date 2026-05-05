import styles from './MainContent.module.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import bg from '../assets/bg3.jpg';
import cv from '../assets/Resume_DavenWaay.pdf';
import Evt from '../assets/EventRegistration.png';
import tnt from '../assets/tnt/tntThumbnail.png';
import honda from '../assets/hondadasma.jpg';
import Hacktivate from '../assets/hacktivate.png';
import { useEffect } from 'react';

export default function MainContent() {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.animate);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe technology section elements
        const techTitle = document.querySelector(`.${styles.techTitle}`);
        const techSubtitles = document.querySelectorAll(`.${styles.techSubtitle}`);
        const techCards = document.querySelectorAll(`.${styles.techCard}`);
        
        // Observe project section elements
        const projectsTitle = document.querySelector(`.${styles.projectsTitle}`);
        const projectCards = document.querySelectorAll(`.${styles.projectCard}`);

        if (techTitle) observer.observe(techTitle);
        techSubtitles.forEach(subtitle => observer.observe(subtitle));
        techCards.forEach(card => observer.observe(card));
        if (projectsTitle) observer.observe(projectsTitle);
        projectCards.forEach(card => observer.observe(card));

        return () => {
            observer.disconnect();
        };
    }, []);

    // Ensure project cards share the same height (match tallest card)
    useEffect(() => {
        const setEqualHeights = () => {
            const cards = Array.from(document.querySelectorAll(`.${styles.projectCard}`)) as HTMLElement[];
            if (!cards.length) return;
            // reset
            cards.forEach(c => { c.style.minHeight = ''; });
            const heights = cards.map(c => c.offsetHeight);
            const max = Math.max(...heights);
            cards.forEach(c => { c.style.minHeight = `${max}px`; });
        };

        // run after images/fonts load
        const rafId = requestAnimationFrame(setEqualHeights);
        window.addEventListener('resize', setEqualHeights);
        window.addEventListener('load', setEqualHeights);

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener('resize', setEqualHeights);
            window.removeEventListener('load', setEqualHeights);
        };
    }, []);

    return (
        <main className={styles.mainContent}>
            <section id="home" className={styles.heroSection}>
                <Navbar />
                <div className={styles.heroContainer}>
                    <p className={styles.location}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        BASED IN Bacoor, Philippines
                    </p>
                    
                    <h1 className={styles.heroTitle}>
                        <span className={styles.word}>I'm</span>{' '}
                        <span className={`${styles.word} ${styles.highlight}`}>Daven</span>{' '}
                        <span className={`${styles.word} ${styles.highlight}`}>H,</span>{' '}
                        <span className={`${styles.word} ${styles.highlight}`}>Waay!</span>
                        <br />
                        <span className={styles.word}>a</span>{' '}
                        <span className={`${styles.word} ${styles.highlight}`}>Full</span>{' '}
                        <span className={`${styles.word} ${styles.highlight}`}>Stack</span>{' '}
                        <span className={styles.word}>Developer</span>
                    </h1>
                    
                    <p className={styles.heroSubtitle}>
                        A 4th Year BSIT Student. I build web and mobile applications, handle databases, and design intuitive user interfaces.</p>
                    
                    <div className={styles.buttonGroup}>
                        <a
                            href="#projects"
                            className={styles.primaryButton}
                            onClick={(e) => {
                                e.preventDefault();
                                const target = document.getElementById('projects');
                                if (target) target.scrollIntoView({ behavior: 'smooth' });
                                else window.location.hash = '#projects';
                            }}
                        >
                            See My Work
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        <a 
                            href={cv} 
                            download="DavenWaay-Resume.pdf"
                            className={styles.secondaryButton}
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 3V13M10 13L6 9M10 13L14 9M4 17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Download Resume
                        </a>
                    </div>
                    
                </div>
            </section>

            <section id="technologies" className={styles.techSection}>
                <h1 className={styles.techTitle}>Technologies</h1>
                
                <div className={styles.techGroup}>
                    <h2 className={styles.techSubtitle}>Most Used</h2>
                    <div className={styles.cardContainer}>
                        <div className={styles.mostUsedRow}>
                            <div className={styles.techCard}>
                                <div className={styles.iconContainer}>
                                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" className={styles.imageIcon} alt="React"/>
                                </div>
                                <div className={styles.textContainer}>
                                    <span className={styles.iconTitle}>React</span>
                                    <span className={styles.iconSubtitle}>Frontend Framework</span>
                                </div>
                            </div>

                            <div className={styles.techCard}>
                                <div className={styles.iconContainer}>
                                    <img src="https://cdn.worldvectorlogo.com/logos/react-native-1.svg" className={styles.imageIcon} alt="React Native"/>
                                </div>
                                <div className={styles.textContainer}>
                                    <span className={styles.iconTitle}>React Native</span>
                                    <span className={styles.iconSubtitle}>Mobile Development</span>
                                </div>
                            </div>

                            <div className={styles.techCard}>
                                <div className={styles.iconContainer}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" className={styles.imageIcon} alt="HTML"/>
                                </div>
                                <div className={styles.textContainer}>
                                    <span className={styles.iconTitle}>HTML</span>
                                    <span className={styles.iconSubtitle}>Markup Language</span>
                                </div>
                            </div>

                            <div className={styles.techCard}>
                                <div className={styles.iconContainer}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" className={styles.imageIcon} alt="CSS"/>
                                </div>
                                <div className={styles.textContainer}>
                                    <span className={styles.iconTitle}>CSS</span>
                                    <span className={styles.iconSubtitle}>Styling</span>
                                </div>
                            </div>

                            <div className={styles.techCard}>
                                <div className={styles.iconContainer}>
                                    <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png" className={styles.imageIcon} alt="JavaScript"/>
                                </div>
                                <div className={styles.textContainer}>
                                    <span className={styles.iconTitle}>JavaScript</span>
                                    <span className={styles.iconSubtitle}>Programming Language</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.techGroup}>
                    <h2 className={styles.techSubtitle}>Other Tech Stack</h2>
                    <div className={styles.cardContainer}>
                        <div className={styles.techCard}>
                            <div className={styles.iconContainer}>
                                <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" className={styles.imageIcon} alt="Python"/>
                            </div>
                            <div className={styles.textContainer}>
                                <span className={styles.iconTitle}>Python</span>
                                <span className={styles.iconSubtitle}>Programming Language</span>
                            </div>
                        </div>

                        <div className={styles.techCard}>
                            <div className={styles.iconContainer}>
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" className={styles.imageIcon} alt="TypeScript"/>
                            </div>
                            <div className={styles.textContainer}>
                                <span className={styles.iconTitle}>TypeScript</span>
                                <span className={styles.iconSubtitle}>Programming Language</span>
                            </div>
                        </div>

                        <div className={styles.techCard}>
                            <div className={styles.iconContainer}>
                                <img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" className={styles.imageIcon} alt="Firebase"/>
                            </div>
                            <div className={styles.textContainer}>
                                <span className={styles.iconTitle}>Firebase</span>
                                <span className={styles.iconSubtitle}>Backend Platform</span>
                            </div>
                        </div>

                        <div className={styles.techCard}>
                            <div className={styles.iconContainer}>
                                <img src="https://www.svgrepo.com/show/331488/mongodb.svg" className={styles.imageIcon} alt="MongoDB"/>
                            </div>
                            <div className={styles.textContainer}>
                                <span className={styles.iconTitle}>MongoDB</span>
                                <span className={styles.iconSubtitle}>Database</span>
                            </div>
                        </div>

                        <div className={styles.techCard}>
                            <div className={styles.iconContainer}>
                                <img src="https://www.svgrepo.com/show/354575/xampp.svg" className={styles.imageIcon} alt="XAMPP"/>
                            </div>
                            <div className={styles.textContainer}>
                                <span className={styles.iconTitle}>XAMPP</span>
                                <span className={styles.iconSubtitle}>Development Server</span>
                            </div>
                        </div>

                        <div className={styles.techCard}>
                            <div className={styles.iconContainer}>
                                <img src="https://cdn-icons-png.flaticon.com/512/10433/10433049.png" className={styles.imageIcon} alt="REST APIs"/>
                            </div>
                            <div className={styles.textContainer}>
                                <span className={styles.iconTitle}>REST APIs</span>
                                <span className={styles.iconSubtitle}>API Development</span>
                            </div>
                        </div>

                        <div className={styles.techCard}>
                            <div className={styles.iconContainer}>
                                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className={styles.imageIcon} alt="GitHub"/>
                            </div>
                            <div className={styles.textContainer}>
                                <span className={styles.iconTitle}>GitHub</span>
                                <span className={styles.iconSubtitle}>Version Control</span>
                            </div>
                        </div>

                        <div className={styles.techCard}>
                            <div className={styles.iconContainer}>
                                <img src="https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png" className={styles.imageIcon} alt="Figma"/>
                            </div>
                            <div className={styles.textContainer}>
                                <span className={styles.iconTitle}>Figma</span>
                                <span className={styles.iconSubtitle}>Design Tool</span>
                            </div>
                        </div>

                        <div className={styles.techCard}>
                            <div className={styles.iconContainer}>
                                <img src="https://cdn-icons-png.flaticon.com/512/732/732221.png" className={styles.imageIcon} alt="Office Tools"/>
                            </div>
                            <div className={styles.textContainer}>
                                <span className={styles.iconTitle}>Office Tools</span>
                                <span className={styles.iconSubtitle}>Productivity Suite</span>
                            </div>
                        </div>

                        <div className={styles.techCard}>
                            <div className={styles.iconContainer}>
                                <img src="https://cdn-icons-png.freepik.com/256/5968/5968377.png?semt=ais_white_label" className={styles.imageIcon} alt="Adobe Tools"/>
                            </div>
                            <div className={styles.textContainer}>
                                <span className={styles.iconTitle}>Adobe Tools</span>
                                <span className={styles.iconSubtitle}>Creative Suite</span>
                            </div>
                        </div>

                        <div className={styles.techCard}>
                            <div className={styles.iconContainer}>
                                <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" className={styles.imageIcon} alt="Node.js"/>
                            </div>
                            <div className={styles.textContainer}>
                                <span className={styles.iconTitle}>Node.js</span>
                                <span className={styles.iconSubtitle}>Backend</span>
                            </div>
                        </div>

                        <div className={styles.techCard}>
                            <div className={styles.iconContainer}>
                                <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" className={styles.imageIcon} alt="Next.js"/>
                            </div>
                            <div className={styles.textContainer}>
                                <span className={styles.iconTitle}>Next.js</span>
                                <span className={styles.iconSubtitle}>React Framework</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section
                id="projects"
                className={styles.projectsSection}
                style={{ backgroundImage: `url(${bg})` }}
            >
                <h1 className={styles.projectsTitle}>My Portfolio</h1>
                
                <div className={styles.projectCard}>
                    <div className={styles.projectHero}>
                        <img src={honda} alt="Honda Dasma" className={styles.projectHeroImage} />
                    </div>

                    <div className={styles.projectMetaRow}>
                        <span className={styles.projectPill}>React</span>
                        <span className={styles.projectPill}>Framer</span>
                        <span className={styles.projectPill}>MongoDB</span>
                    </div>

                    <div className={styles.projectBody}>
                        <h3 className={styles.projectTitle}>Review Hero</h3>
                        <p className={styles.projectDescription}>
                            A webapp created to help students study through digital flashcards and quizzes to make learning more effective and accessible.
                        </p>
                        <a className={styles.projectLink} href="https://www.hondacarsdasmarinas.com/" target="_blank" rel="noopener noreferrer">
                            <span className={styles.projectLinkIcon} aria-hidden="true">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 3h7v7"></path>
                                    <path d="M10 14L21 3"></path>
                                    <path d="M5 5v14a2 2 0 0 0 2 2h14"></path>
                                </svg>
                            </span>
                            Live Demo
                        </a>
                    </div>
                </div>

                <div className={styles.projectCard}>
                    <div className={styles.projectHero}>
                        <img src={tnt} alt="Think n tinker" className={styles.projectHeroImage} />
                    </div>

                    <div className={styles.projectMetaRow}>
                        <span className={styles.projectPill}>React Native</span>
                        <span className={styles.projectPill}>Typescript</span>
                        <span className={styles.projectPill}>Firebase</span>
                        <span className={styles.projectPill}>Expo Go</span>
                    </div>

                    <div className={styles.projectBody}>
                        <h3 className={styles.projectTitle}>Think n Tinker</h3>
                        <p className={styles.projectDescription}>
                            Think n’ Tinker is an interactive learning app designed to help young children explore foundational concepts through engaging, play-based, and multi-sensory activities.
                        </p>
                        <Link className={styles.projectLink} to="/think-n-tinker">
                            <span className={styles.projectLinkIcon} aria-hidden="true">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 3h7v7"></path>
                                    <path d="M10 14L21 3"></path>
                                    <path d="M5 5v14a2 2 0 0 0 2 2h14"></path>
                                </svg>
                            </span>
                            More Info
                        </Link>
                    </div>
                </div>


                <div className={styles.projectCard}>
                    <div className={styles.projectHero}>
                        <img src={Evt} alt="Event Registration" className={styles.projectHeroImage} />
                    </div>

                    <div className={styles.projectMetaRow}>
                        <span className={styles.projectPill}>React</span>
                        <span className={styles.projectPill}>Vite</span>
                        <span className={styles.projectPill}>NextJs</span>
                        <span className={styles.projectPill}>MVC</span>
                        <span className={styles.projectPill}>ORM</span>
                    </div>

                    <div className={styles.projectBody}>
                        <h3 className={styles.projectTitle} style={{fontSize: '1.5rem'}}>Event Registration with Qr Code Scanner</h3>
                        <p className={styles.projectDescription}>
                            A web application for event registration and ticket QR code scanning. Users can register for events, and organizers can scan tickets efficiently.
                            <br></br>credentials: admin@event.com, organizer@event.com, password:1234
                        </p>
                        <a className={styles.projectLink} href="https://eventregistration-5cu6lqav9-davens-projects-1865bc48.vercel.app" target="_blank" rel="noopener noreferrer">
                            <span className={styles.projectLinkIcon} aria-hidden="true">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 3h7v7"></path>
                                    <path d="M10 14L21 3"></path>
                                    <path d="M5 5v14a2 2 0 0 0 2 2h14"></path>
                                </svg>
                            </span>
                            Live Demo
                        </a>
                    </div>
                </div>
                
                <div className={styles.projectCard}>
                    <div className={styles.projectHero}>
                        <img src={Hacktivate} alt="Hacktivate hero" className={styles.projectHeroImage} />
                    </div>

                    <div className={styles.projectMetaRow}>
                        <span className={styles.projectPill}>React</span>
                        <span className={styles.projectPill}>HTML</span>
                        <span className={styles.projectPill}>CSS</span>
                        <span className={styles.projectPill}>Javascript</span>
                    </div>

                    <div className={styles.projectBody}>
                        <h3 className={styles.projectTitle}>Hacktivate</h3>
                        <p className={styles.projectDescription}>
                           This website is a group portfolio that showcases the team’s work, skills, and fields of experience.
                        </p>
                        <a className={styles.projectLink} href="https://slricta.github.io/team-portfolio-project/" target="_blank" rel="noopener noreferrer">
                            <span className={styles.projectLinkIcon} aria-hidden="true">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 3h7v7"></path>
                                    <path d="M10 14L21 3"></path>
                                    <path d="M5 5v14a2 2 0 0 0 2 2h14"></path>
                                </svg>
                            </span>
                            Live Demo
                        </a>
                    </div>
                </div>

                
            </section>
        </main>
    );
}