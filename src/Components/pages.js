import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/PostActions";
import { getPageState } from "../redux/Selector/Selector";

function Pages() {
  const [currentPage,setCurrentPage]=useState(1);
  const [records,setRecords]=useState([]);
  const dispatch = useDispatch();
  const record = useSelector((state)=> {
    console.log("state",state);
   return state?.postReducers?.records || []
  });
  useEffect(()=>{
   dispatch(getPosts(currentPage,(data)=>{
     console.log("response",data);
     setRecords(data);
   }))
  },[currentPage])

  useEffect(()=>{
 console.log("records",records);
  },[record])
  return (
        <div >
           {
         records.map((post)=>(
              <div key={post.id}>
                {post.title}
                </div>
            ))
          }

        <button onClick={()=>{
          setCurrentPage((prev)=>prev-1 < 0 ? 1 : prev-1);
        }}>prev</button>
        <button onClick={()=>{
          setCurrentPage((prev)=>prev+1);
        }}>next</button>
      </div>
  );
}

export default Pages;
