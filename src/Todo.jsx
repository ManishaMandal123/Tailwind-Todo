import React, { useState } from 'react'

function Todo() {
    const[activity,setActivity] = useState("");
    const [listData, setListData] = useState([]);


    function addActivity(){
      if(activity.length == 0){
        return
      }else{
        setListData(prev => [...prev, activity])
        setActivity('');
      }
    }

    function removeActivity(i){
      const updatedListData = listData.filter((elem, id)=>{
        return i!=id;
      })
      setListData(updatedListData);

    }
  return (
    <>
        <div className="bg-slate-900 min-w-[400px] min-h-[600px] p-8 mb-2.5  box-border rounded-xl shadow-[3px_6px_40px_black] ">
            <div className="text-white text-center m-7 font-bold font-serif text-3xl ">TODO LIST</div>
            <input className="outline-none  w-64 p-2 mr-6 text-xl text-white bg-black outline-pink-500 rounded-xl" type="text" placeholder='Add Activity' value={activity} onChange={(e) => setActivity(e.target.value)} />
            <button className="w-25 text-xl rounded-xl border-0 bg-orange-300 cursor-pointer inline-block p-2 text-center no-underline transition-all touch-manipulation hover:bg-violet-700" onClick={addActivity}>Add</button>
            <p className="flex  rounded-xl mr-4 p-2 mt-6 w-[220px] bg-green-900 text-white font-serif text-xl pl-4">Here is your List 😃</p>
            {listData!=[] && listData.map((data, i)=>{
              return(
                <>
                  <p key={i}>
                    <div className="w-48 p-2.5 m-2 0 text-black bg-emerald-400 rounded-xl mt-6 mr-4 inline-block">{data}</div>
                    <button className="bg-sky-700 rounded-xl text-emerald-400 cursor-pointer inline-block p-2 text-center no-underline transition-all text-base touch-manipulation hover:bg-violet-700" onClick={() => removeActivity (i)}>Remove</button>
                  </p>
                </>
              )
            })}
        </div>
    </>
  )
}

export default Todo;