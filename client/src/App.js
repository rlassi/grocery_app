import React from 'react';
import { connect } from 'react-redux';
import AppRouter from './router/AppRouter';
import ModalContainer from './components/overlays/ModalContainer';
import SideDrawerContainer from './components/overlays/SideDrawerContainer';
import BackDrop from './components/styled-components/UI/BackDrop';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styled-components/GlobalStyles';
import theme from './components/styled-components/UI/theme';
import { closeModal, closeSideDrawer } from './store/actions/overlaysActions';
import './App.css';

const App = ({ 
  showModal, 
  modal,
  showSideDrawer,
  sideDrawer,
  closeModal, 
  closeSideDrawer 
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRouter>
        <BackDrop show={showSideDrawer} onClick={closeSideDrawer} />
        <SideDrawerContainer sideDrawer={sideDrawer} />
        <BackDrop show={showModal} onClick={closeModal} />
        <ModalContainer modal={modal} />
      </AppRouter>
    </ThemeProvider>
  );
};

const mapDispatch = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  closeSideDrawer: (sideDrawerType) => dispatch(closeSideDrawer(sideDrawerType)),
})

const mapState = state => ({
  showModal: state.overlays.modal.show,
  modal: state.overlays.modal,
  showSideDrawer: state.overlays.sideDrawer.show,
  sideDrawer: state.overlays.sideDrawer
})

export default connect(mapState, mapDispatch)(App);
