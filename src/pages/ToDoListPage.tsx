import React from 'react';
import { Header } from '../components/Header/Header';
import { Form } from '../components/Form/Form';
import { ToDoList } from '../components/ToDoList/ToDoList';
import { Footer } from '../components/Footer/Footer';


export const ToDoListPage = () => {
  return (    
    <React.Fragment>
      
    <Header/>
    <Form/>
    <ToDoList/>
    <Footer/>
    </React.Fragment>
  )};