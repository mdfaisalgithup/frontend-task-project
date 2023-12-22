import { useEffect, useState } from "react";


const TasklAll = () => {

const [taskData, setTaskData] = useState([])

// https://task-project-pi.vercel.app/


    useEffect(() => {
        fetch("https://task-project-pi.vercel.app/addtaskall")
        .then(res => res.json())
    .then(d => {
        setTaskData(d)
    })
    }, [])





    return (
        <div className="xl:mx-[240px] lg:mx-[150px] md:mx-[50px] mx-[10px] min-h-[100vh]">

            <div className="border-[1px] rounded-md my-4">
                <h2 className="text-center font-bold my-2">TasklAll</h2>
                <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
                    {
                        taskData.map((d, index) => {

                            return (<div key={index} className=" m-4 p-4 bg-[#fff] shadow-md rounded-sm">

                             <h2 className="font-bold my-2">{d?.title}</h2>
                            <div className="border-l-2 pl-2 border-orange-500">

                          
                             <p className="text-[15px]">{d?.description}</p>  </div>

                             <div>
                                <h2 className="font-bold rounded-full px-3 py-2 bg-[#ddd] w-max">{d?.options}</h2>
                             </div>

                             <div><h2 className="font-semibold my-2 italic text-orange-500">TimeEnd {` ${d?.endTime?.TimeHour}:${d?.endTime?.timeMitutes}:${d?.endTime?.timeSeconds}`}</h2></div>

                             


                            </div>)
                        })
                    }
                </div>
            </div>
         
        </div>
    );
};

export default TasklAll;