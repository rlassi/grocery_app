import React from 'react';

import UI from '../components/styled-components/UI/styles';
import Grid from '../components/styled-components/UI/GridStyles';

const Welcome = () => {
    return (
        <React.Fragment>
        <UI.Hero>
            <h1 style={{ fontFamily: "'Indie Flower', cursive", fontSize: '2.75rem'}}>People's Market</h1>
        </UI.Hero>
        <Grid.Container
            fullWidth 
            noGutters
            padding="3rem 2rem"
        >
            <div style={{ margin: '0 auto', maxWidth: "45rem"}}>
                <h1>Welcome to People's Market!</h1>
                <section>
                    <h2>A Fresh Approach to Grocery Inventory Management</h2>
                    <p>Hello, and thank you for visiting!  My name is Ryan, and I’m a fullstack developer working mainly on the front-end using all flavors of JavaScript. This inventory system is a Phase One concept. It was created in response to my less-than-optimal experience ordering groceries from my local Food Co+Op during the Covid-19 pandemic.</p>
                    
                    <p>My thoughts are that small grocers should feel empowered to bring inventory management online. This portal is meant to be a “back-end” for grocery store employees use only. Some in-development features to expect soon are:</p>
                    
                    <ul style={{ listStyleType: 'circle' }}>
                        <li>An easier way to add, delete categories</li>
                        <li>Internal comments section on individual items for employees to discuss product-specific issues/needs/thoughts</li>
                        <li>Universal posting system for employees to create informational posts for others to see</li>
                    </ul> 
                     
                    <p>My eventual goal is to build a “front-end” that will take the inventory input and present it to the customer, complete with a “shopping cart”, saving favorites, upvoting products, and more robust search filter system (i.e. searching for organic products only/in season/fair trade etc.). This project was built using the MERN stack and was deployed to Heroku using the cloud Mongo database Atlas.</p>
                </section>
            </div>
        </Grid.Container>
        </React.Fragment>
    )
}

export default Welcome;