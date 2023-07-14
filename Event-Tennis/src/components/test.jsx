import React, { useState } from 'react';

const Container = () => {
  // State to keep track of the active section
  const [activeSection, setActiveSection] = useState('home');

  // Function to handle navbar item click and update the active section
  const handleNavbarItemClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      {/* Navbar */}
      <nav>
        <ul>
          {/* Home navbar item */}
          <li onClick={() => handleNavbarItemClick('home')}>Home</li>

          {/* Agenda navbar item */}
          <li onClick={() => handleNavbarItemClick('agenda')}>Agenda</li>

          {/* Contact navbar item */}
          <li onClick={() => handleNavbarItemClick('contact')}>Contact</li>
        </ul>
      </nav>

      {/* Render the active section based on the activeSection state */}
      {activeSection === 'home' && <HomeSection />}
      {activeSection === 'agenda' && <AgendaSection />}
      {activeSection === 'contact' && <ContactSection />}
    </div>
  );
};

// Home section component
const HomeSection = () => {
  return <section>Home Section</section>;
};

// Agenda section component
const AgendaSection = () => {
  return <section>Agenda Section</section>;
};

// Contact section component
const ContactSection = () => {
  return <section>Contact Section</section>;
};

export default Container;