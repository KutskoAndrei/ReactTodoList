import { RenderResult, fireEvent, render, screen } from '@testing-library/react';
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






// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
