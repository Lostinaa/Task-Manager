"use client";
 import React from 'react'
import { GlobalProvider } from '../context/globalProvider';
 
 
 interface Props{
    children: React.ReactNode;
 }
 
 function ctxProv({children}: Props) {
   return (
     <GlobalProvider>
       {children}
     </GlobalProvider>
   )
 }
 
 export default ctxProv;
 