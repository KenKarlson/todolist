import classes from'./ToDoListItem.module.scss'

export const ToDoListItem = () => {
  return (
    <>   
      <li className={classes["todo-list-item__wrapper"]}>
        <span>Первая задача</span>
        <div className={classes["todo-list-item__buttons"]}>
            <button className={classes["btn-trash"]}></button>
            <button className={classes["btn-check"]}></button>
        </div>
      </li>        
    </>
  );  
};