import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";



export const Auth = () => {
  
  return(
    <React.Fragment>
      <Routes>
        <Route/>
        <Route path="/auth/login" element={<}/>
        <Route path="*" element={<Navigate to ={'/auth/login'}/>}/>

      </Routes>
    </React.Fragment>
  )
}