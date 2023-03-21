import { Box } from '@primer/react'
import { useSpring, animated } from 'react-spring'
import Programming from '../../../images/programming.svg'

export default function ProgrammingImage() {
    const imageAnimation = useSpring({
        from: { opacity: 0, transform: 'scale(0.8)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: { duration: 1000 },
    })

    return (
        <Box p={3}>
            <animated.div style={imageAnimation}>
                <img
                    className="programming"
                    src={Programming}
                    alt="programming"
                    width="300px"
                    height="300px"
                />
            </animated.div>
        </Box>
    )
}
