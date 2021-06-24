import React from 'react';
import programming from '../images/programming.svg';
import avatarthomaserhel from '../images/avatar-thomaserhel.svg';
import avatarmonproweb from '../images/avatar-monproweb.svg';
import {
    StarIcon,
} from '@primer/octicons-react';
import {
    ThemeProvider,
    BaseStyles,
    Box,
    Heading,
    Text,
    Link,
    Avatar,
    Label,
    Tooltip,
    CounterLabel,
    ProgressBar,
} from '@primer/components';
import Footer from '../components/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Team = () => {
    return (
        <ThemeProvider>
            <HelmetProvider>
                <div className="Mpw-team">

                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>MPW | L'équipe</title>
                        <link rel="canonical" href="https://monproweb.io/equipe" />
                    </Helmet>

                    <BaseStyles>

                        <Box m={4} >

                            <Box p={3}>
                                <img src={programming} alt="Programming" className="Mpw-undraw hover-grow" />
                            </Box>

                            <Heading as="h1" mb={2} className="anim-fade-in">Thomas Erhel</Heading>

                            <Box p={3}>
                                <Text as="p" mr={3} className="anim-fade-up">#ZeroKnowledge #PracticeMakesPerfect #NeverGiveUp</Text>

                                <Box p={3}>
                                    <Tooltip aria-label="Mon Pro Web"><StarIcon className="Mpw-star" size={16} /><span>  </span><Label color="#a371f7" className="Mpw-label">mpw</Label></Tooltip>
                                </Box>

                                <Box p={3}>
                                    <iframe src="https://anchor.fm/monproweb/embed/episodes/Informatique-Durable-e12v4uc" title="Informatique Durable" height="102px" width="260px" frameBorder="0" scrolling="no"></iframe>
                                </Box>

                            </Box>

                            <Box m={4}>
                                <Avatar src={avatarthomaserhel} /><span>  </span>
                                <Link mb={1} href="https://github.com/ThomasErhel/">Thomas Erhel</Link>
                            </Box>

                            <Box m={4}>
                                <Avatar square src={avatarmonproweb} /><span>  </span>
                                <Link mb={1} href="https://github.com/monproweb/">Monproweb</Link>
                            </Box>

                            <Box p={3}>
                                <Text mr={3}>EcoIndex <CounterLabel>B</CounterLabel></Text>
                                <ProgressBar progress={68} inline width="100px" />
                            </Box>

                        </Box>

                        <Footer />

                    </BaseStyles>
                </div>
            </HelmetProvider >
        </ThemeProvider>
    );
}

export default Team;