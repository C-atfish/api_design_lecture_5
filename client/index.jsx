import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";


function Homepage() {
    return <div>

        <h2>Hello there</h2>

        <ul>
            <li>
                <Link to={"/showPeople"}>Show people</Link>
            </li>
            <li>
                <Link to={"/addPeople"}>Add people</Link>
            </li>
        </ul>



    </div>;
}

function AddPeople() {
    return <form>
        <div>
            FirstName <input type="text"/>
        </div>
        <div>
            LastName <input type="text"/>
        </div>

        <div>
            <button>Submit</button>
        </div>
        
    </form>;
}

function ShowPeople() {
    return <div>

        <h2>Here are your people</h2>
    </div>;
}

function Application() {
    return <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/addPeople" element={<AddPeople/>}/>
                    <Route path="/showPeople" element={<ShowPeople/>}/>


                </Routes>


    </BrowserRouter>;
}

ReactDOM.render(<Application/>, document.getElementById("app"))


