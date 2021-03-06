import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import HomeContact from './HomeContact';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testmonials from './Testmonials';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <Treatment></Treatment>
           <MakeAppointment></MakeAppointment>
           <Testmonials></Testmonials>
           <HomeContact></HomeContact>
           <Footer></Footer>
        </div>
    );
};

export default Home;