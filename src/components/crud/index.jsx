import React, { useState } from "react";
import CrudForm from "../crudForm";
import CrudTabe from "../crudTable";
import usuarios from "../../helper/usuarios.json";

export default function Crud (){

  const [users, setUsers]=useState(usuarios)
  const [editUsers, setEditUsers]=useState(null)

  const addUsers = (user) => {
    //console.log(users)
    setUsers([
      ...users, user
    ])
  }

  const editUser = (user) => {
    console.log("edit")
  }

    return (
      <>
        <CrudForm addUsers={addUsers}/>
        <CrudTabe users={users} setEditUsers = {setEditUsers}/>
      </>
     
    )
      
  
    
}