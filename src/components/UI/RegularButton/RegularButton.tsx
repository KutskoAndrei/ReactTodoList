import { FC } from 'react';
import classes from './RegularButton.module.scss';

interface IRegularButtonProps {
  clickAction(): void;
  title: string;
  isActive?: boolean;
  dataTestId: string;
}

const RegularButton: FC<IRegularButtonProps> = ({clickAction, title, isActive = false, dataTestId}) => {
  return (
    <div className={isActive
          ? `${classes.regularButton} ${classes.active}`
          : classes.regularButton}
          onClick={clickAction}
          data-testid={dataTestId}
          >
      <h3>{title}</h3>
    </div>
  )
}

export default RegularButton;