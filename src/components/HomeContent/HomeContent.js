import axios from "axios";
import React, { useState } from "react";
import './HomeContent.css'

function HomeContent() {
  const [details, setDetails] = useState([]);
  axios
    .get("https://restcountries.com/v2/all?fields=name,region,flag")
    .then((res) => res.data)
    .then((datas) => setDetails(datas));
  return <div>
    <h1>Country names listed by flags</h1>
    <hr />
    <div className="content">
{details.map((country)=>{
        return(
            <div className="item">
                <a href={country.flag}><img src={country.flag} className="flag-img" alt="" /></a>
            <h3>{country.name}</h3>
            </div>
            )
    })
}
</div>
  </div>;
}

export default HomeContent;
