import React from "react";
interface PaginationProps {
    index: number;
    setCurrentPage: (page: number) => void;
    totalPages: number;
}
const Pagination = ({ index,setCurrentPage,totalPages }:PaginationProps) => {
    // iterate the button items according to the total number of pages
    const pages = Array.from({length:totalPages},(_,i)=>i+1)
  return (
    <div className='join flex flex-row justify-end'>
    {
        pages.map((page,i)=>(
            <button key={i} className={`join-item btn ${page===index?'btn-primary':''}`} onClick={()=>setCurrentPage(page)}>{page}</button>
        ))
    }
    </div>
  )
}
export default Pagination;