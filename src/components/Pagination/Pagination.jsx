import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ noOfPages, currentPage, setCurrentPage }) => {
   // Generate an array of page numbers
   const pages = [];
   for (let i = 1; i <= noOfPages; i++) {
       pages.push(i);
   }

   return (
       <div className='px-5'>
       {/* Render the previous button */}
       <Link
       onClick={()=>setCurrentPage(currentPage-1)}
         to={`/page/${currentPage - 1}`}
         className='me-5'
       >
         Prev
       </Link>
 
       {/* Render the page numbers */}
       {pages.map((page) => (
         <Link
           key={page}
           to={`/page/${page}`}
           onClick={()=>setCurrentPage(page)}
          className='mx-4'
         >
           {page}
         </Link>
       ))}
 
       {/* Render the next button */}
       <Link
       onClick={()=>setCurrentPage(currentPage+1)}
         to={`/page/${currentPage + 1}`}
        
       >
         Next
       </Link>
     </div>
   );
};


export default Pagination;