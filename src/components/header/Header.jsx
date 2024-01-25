import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faLocationDot, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns';
import { useNavigate } from 'react-router-dom';

const Header = ({type})=>{
    const [openDate, setOpenDate] = useState(false);
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState([{
        startDate : new Date(),
        endDate : new Date(),
        key : 'selection'
    }]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adults: 1,
        children :0,
        rooms : 1
    });
    const handleOption = (name, operation)=>{
        setOptions((prev)=>{
            return{
                ...prev,
                [name]: operation === "i"? options[name]+1 : options[name]-1
            };
        });
    };
    const navigate = useNavigate();
    const handleSearch = ()=>{
        navigate('/hotels', {state:{destination, date, options}});
    }
    return(
        <div className="header">
            <div className={type === "list" ? "headerContainer listmode": "headerContainer"}>

            <div className="headerList">
                <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car Rentals</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>Attractions</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport Taxis</span>
                </div>
            </div>
           { type !== "list" && 
           <><h1 className="headerTitle">Find your next stay</h1>
            <p className="headerDesc">
            Search deals on hotels, homes, and much more... Get rewarded for your travels 
            </p>
            <button className="headerBtn">SignIn/Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon className='headerIcon' icon={faBed} />
                    <input type='text' placeholder='Where are you going?'  onChange={e =>{setDestination(e.target.value)}} className='headerSearchInput' style={{color: "#1a1a1a"}} />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon className='headerIcon' icon={faCalendar} />
                   <span onClick={()=>{setOpenDate(!openDate)}} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to
                   ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                   { openDate && <DateRange 
                   editableDateInputs={true} 
                   onChange={item => setDate([item.selection])} 
                   moveRangeOnFirstSelection={false}  
                   ranges={date}
                   className='date'
                   minDate={new Date()}
                   />} 
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon className='headerIcon' icon={faPerson} />
                   <span onClick={()=>{setOpenOptions(!openOptions)}} className='headerSearchText'>{`${options.adults} adults . ${options.children} children . ${options.rooms} rooms`}</span>
                   {openOptions && 
                    <div className="options">
                    <div className="optionItem">
                        <span className="optionText">Adults</span>
                        <div className="optionCounter">
                        <button className="optionCounterBtn" 
                        disabled={options.adults<=1}
                        onClick={()=>handleOption("adults", "d")}>-</button>
                        <span className="optionCounterTxt">{options.adults}</span>
                        <button className="optionCounterBtn" onClick={()=>handleOption("adults", "i")}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                        <button className="optionCounterBtn" disabled={options.children<1} onClick={()=>handleOption("children", "d")}>-</button>
                        <span className="optionCounterTxt">{options.children}</span>
                        <button className="optionCounterBtn" onClick={()=>handleOption("children", "i")}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Rooms</span>
                        <div className="optionCounter">
                        <button className="optionCounterBtn" disabled={options.rooms<=1} onClick={()=>handleOption("rooms", "d")}>-</button>
                        <span className="optionCounterTxt">{options.rooms}</span>
                        <button className="optionCounterBtn" onClick={()=>handleOption("rooms", "i")}>+</button>
                        </div>
                    </div>
                   </div>
                   }
                </div>
                <div className="headerSearchItem">
                        <button className="headerSearchBtn" onClick={handleSearch}>Search</button>
                </div>
            </div></>}
            </div>
        </div>
    )
}
export default Header;