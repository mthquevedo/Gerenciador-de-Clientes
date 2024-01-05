import React from 'react';
import { GlobalStyle } from './components/GlobalStyle/style';
import RoutesApp from './routes';
import { AuthProvider } from './contexts/auth';

function App() {
  return (
    <AuthProvider>
      <RoutesApp />
      <GlobalStyle />
    </AuthProvider>
  );
}

export default App;
