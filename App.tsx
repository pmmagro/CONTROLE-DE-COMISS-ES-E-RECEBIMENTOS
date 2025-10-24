
import React, { useState, useCallback, useMemo } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { User, UserRole } from './types';
import { USERS } from './data/mock';

import Dashboard from './pages/Dashboard';
import Clientes from './pages/Clientes';
import Pedidos from './pages/Pedidos';
import Comissoes from './pages/Comissoes';
import Relatorios from './pages/Relatorios';
import Login from './pages/Login';

import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';

export const UserContext = React.createContext<{ user: User | null; logout: () => void }>({ user: null, logout: () => {} });

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = useCallback((role: UserRole) => {
    const selectedUser = USERS.find(u => u.role === role);
    setUser(selectedUser || null);
  }, []);

  const handleLogout = useCallback(() => {
    setUser(null);
  }, []);

  const contextValue = useMemo(() => ({ user, logout: handleLogout }), [user, handleLogout]);

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <UserContext.Provider value={contextValue}>
      <HashRouter>
        <div className="flex h-screen bg-gray-100 font-sans">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 sm:p-6">
              <div className="container mx-auto">
                <Routes>
                  <Route path="/" element={<Navigate to="/dashboard" />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/clientes" element={<Clientes />} />
                  <Route path="/pedidos" element={<Pedidos />} />
                  <Route path="/comissoes" element={<Comissoes />} />
                  <Route path="/relatorios" element={<Relatorios />} />
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </Routes>
              </div>
            </main>
          </div>
        </div>
      </HashRouter>
    </UserContext.Provider>
  );
};

export default App;
