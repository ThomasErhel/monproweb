import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import {
  LogoGithubIcon,
  ZapIcon,
  BookIcon,
  CheckIcon,
  TerminalIcon,
  CodeIcon,
  RocketIcon,
} from '@primer/octicons-react';
import { FcGoogle } from 'react-icons/fc';
import { FaUbuntu } from 'react-icons/fa';
import {
  Header,
  StyledOcticon,
  CircleOcticon,
  StateLabel,
  BaseStyles,
  Box,
  Heading,
  Button,
  Text,
  ButtonPrimary,
  Link,
} from '@primer/components';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Router>
          <Header>
            <Header.Item>
              <Header.Link as={NavLink} to="/" fontSize={2}>
                <StyledOcticon icon={RocketIcon} size={32} mr={2} />
                <span>Mon Pro Web</span>
              </Header.Link>
            </Header.Item>
            <Header.Item>
              <Header.Link as={NavLink} to="/a-propos">
                À-propos
            </Header.Link>
            </Header.Item>
            <Header.Item>
              <Header.Link as={NavLink} to="/equipe">
                L'équipe
            </Header.Link>
            </Header.Item>
          </Header>
          <Box m={4}>
            <img src={logo} className="App-logo" alt="logo" />
          </Box>
          <Switch>
            <Route path="/equipe">
              <Team />
            </Route>
            <Route path="/a-propos">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </HelmetProvider>
  );
}

function Home() {
  return (
    <HelmetProvider>
      <div className="App-home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>MPW | Mon Pro Web</title>
          <link rel="canonical" href="https://monproweb.io/a-propos" />
        </Helmet>
        <BaseStyles>
          <Box m={4}>
            <Heading as="h1" mb={2}>
              Je construis des applications Web et mobile.
          </Heading>
            <Text as="p" mr={3}>
              Bienvenue sur Mon Pro Web, je vous aide à développer votre
              visibilité en ligne à l'aide d'applications performantes qui suivent
              les bonnes pratiques.
          </Text>
            <Box m={4}>
              <Button
                as="a"
                className="App-link"
                href="https://facebook.com/monproweb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Page Facebook
            </Button>
            </Box>
          </Box>
        </BaseStyles>
      </div>
    </HelmetProvider>
  );
}

function About() {
  return (
    <HelmetProvider>
      <div className="App-a-propos">
        <Helmet>
          <meta charSet="utf-8" />
          <title>MPW | À-propos</title>
          <link rel="canonical" href="https://monproweb.io/a-propos" />
        </Helmet>
        <BaseStyles>
          <Box m={4}>
            <Heading as="h1" mb={2}>
              À-propos
          </Heading>
          </Box>
          <Box m={4}>
            <Text as="p" mr={3}>
              Je suis actuellement en train d'apprendre React.
          </Text>
          </Box>
          <Box m={4}>
            <StateLabel status="issueOpened">Open</StateLabel>
          </Box>
          <Box m={4}>
            <FcGoogle size={42} />
            <Link
              mb={1}
              href="https://coursera.org/share/7e3de15dc9292c8949d518a86bb8c640"
            >
              Google IT Automation with Python
          </Link>
          </Box>
          <Box m={4}>
            <TerminalIcon aria-label="Icône terminal" size={100} />
          </Box>
          <Box m={4}>
            <CodeIcon aria-label="Icône code" size={100} />
          </Box>
          <Box m={4}>
            <Button as="a" href="mailto:thomas.erhel@gmail.com">
              Contactez-moi
          </Button>
          </Box>
        </BaseStyles>
      </div>
    </HelmetProvider>
  );
}

function Team() {
  return (
    <HelmetProvider>
      <div className="App-equipe">
        <Helmet>
          <meta charSet="utf-8" />
          <title>MPW | L'équipe</title>
          <link rel="canonical" href="https://monproweb.io/equipe" />
        </Helmet>
        <BaseStyles>
          <Box m={4}>
            <Heading as="h1" mb={2}>
              Un développeur : Thomas Erhel
            <CircleOcticon
                icon={CheckIcon}
                size={32}
                bg="green.5"
                color="white"
              />
            </Heading>
          </Box>
          <Box m={4}>
            <Text as="p" mr={3}>
              #zeroknowledge #practicemakesperfect #blacklivesmatter
          </Text>
          </Box>
          <Box m={4}>
            <a href="https://github.com/ThomasErhel/">
              <LogoGithubIcon size="large" aria-label="Icône logo GitHub" />
            </a>
          </Box>
          <Box m={4}>
            <Button
              as="a"
              className="App-link"
              href="https://blog.monproweb.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ZapIcon aria-label="Icône éclair" /> Blog
          </Button>
          </Box>
          <Box m={4}>
            <Button
              as="a"
              className="App-link"
              href="https://docs.monproweb.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookIcon aria-label="Icône livre" /> Docs
          </Button>
          </Box>
          <Box m={4}>
            <ButtonPrimary
              as="a"
              className="App-link"
              href="https://ubuntu.com/download/desktop"
              target="_blank"
              rel="noopener noreferrer"
              variant="large"
            >
              <FaUbuntu aria-label="Icône Ubuntu" size="20" /> Télécharger ubuntu
          </ButtonPrimary>
          </Box>
        </BaseStyles>
      </div>
    </HelmetProvider>
  );
}
