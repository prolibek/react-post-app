import React from "react"
import ClassicInput from './UI/inputs/ClassicInput';
import ClassicSelect from './UI/selects/ClassicSelect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <ClassicInput 
                value={filter.search}
                placeholder="Search..."
                onChange={(e) => setFilter({...filter, search: e.target.value})}
            />
            <ClassicSelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sort..."
                options={[
                    {value: "title", name: "По названию"},
                    {value: "body" , name: "По описанию"}
                  ]}
            />
        </div>
    )
}

export default PostFilter;