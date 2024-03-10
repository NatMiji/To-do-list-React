import React from 'react'

const ListItem = ({item}) => {

    const {title, id, done} = item
  return (
    <div className='toDoItem'>
      <h4>{title}</h4>
      <p>Task Completed: {done ? 'Yes' : 'No'}</p>
    </div>
  )
}

export default ListItem
