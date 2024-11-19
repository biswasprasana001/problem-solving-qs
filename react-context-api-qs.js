// Question 1: Create a simple Context and use it to pass data between components.
// Solution:
import React, { createContext, useContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const user = { name: 'John Doe', age: 30 };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

const DisplayUser = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

const App = () => (
  <UserProvider>
    <DisplayUser />
  </UserProvider>
);

export default App;

// Question 2: Implement a context that allows updating its value.
// Solution:
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <ThemeSwitcher />
  </ThemeProvider>
);

export default App;

// Question 3: Use multiple Contexts in a single component.
// Solution:
import React, { createContext, useContext } from 'react';

const UserContext = createContext();
const ThemeContext = createContext();

const CombinedDisplay = () => {
  const user = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Theme: {theme}</p>
    </div>
  );
};

const App = () => (
  <UserContext.Provider value={{ name: 'Jane Doe' }}>
    <ThemeContext.Provider value={{ theme: 'dark' }}>
      <CombinedDisplay />
    </ThemeContext.Provider>
  </UserContext.Provider>
);

export default App;

// Question 4: Implement a Context for managing authentication state.
// Solution:
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const Navbar = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  return (
    <div>
      <p>{isAuthenticated ? 'Logged in' : 'Logged out'}</p>
      <button onClick={isAuthenticated ? logout : login}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

const App = () => (
  <AuthProvider>
    <Navbar />
  </AuthProvider>
);

export default App;

// Question 5: Write a test for a component that consumes Context using React Testing Library.
// Solution:
import React, { createContext, useContext } from 'react';
import { render, screen } from '@testing-library/react';

const TestContext = createContext();

const TestComponent = () => {
  const value = useContext(TestContext);
  return <div>Value: {value}</div>;
};

test('TestComponent displays value from context', () => {
  render(
    <TestContext.Provider value="Test Value">
      <TestComponent />
    </TestContext.Provider>
  );

  expect(screen.getByText('Value: Test Value')).toBeInTheDocument();
});
