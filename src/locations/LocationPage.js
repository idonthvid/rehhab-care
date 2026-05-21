import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useLocation } from 'react-router-dom';
import './LocationPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const LocationPage = ({ locationData }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const {
        locationName,
        seoTitle,
        seoDescription,
        canonicalUrl,
        heroTitle,
        heroSubtitle,
        servingAreas,
        conditions,
        whyChooseReasons,
        itProfessionalSection,
        howItWorks,
        faqs,
        contactInfo
    } = locationData;

    const handleBookAppointment = () => {
        if (location.pathname !== '/') {
            // Navigate to home page with state to scroll to appointment
            navigate('/', { state: { scrollToAppointment: true } });
        } else {
            // Already on home page, just scroll
            const appointmentSection = document.querySelector('.appointment-section');
            if (appointmentSection) {
                appointmentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    const handleWhatsApp = () => {
        const phoneNumber = contactInfo.whatsapp.replace(/[^0-9]/g, '');
        const message = `Hi, I'm looking for Home Physiotherapy in ${locationName}. What are the charges?`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>

            <Header />

            <div className="location-page">
                {/* Hero Section */}
                <section className="loc-hero">
                    <div className="loc-hero-content">
                        <h1 className="loc-hero-title">{heroTitle}</h1>
                        <p className="loc-hero-subtitle">{heroSubtitle}</p>

                        <div className="loc-hero-services">
                            <span>Back Pain</span>
                            <span>Knee Pain</span>
                            <span>Post-Surgery</span>
                            <span>Sciatica</span>
                            <span>Neck & Shoulder</span>
                            <span>Neuro Rehab</span>
                        </div>

                        <div className="loc-hero-contact">
                            <div className="loc-contact-item">
                                <span className="loc-contact-icon">🌐</span>
                                <span>Book Online:{contactInfo.website}</span>
                            </div>
                            <div className="loc-contact-item">
                                <span className="loc-contact-icon">📞</span>
                                <span>Call / WhatsApp:{contactInfo.phone}</span>
                            </div>
                        </div>

                        <p className="loc-serving-areas">
                            Serving {servingAreas.slice(0, 5).join(', ')} & nearby areas
                        </p>
                    </div>
                </section>

                {/* Features Section */}
                <section className="loc-features">
                    <div className="loc-features-container">
                        <div className="loc-features-grid">
                            <div className="loc-feature-card">
                                <div className="loc-feature-icon">🏠</div>
                                <h3>At-Home Service</h3>
                            </div>
                            <div className="loc-feature-card">
                                <div className="loc-feature-icon">👨‍⚕️</div>
                                <h3>Qualified Physios</h3>
                            </div>
                            <div className="loc-feature-card">
                                <div className="loc-feature-icon">📅</div>
                                <h3>Flexible Timings</h3>
                            </div>
                            <div className="loc-feature-card">
                                <div className="loc-feature-icon">💬</div>
                                <h3>WhatsApp Booking</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content with Image */}
                <section className="loc-main-content">
                    <div className="loc-container">
                        <div className="loc-content-grid">
                            <div className="loc-content-text">
                                <h2>Home & Doorstep Physiotherapy in {locationName}</h2>
                                <p>
                                    If you live or work in {locationName} and are dealing with back pain, neck stiffness,
                                    knee pain, post-surgery recovery, or any musculoskeletal condition, Rehabb Care brings
                                    professional physiotherapy directly to your home. No travel. No waiting rooms.
                                    Expert doorstep physiotherapy at a time that suits you.
                                </p>
                                <div className="loc-contact-info">
                                    <p>Book your session today:</p>
                                    <div className="loc-contact-methods">
                                        <div className="loc-contact-method">
                                            <span className="loc-contact-label">🌐 Website:</span>
                                            <span className="loc-contact-value">{contactInfo.website}</span>
                                        </div>
                                        <div className="loc-contact-method">
                                            <span className="loc-contact-label">📞 Call/WhatsApp:</span>
                                            <span className="loc-contact-value">{contactInfo.phone}</span>
                                        </div>
                                    </div>
                                    <p className="loc-contact-cta">Get matched with a qualified physiotherapist in {locationName} today.</p>
                                </div>
                                <button className="loc-btn-primary" onClick={handleBookAppointment}>
                                    Book Online Now
                                </button>
                            </div>
                            <div className="loc-content-image">
                                <img
                                    src="/images/location-1.png"
                                    alt="Physiotherapist treating patient at home"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Section */}
                <section className="loc-why-choose">
                    <div className="loc-container">
                        <h2>Why Choose Home & Doorstep Physiotherapy in {locationName}?</h2>
                        <p className="loc-why-choose-intro">
                            {locationName} is one of Hyderabad's most demanding work environments. Long desk hours,
                            screen-intensive routines, and limited movement make musculoskeletal problems common
                            among IT professionals and corporate employees here.
                        </p>
                        <p className="loc-why-choose-intro">
                            Getting to a clinic after an exhausting workday is often the reason people delay treatment
                            and let conditions worsen. Our doorstep physiotherapy service removes that barrier entirely.
                            Your therapist comes to your home at a time that works for you.
                        </p>

                        <div className="loc-reasons-grid">
                            {whyChooseReasons.map((reason, index) => (
                                <div key={index} className="loc-reason-card">
                                    <div className="loc-reason-number">{index + 1}</div>
                                    <p>{reason}</p>
                                </div>
                            ))}
                        </div>

                        <div className="loc-image-container">
                            <img
                                src="/images/location-2.png"
                                alt="Why home physiotherapy benefits"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </section>

                {/* Conditions Section */}
                <section className="loc-conditions">
                    <div className="loc-container">
                        <h2>Conditions We Treat with Home Physiotherapy in {locationName}</h2>
                        <div className="loc-conditions-grid">
                            {conditions.map((condition, index) => (
                                <div key={index} className="loc-condition-card">
                                    <h3>{condition.title}</h3>
                                    <p>{condition.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* IT Professionals Section */}
                <section className="loc-it-section">
                    <div className="loc-container">
                        <h2>{itProfessionalSection.title}</h2>
                        <p className="loc-it-description">{itProfessionalSection.description}</p>

                        <h3>Our doorstep physiotherapy programs for corporate employees and IT professionals address:</h3>
                        <div className="loc-issues-grid">
                            {itProfessionalSection.issues.map((issue, index) => (
                                <div key={index} className="loc-issue-item">
                                    <div className="loc-issue-number">{index + 1}</div>
                                    <p>{issue}</p>
                                </div>
                            ))}
                        </div>

                        <p className="loc-additional-info">{itProfessionalSection.additionalInfo}</p>
                    </div>
                </section>

                {/* Areas We Serve */}
                <section className="loc-areas">
                    <div className="loc-container">
                        <h2>Areas We Serve Near {locationName}, Hyderabad</h2>
                        <p className="loc-areas-intro">
                            Our home physiotherapy service covers {locationName} and all surrounding residential
                            and commercial areas. We provide doorstep physiotherapy to patients in:
                        </p>
                        <div className="loc-areas-grid">
                            {servingAreas.map((area, index) => (
                                <div key={index} className="loc-area-item">
                                    <div className="loc-area-number">{index + 1}</div>
                                    <span>{area}</span>
                                </div>
                            ))}
                        </div>
                        <p className="loc-area-note">
                            Unsure if we cover your area? Visit {contactInfo.website} or WhatsApp us on {contactInfo.phone} to confirm.
                        </p>
                    </div>
                </section>

                {/* How It Works */}
                <section className="loc-how-it-works">
                    <div className="loc-container">
                        <h2>How Rehabb Care Doorstep Physiotherapy Works</h2>
                        <div className="loc-steps">
                            {howItWorks.map((step, index) => (
                                <div key={index} className="loc-step">
                                    <div className="loc-step-header">
                                        <div className="loc-step-number">Step {index + 1}</div>
                                        <h3>{step.title}</h3>
                                    </div>
                                    <p>{step.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="loc-image-container">
                            <img
                                src="/images/location-3.png"
                                alt="Physiotherapist arriving at patient home"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="loc-faq">
                    <div className="loc-container">
                        <h2>Frequently Asked Questions</h2>
                        <div className="loc-faq-grid">
                            {faqs.map((faq, index) => (
                                <div key={index} className="loc-faq-item">
                                    <h3>{faq.question}</h3>
                                    <p>{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="loc-final-cta">
                    <div className="loc-container">
                        <h2>Book Doorstep Physiotherapy in {locationName} Today</h2>
                        <p className="loc-final-cta-text">
                            Do not let pain, stiffness, or injury disrupt your work or daily life any longer.
                            Rehabb Care brings qualified physiotherapists directly to your home in {locationName},
                            {servingAreas.slice(0, 3).join(', ')}, and surrounding areas.
                        </p>

                        <div className="loc-cta-grid">
                            <div className="loc-cta-card">
                                <div className="loc-cta-icon">🌐</div>
                                <h3>Book Online</h3>
                                <p>{contactInfo.website}</p>
                                <button className="loc-btn-primary" onClick={handleBookAppointment}>
                                    Book Now
                                </button>
                            </div>

                            <div className="loc-cta-card">
                                <div className="loc-cta-icon">📲</div>
                                <h3>Call / WhatsApp</h3>
                                <p>{contactInfo.phone}</p>
                                <button className="loc-btn-secondary" onClick={handleWhatsApp}>
                                    WhatsApp
                                </button>
                            </div>
                        </div>

                        <p className="loc-cta-note">
                            Same-day and next-day appointments are often available. Our team will help you
                            choose the right therapy plan and book a convenient doorstep session.
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
            <WhatsAppFloat />
        </>
    );
};

export default LocationPage;
