import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const rooms = ['first room', 'second room', 'third room']
  const user = useSelector((state) => state.user)
  if(!user){
    return
  }
  
  return (
    <>
      <h2>Avaibale rooms</h2>
      <ListGroup>
        {rooms.map((room, index) =>(
            <ListGroup.Item key={index}>
              {room}
            </ListGroup.Item>
          ))}
      </ListGroup>
      <h2>Members</h2>
    </>
  )
}

export default SideBar
