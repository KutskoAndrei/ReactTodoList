import { useTodos } from "../../hooks/useTodos";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { updateFilter } from "../../store/todoSlice";
import FilterType from "../../models/FilterType";
import classes from './ButtonPanel.module.scss';
import RegularButton from "../UI/RegularButton/RegularButton";
import ScoreLabel from "../ScoreLabel/ScoreLabel";
import { useTodoRepository } from "../../hooks/useTodoRepository";
import ITodoItem from "../../models/ITodoItem";

const ButtonPanel = () => {
  const { clearFinished, setFiltered, add} = useTodos();
  const { getTodoList } = useTodoRepository();
  const dispatch = useAppDispatch();

  const [todosAmount, setTodosAmount] = useState(Array<ITodoItem>);
  const handleClick = () => { setTodosAmount(getTodoList()); console.log('test - '+todosAmount.length) };

  const [active, setActive] = useState(0);
  const setCompletedFilter = () => {
    dispatch(updateFilter(FilterType.FINISHED));
    setActive(FilterType.FINISHED);
  };
  const setIncompletedFilter = () => {
    dispatch(updateFilter(FilterType.UNFINISHED));
    setActive(FilterType.UNFINISHED);
  };
  const setAllFilter = () => {
    dispatch(updateFilter(FilterType.ALL));
    setActive(FilterType.ALL);
  };

  const handleAddTodo = () => {
    const description = prompt();
    if (description) {
      add(description, false);
    }
  };

  useEffect(() => {
    handleClick();
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
}, []);

  useEffect(() => {
    setFiltered();
  }, [active]);

  return (
    <div className={classes.buttonPanel}>
      <div className={classes.topButton}>
      <RegularButton
          clickAction={handleAddTodo}
          title="Add New Todo"
          dataTestId="addTodo"
        />
      </div>
      <div className={classes.buttonPanelItem}>
        <RegularButton
          clickAction={setAllFilter}
          title="All Todos"
          isActive={active === FilterType.ALL}
          dataTestId="getAllTodos"
        />
        <ScoreLabel score={todosAmount.length} />
      </div>
      <div className={classes.buttonPanelItem}>
        <RegularButton
          clickAction={setCompletedFilter}
          title="Finished Todos"
          isActive={active === FilterType.FINISHED}
          dataTestId="getFinishedTodos"
        />
        <ScoreLabel score={todosAmount.filter((todo) => todo.checked).length} />
      </div>
      <div className={classes.buttonPanelItem}>
        <RegularButton
          clickAction={setIncompletedFilter}
          title="Unfinished Todos"
          isActive={active === FilterType.UNFINISHED}
          dataTestId="getUnfinishedTodos"
        />
        <ScoreLabel score={todosAmount.filter((todo) => !todo.checked).length} />
      </div>
      <div className={classes.bottomButton}>
        <RegularButton
          clickAction={clearFinished}
          title="Clear Finished"
          dataTestId="clearFinished"
        />
      </div>
    </div>
  )
}

export default ButtonPanel;