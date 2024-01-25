import React, { useState } from "react";
import './List.css';
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import format from "date-fns/format";
import { DateRange } from "react-date-range";
import SearchItems from "../../components/SearchItems/SearchItems";

const List = ()=>{
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);
return(
    <div><Navbar/>
     <Header type="list" />
     <div className="listContainer">
        <div className="listWrapper">
            <div className="listSearch">
                <div className="lsTitle">Search</div>
                <div className="lsItem">
                    <label>Destination</label>
                    <input placeholder={destination} type="text" />
                </div>
                <div className="lsItem">
                    <label>Check-in Date</label>
                    <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                    {openDate && (<DateRange 
                    onChange={(item)=>setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                    />)}
                </div>
                <div className="lsItem">
                    <label >Options</label>
                    <div className="lsOptions">

                    <div className="lsOptionItem">
                        <span className="lsOptionText">
                            Min Price <small>per night</small>
                        </span>
                        <input type="number" className="lsOptionInput" />
                    </div>
                    <div className="lsOptionItem">
                        <span className="lsOptionText">
                            Max Price <small>per night</small>
                        </span>
                        <input type="number" className="lsOptionInput" />
                    </div>
                    <div className="lsOptionItem">
                        <span className="lsOptionText">
                            Adult
                        </span>
                        <input type="number" className="lsOptionInput" min={1} placeholder={options.adults} />
                    </div>
                    <div className="lsOptionItem">
                        <span className="lsOptionText">
                            Children
                        </span>
                        <input type="number" className="lsOptionInput" min={0} placeholder={options.children}/>
                    </div>
                    <div className="lsOptionItem">
                        <span className="lsOptionText">
                            Rooms
                        </span>
                        <input type="number" className="lsOptionInput" min={1} placeholder={options.rooms}/>
                    </div>
                    </div>
                </div>
                <button>Search</button>
            </div>
            <div className="listResult">
                <SearchItems/>
                <SearchItems/>
                <SearchItems/>
                <SearchItems/>
                <SearchItems/>
                <SearchItems/>
                <SearchItems/>
                <SearchItems/>
            </div>
        </div>
     </div>
     </div>
)
}
export default List;