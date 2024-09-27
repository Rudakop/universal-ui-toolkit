import React from 'react';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Card from './components/Card';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <Button onClick={() => alert('Button Clicked!')} label="Click Me" />
        <Card title="Card Title" description="This is a card description." />
      </div>
    </ThemeProvider>
  );
};

export default App;
