import React, { useMemo } from "react";
import { getPagesArray } from "../../../utils/pages";

const Pagination = ({totalPages, page, setPage}) => {
    let pagesArray = useMemo(()=>getPagesArray(totalPages), [totalPages]);

    return (
        <div className="page__wrapper">
            { pagesArray.map(p => 
            <span 
                onClick={()=> setPage(p) }
                key={p} 
                className={page === p ? 'page p__current' : 'page'}>
                    {p}
                </span>
            ) }
        </div>
    )
}

export default Pagination;