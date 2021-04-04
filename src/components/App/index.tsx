import { sum } from 'tsdx-test';

import { withContextProvider } from 'contexts/UserContext';
import Routes from 'components/Routes';

import 'scss/application.scss';

function App() {
  const result = sum(1, 2);
  return (
    <>
      {result}
      <Routes />
    </>
  );
}

export default withContextProvider(App);
