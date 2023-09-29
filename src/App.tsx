import classes from './App.module.scss';
import ButtonPanel from './components/ButtonPanel/ButtonPanel';
import TodoList from './components/TodoList/TodoList';

function App() {

  return (
    <div className={classes.AppContent}>
      <div className={classes.controlPanel}>
        <ButtonPanel />
      </div>
      <div className={classes.contentPanel}>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
