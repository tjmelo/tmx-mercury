import React, { ReactNode } from 'react';
declare interface RenderResultProps {
    children: ReactNode;
}

export const RenderResult: React.FC<RenderResultProps> = ({ children }) => (
    <div className="row" data-testid="render-result">
        {children}
    </div>
);
