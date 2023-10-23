import { FC } from 'react';
import classes from './Checkbox.module.scss'

interface ICheckboxProps {
    switchCheckboxHandler(value: boolean): void;
    isActive: boolean;
    dataTestId: string;   
}

const Checkbox: FC<ICheckboxProps> = ({switchCheckboxHandler, isActive, dataTestId}) => {
  return (
    <div className={classes.checkboxItem}>
        <input 
            type='checkbox'
            checked={isActive}
            onChange={(e) => switchCheckboxHandler(e.target.checked)}
            data-testid={dataTestId}
        />
    </div>
  )
}

export default Checkbox;