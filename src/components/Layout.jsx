import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Maths 6ème : Les Relatifs</h1>
            </header>
            <main className="main-content">
                {children}
            </main>
        </div>
    );
};

export default Layout;
