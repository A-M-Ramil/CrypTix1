"use client"
import { Sports } from "@prisma/client";

interface SportProps {
  Sport: Sports;
}



export default function Test({Sport}:SportProps) {
  return(
    <main data-theme="luxury font-Sregular">
    <div className="collapse bg-base-200 mt-1">
<input type="checkbox" name="my-accordion-1" /> 
<div className="collapse-title mb-0 text-4xl ">

{Sport.name}

</div>
<div className="collapse-content"> 
<div className="card w-full  ">
        <div className="card-body">


              <div className="btn text-left btn-warning no-animation">{Sport.team1} Vs {Sport.team2}  </div>



            <div className="card-title  w-[30%] ">
              <h1 className="btn text-left btn-ghost mr-5  no-animation">Venue: </h1>
              <p className="btn text-left btn-ghost w-[5%] no-animation"> {Sport.venue} </p>
              </div>
              <div className="">
              <p className="btn btn-ghost no-animation">Schedule:</p>
              <p className="btn text-left btn-ghost  no-animation"> {Sport.schedule.toString().slice(0,[24])} </p>
              </div>
              <div className="text-left">
              <p className="btn btn-ghost mr-5  no-animation">Seat Capacity: </p>
              <p className="btn btn-ghost  no-animation"> {Sport.sport_seat_capacity} </p>
              </div>
              <div className="text-left ">
              <p className="btn btn-ghost mr-5  no-animation">Seat Available: </p>
              <p className="btn btn-ghost text-left no-animation"> {Sport.seat_available} </p>
              </div>
              
            <div className="card-actions justify-end">
            <button className="btn btn-warning no animation">Price:
            <p>{Sport.ticket_price} Tk</p>
                
                
                </button>
            <button className="btn btn-outline">Buy Now</button>
            </div>
        </div>
        </div>
</div>
</div>
</main>
  )
}
