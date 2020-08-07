import React, { useRef } from 'react';
import { useTransition, animated } from 'react-spring';
import useOverlayListener from './hooks/useOverlayListener';
import AppSearchBar from '../header/AppSearchBar';
import Styled from './styles';

const MobileSearchOverlay = ({ show, close }) => {
    const ref = useRef(null);
    useOverlayListener(ref, show, close);

    const transitions = useTransition(show, null, {
        from: { height: '0px', overflow: 'hidden' },
        enter: { height: '65px' },
        leave: { height: '0px' },
    });
    const AnimatedMobileSearchOverlay = transitions.map(({ item, key, props }) => {
        return item && (
            <animated.div key={key} style={props}>
                <Styled.MobileSearchOverlayContents>
                    <AppSearchBar />
                </Styled.MobileSearchOverlayContents>
            </animated.div>
        )
    })
    return (
        <Styled.MobileSearchOverlay ref={ref}>
            {AnimatedMobileSearchOverlay}
        </Styled.MobileSearchOverlay>
    )
}

export default MobileSearchOverlay;
