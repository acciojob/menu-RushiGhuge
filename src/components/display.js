import React, { useState } from "react";
import data from "./data"



const Display = () => {
    const [currentList, setCurrentList] = useState(data);

    // console.log(data);


    function handelCatagiry(e) {
        let curr = [];
        // console.log(e.target.innerText);
        if (e.target.innerText == 'Breakfast') {
            curr = data.filter((item, index) => {
                return item.category == 'breakfast';
            })
        }
        else if (e.target.innerText == 'Lunch') {
             curr = data.filter((item, index) => {
                return item.category == 'lunch';
            })
        }
        else if (e.target.innerText == 'Shakes') {
             curr = data.filter((item, index) => {
                return item.category == 'shakes';
            })
        }
        else if (e.target.innerText == 'All') {
            setCurrentList(data);
            return;
        }
        setCurrentList(curr);



    }

    return (
        <div id="main">
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    cursor: "pointer",
                    fontSize: "1.2rem"
                }}
            >
                <p onClick={handelCatagiry}>All</p>
                <p id="filter-btn-1" onClick={handelCatagiry}>Breakfast</p>
                <p id="filter-btn-2" onClick={handelCatagiry} >Lunch</p>
                <p id="filter-btn-3" onClick={handelCatagiry} >Shakes</p>
            </div>

            <div className="display-container">
                {currentList.map((item, index) => {

                    return (
                        <div key={index} className="item">
                            <img src="" alt="" />
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <h3>{item.title}</h3>
                                <h3>{item.price}</h3>
                            </div>
                            <p>{item.desc}</p>
                        </div>
                    )

                })}
            </div>

        </div>
    );
};

export default Display;
