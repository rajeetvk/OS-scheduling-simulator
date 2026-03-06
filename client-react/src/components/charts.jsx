import { Bar } from "react-chartjs-2";

import {
 Chart as ChartJS,
 CategoryScale,
 LinearScale,
 BarElement,
 Title,
 Tooltip,
 Legend
} from "chart.js";


ChartJS.register(
 CategoryScale,
 LinearScale,
 BarElement,
 Title,
 Tooltip,
 Legend
);

function charts({result})
{
    const labels=result.processes.map(p =>"P"+p.id);
    const waitingTime=result.processes.map(p => p.waiting);
    const turnaroundTime = result.processes.map(p => p.turnaround);


    const data = {

 labels: labels,

 datasets: [
  {
   label: "Waiting Time",
   data: waitingTime,
   backgroundColor: "rgba(54,162,235,0.6)"
  },

  {
   label: "Turnaround Time",
   data: turnaroundTime,
   backgroundColor: "rgba(255,99,132,0.6)"
  }
 ]

};

return (
 <div style={{width:"700px", margin:"20px auto"}}>
   <Bar data={data}/>
 </div>
);
}

export default  charts;