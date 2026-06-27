import React, { ReactNode } from 'react';

declare interface RenderResultProps {
    children: ReactNode;
}

export const RenderResult: React.FC<RenderResultProps> = ({ children }) => (
    <div className="mercury-grid" data-testid="render-result">
        {children}
    </div>
);
