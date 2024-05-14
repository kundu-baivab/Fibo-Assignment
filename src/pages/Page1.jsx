/* eslint-disable react/no-unescaped-entities */
import bar from "../assets/barbell.png";
import tick from "../assets/tick.png";
import fire from "../assets/fire.png";
import fs from "../assets/fs.png";
import moon from "../assets/moon.png";
import drop from "../assets/drop.png";
import Bar1 from "../components/Bar1";
import Bar2 from "../components/Bar2";
import GoalBars from "../components/GoalBars";
import Swipe from "../components/Swipe";
import Graph from "../components/Graph";
import Menu from "../components/Menu";

const Page1 = () => {
  return (
    <div>
      <div className="m-4 grid gap-4 sm:grid-cols-2">
        <Bar1/>
        <Bar2/>
        <GoalBars rpic={bar} lpic={tick} text={"Workout for 20 mins"} color={"#9E4CB8"}/>
        <GoalBars rpic={fire} lpic={tick} text={"Read Book for 15 mins" } color={"#D15439"}/>
        <GoalBars rpic={fs} lpic={tick} text={"30 mins walk"} color={"#81B47D"}/>
        <GoalBars rpic={moon} lpic={tick} text={"Sleep at 11 sharp"} color={"#63A7A7"}/>
        <GoalBars rpic={drop} lpic={tick} text={"Drink 3L water"} color={"#5A92CB"}/>
        <Swipe/>
        <Graph/>
      </div>
      <Menu/>
    </div>
  )
}

export default Page1
