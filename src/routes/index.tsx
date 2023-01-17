import { Route, Routes as Router } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { Content } from '../components/Layout/Content';
import { Main } from '../pages/Main';

function Routes() {
  return (
    <Router>
      <Route
        element={
          <Layout>
            <Content />
          </Layout>
        }
      >
        <Route path="/" element={<Main />} />
      </Route>
    </Router>
  );
}

export default Routes;
