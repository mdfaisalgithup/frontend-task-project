import { useEffect, useState } from "react";
import {dragger, dropper, defaulter} from "../../CustomJS/CustomJS";



const AddTask = () => {
const [data, setData] = useState([])
const [reload, setReload] = useState(null)

useEffect(() => {
    fetch("https://task-project-pi.vercel.app/addtaskall")
    .then(res => res.json())
.then(d => {
    setData(d)
})
}, [reload])


const taskSubmited = (e) => {
e.preventDefault();

const form = e.target;
const title = form.title.value;
const description = form.description.value;
const options = form.option.value;

const d = new Date();
const TimeHour = d.getHours();
const timeMitutes = d.getMinutes();
const timeSeconds = d.getSeconds();
const endTime = {
 TimeHour, timeMitutes,  timeSeconds
}


const addTasks = {title, description, options, endTime}




fetch("https://task-project-pi.vercel.app/addtask", {
method: "POST",
headers: {"content-type" : "application/json"},
body: JSON.stringify(addTasks)

})
.then(res => res.json())
.then(d => {
    setReload(d?.insertedId)
    console.log(d)
})
}

const deleteBTN =  (id) => {

    fetch("https://task-project-pi.vercel.app/taskdelte", {
        method: "DELETE",
        headers: {"content-type" : "application/json"},
        body: JSON.stringify({id})
        
        })
        .then(res => res.json())
        .then(d => {
    
            setReload(d?.id)
        })

}





    return (
        <div>
            <div className="mt-10">
                <div className="xl:w-1/2 lg:w-1/2 w-full">
                <h2>Task Add</h2>

                <form onSubmit={taskSubmited}>

                <div>
                <div>
                <input className="w-full border-[1px] my-2 rounded-md p-3 text-[18px] outline-none" name="title" type="text" placeholder="Title Your Name" />
                </div>
<div>
    <textarea placeholder="Write Your Description" className="border-[1px] w-full my-2 rounded-md p-3 text-[18px] outline-none" name="description" cols="30" rows="4"></textarea>
</div>

<div>
    <select name="option" className="outline-none rounded-md w-1/2 p-4">

            <option value="Developers">Developers</option>
            <option value="Corporate Professionals">Corporate Professionals</option>
            <option value="Bankers">Bankers</option>
 
    </select>
</div>




<input className="bg-red-500 mx-auto block cursor-pointer px-6 my-4 py-3 rounded-md font-bold hover:bg-red-600 text-white" type="submit" value="Add Task" />
</div></form>
</div>


<div className="flex xl:flex-row flex-col">

             <div className="flex-1 border-[1px] rounded-md min-h-[200px] p-4">

                <h2 className="font-bold my-2 text-center">ToDo List</h2>

<div>
<div>

                {
                    data.map((d, index) => {

                        return(
                   <div onDragOver={(event) => defaulter(event)} key={index}  id="drags" draggable onDragStart={(event) => dragger(event)}> 
                    <div className="bg-[#fff] shadow-md rounded-sm my-6 p-4">
                     <div>
                      <div className="flex justify-between">
                        <div>
                        <h2 className="font-bold my-2">{d?.title}</h2>

                        <div className="border-l-2 pl-2 border-orange-400">
                             <p><span className="mx-2">{d?.description}</span></p>
                        </div>
                     


                        <h2 className="bg-[#ddd] my-2 rounded-full w-max px-2 py-1">{d?.options}</h2>
                        </div>

                      <div>
                      <button className="bg-orange-500 hover:bg-orange-600 p-[9px] rounded-full h-[8px] w-[8px] flex justify-center items-center"  onClick={() => deleteBTN(d?._id)}>
                            <h2 className="text-white text-[14px] rounded-full font-bold">X</h2>
                            
                    </button>

                      </div>
                     


                      </div>


                      <div>

                        <h2 className="font-semibold text-orange-500">TimeEnd {` ${d?.endTime?.TimeHour}:${d?.endTime?.timeMitutes}:${d?.endTime?.timeSeconds}`}</h2>
                      </div>
                    </div>    
                    
                    </div>

                
                    </div>
                    )
                    })
                }
         </div></div>

 </div>

    <div className="flex-1" onDragOver={(event) => defaulter(event)} onDrop={(event) => dropper(event)}>

<div className="rounded-md min-h-[250px] p-4 border-[1px]">
<h2 className="font-bold my-2 text-center">Ingoing List</h2>

  
</div>
</div>    

<div className="flex-1" onDragOver={(event) => defaulter(event)} onDrop={(event) => dropper(event)}>
<div className=" border-[1px] rounded-md min-h-[250px] p-4" >
<h2 className="font-bold my-2 text-center">Completed List</h2>
</div>
</div>

</div>





            </div>



           
            
        </div>
    );
};

export default AddTask;