import { FC, ReactNode } from 'react';

import ThemeProvider from './theme';
import { KanbanProvider } from './kanban';

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <KanbanProvider>{children}</KanbanProvider>
    </ThemeProvider>
  );
};

export default ContextProvider;
