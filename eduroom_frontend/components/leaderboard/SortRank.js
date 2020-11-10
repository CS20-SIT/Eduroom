import style from "../../styles/leaderboardStyles/WorldRankingStyle";
import axios from "axios";
import { useState, useEffect } from "react";
import React, { Fragment } from "react";

const SortRank = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const GetData = async () => {
      const result = await axios("http://localhost:5000/api/leaderboard");
      setData(result.data);
    };
    GetData();
    console.log(data);
    console.log(props.onSuccess);
  }, [props.update]);
  return <Fragment> 
    <div className="container">
			<header>
        <h1>Eduroom Global Ranking Top 20</h1>
			</header>
			<div className="wrapper">
				<table>
					<thead>
						<tr>
							<th>Rank</th>
							<th>Username</th>
							<th>Title</th>
							<th>XP</th>
						</tr>
					</thead>
					<tbody>
              {data
                .map((row) => {
              return (		
                <tr key={row.id}>
                  <td className="rank">{row.id} </td> 
                  <td className="user" >{row.displayname}</td>  
                  <td className="title" >{row.titlename}</td>
                  <td className="points" >{row.xp}</td>
                </tr>	  
                  )  
                  })}
          </tbody>
				</table>
        </div>
			</div>
      <style jsx> {style} </style>{" "}
  </Fragment>;
};
export default SortRank;