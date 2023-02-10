import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest'
import PostLists from './components/PostLists';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost/3000')}>
      <Resource name="posts" lists={PostLists} />
    </Admin>
  );
}

export default App;
