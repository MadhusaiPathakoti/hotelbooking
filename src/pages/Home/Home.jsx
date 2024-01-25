import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties';
import Footer from '../../components/Footer/Footer';
import MailList from '../../components/MailList/MailList';
import Featured from '../../components/featured/featured';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import PropertyList from '../../components/propertylist/PropertyList';
import './Home.css';

const Home = () => {
    return(
        <div> <Navbar/><Header/>
        <div className="homeContainer">
            <Featured/>
            <h1 className="homeTitle">Browse by property type</h1>
            <PropertyList/>
            <h1 className="homeTitle">Homes guests love</h1>
            <FeaturedProperties/>
            <MailList/>
            <Footer/>
        </div>
         </div>
       
    )
}

export default Home;