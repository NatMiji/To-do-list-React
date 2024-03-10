import React from 'react'
import ListItem from './ListItem'


const List = ({todos}) => {


let listcontent = `Sorry no items are on the list`;

if(todos?.length > 0){
    listcontent = todos?.map((item) => (<ListItem key={item.id} item={item}/>))
}
  return (
    <div className='toDoList'>
       {listcontent}
    </div>
  )
}

export default List
