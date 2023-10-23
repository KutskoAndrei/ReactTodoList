import { RenderResult, render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

describe('App tests', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <App />
      </Provider>
    )
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render component', () => {
    const appComponentClass = component.container.getElementsByClassName('AppContent');
    expect(appComponentClass.length).toBe(1);
  });
});