import React from 'react';
import Container from './components/Container';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Footer from './components/Footer';
import {
  firstName,
  fullName,
  links,
  socialLinks,
  projects
} from './constants'

function App() {
  return (
    <div>
      <Container>
        <Header name={fullName} links={links} />
        <Intro name={firstName} aboutLinkHref={links[1].href} />
        <Projects projects={projects} />
      </Container>
      <Footer links={socialLinks} />
    </div>
  );
}

export default App;
