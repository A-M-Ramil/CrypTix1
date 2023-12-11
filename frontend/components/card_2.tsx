export default function Card2() {
    return (
        <main data-theme="luxury">
            <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" /> 
        <div className="collapse-title mb-0 text-xl font-medium">
        'ENJOY CLASSIC'
        </div>
        <div className="collapse-content"> 
        <div className="card w-full  ">
                <div className="card-body">
                    <h2 className="card-title">venue: 예술의전당 리사이틀홀</h2>
                    <p>schedule: 2021-01-01 00:00:00</p>
                    <div className="w-[50%]">
                    <button className="btn btn-outline mr-5 text-left ">
                        Seat Capacity: Glass button<br/>
                        Seat Available: 100
                        
                        </button>
                    <button className="btn btn-outline ">
                        Price:<br/>
                        Glass button

                        </button>
                    </div>
                    <div className="card-actions justify-end">
                    <button className="btn btn-outline">Buy Now</button>
                    </div>
                </div>
                </div>
        </div>
      </div>
        </main>
    )
}