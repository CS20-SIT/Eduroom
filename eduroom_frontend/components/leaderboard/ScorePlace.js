import style from "../../styles/leaderboardStyles/WorldRankingStyle";
import axios from "axios";
import React, { Fragment } from "react";

const ScorePlace = (props) => {
  return (
    <Fragment>
      <div className="container">
			<header>
        <h1>Eduroom Ranking Top 20</h1>
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
						<tr>
                <td className="rank">1</td>
                <td className="User">FuFu</td>
                <td className="title">Air Chief Marshal</td>
                <td className="points">1460</td>
              </tr>
					  <tr>
                <td className="rank">2</td>
                <td className="User">Husky</td>
               <td className="title">Wolfy</td> 
               <td className="points">1340</td>
              </tr>
            	<tr>
                <td className="rank">3</td>
                <td className="User">ShibaInu</td>
                <td className="title">DOOG</td>
                <td className="points">1245</td>
                
              </tr>
            	<tr>
                <td className="rank">4</td>
                <td className="User">Mary</td>
                <td className="title">Christmas</td>
                <td className="points">1210</td>
                
              </tr>
            	<tr>
                <td className="rank">5</td>
                <td className="User">Happy</td>
                <td className="title">Halloween</td>
                <td className="points">1186</td>
                
              </tr>
            	<tr>
                <td className="rank">6</td>
                <td className="User">Tan</td>
                <td className="title">Chong Ga Fair</td>
                <td className="points">1181</td>
                
              </tr>
            	<tr>
                <td className="rank">7</td>
                <td className="User">Jahn Daeng</td>
                <td className="title">Double ***</td>
                <td className="points">1178</td>
                
              </tr>
            	<tr>
                <td className="rank">8</td>
                <td className="User">Prathan</td>
                <td className="title">Chomrom Kon Chob ***</td>
                <td className="points">1161</td>
                
              </tr>
            	<tr>
                <td className="rank">9</td>
                <td className="User">Subaru</td>
                <td className="title">Shuba Shuba</td>
                <td className="points">1115</td>
                
              </tr>
						<tr>
                <td className="rank">10</td>
                <td className="User">Chima</td>
                <td className="title">Freesia</td>
                <td className="points">1082</td>
                
              </tr>
					  <tr>
                <td className="rank">11</td>
                <td className="User">SakuMiko</td>
                <td className="title">Elite</td>
                <td className="points">1043</td>
                
              </tr>
            	<tr>
                <td className="rank">12</td>
                <td className="User">Wata</td>
                <td className="title">Waruku nai yone~</td>
                <td className="points">1039</td>
                
              </tr>
            	<tr>
                <td className="rank">13</td>
                <td className="User">Kana</td>
                <td className="title">GODMONING</td>
                <td className="points">1037</td>
                
              </tr>
            	<tr>
                <td className="rank">14</td>
                <td className="User">Coco</td>
                <td className="title">A.S.C.C.U.Ch.</td>
                <td className="points">1015</td>
                
              </tr>
            	<tr>
                <td className="rank">15</td>
                <td className="User">Haachama</td>
                <td className="title">Cooking</td>
                <td className="points">967</td>
                
              </tr>
            	<tr>
                <td className="rank">16</td>
                <td className="User">Senchou</td>
                <td className="title">A H O Y</td>
                <td className="points">935</td>
                
              </tr>
            	<tr>
                <td className="rank">17</td>
                <td className="User">Aqua</td>
                <td className="title">H O M</td>
                <td className="points">913</td>
                
              </tr>
            	<tr>
                <td className="rank">18</td>
                <td className="User">KameawTumpruce</td>
                <td className="title">KameawTumprash</td>
                <td className="points">903</td>
                
              </tr>
            	<tr>
                <td className="rank">19</td>
                <td className="User">Me</td>
                <td className="title">Mai yak tum leaw</td>
                <td className="points">877</td>
                
              </tr>
            	<tr>
                <td className="rank">20</td>
                <td className="User">Chonly</td>
                <td className="title">The Prophet</td>
                <td className="points">9999999</td>
                
              </tr>
					</tbody>
				</table>
			</div>
		</div>
      <style jsx> {style} </style>{" "}
    </Fragment>
  );
};
export default ScorePlace;