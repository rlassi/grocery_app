import React, { useState } from 'react';
import {useTransition, animated} from 'react-spring';
import useWindowWidth from '../overlays/hooks/useWindowWidth';
import Styled from './styles';
import Logo from './Logo';
import AppNavLinks from './navigation';
import NavSideDrawer from './navigation/side-drawer';
import BackDrop from '../styled-components/UI/BackDrop';
import SD from '../overlays/styles';
import Grid from '../styled-components/UI/GridStyles';
import Hamburger from './navigation/side-drawer/Hamburger';
import MobileSearch from './MobileSearch';
import DesktopSearch from './DesktopSearch';

const Header = () => {
    const [show, setShow] = useState(false);
    const handleHamburgerClick = () => {
        setShow(!show);
    }
    let windowWidth = useWindowWidth();
    let width = windowWidth >= 599 ? '400px' : `${windowWidth}px`;
    const transitions = useTransition(show, null, {
        from: { position: 'fixed', top: '0', right: '0', transform: `translate(${width})` },
        enter: { transform: 'translate(0)'},
        leave: { transform: `translate(${width})`},
    });
    const AnimatedSideDrawer = transitions.map(({ item, key, props }) => {
        return item && (
            <animated.div key={key} style={props}>
                <SD.SideDrawer width={width}>
                    <NavSideDrawer setShow={setShow} />
                </SD.SideDrawer>
            </animated.div>
    )});

    return (
        <Styled.Header>
            <BackDrop show={show} onClick={() => setShow(!show)} />
            {AnimatedSideDrawer}
            <Grid.Container fullWidth>
                <Grid.Flex 
                    align="center"
                    height="65px"
                    noGutters
                >
                    <Logo />
                    <MobileSearch />
                    <DesktopSearch />
                    <AppNavLinks/>
                    <Hamburger 
                        handleClick={handleHamburgerClick}
                        show={show}
                    />
                </Grid.Flex>
            </Grid.Container>
        </Styled.Header>
    );
}

export default Header;