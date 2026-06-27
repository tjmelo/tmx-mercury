import React, { Suspense, useEffect, useRef, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Loading } from './Components/Feedback'
import Entry from './Components/Entry'
import { createPortal } from 'react-dom'
import { APP } from './contants'
import styles from './App.scss'

const App = () => {

    const sectionRef = useRef<HTMLElement>(null);
    const [shadowRootRef, setShadowRootRef] = useState<ShadowRoot | null>(null)

    useEffect(() => {
        if (sectionRef.current) {
            const shadowRoot = sectionRef.current.attachShadow({ mode: 'open' });
            const event = new CustomEvent("shadowroot-created");
            sectionRef.current.dispatchEvent(event);
            setShadowRootRef(shadowRoot)

            shadowRoot.innerHTML = APP.LINK_STYLE ?? ''

            const styleElement = document.createElement('style');
            styleElement.textContent = styles;
            shadowRoot.appendChild(styleElement);
        }
    }, []);

    return (
        <BrowserRouter basename={location.pathname}>
            <Suspense fallback={<Loading />}>
            <section id="tmx-mercury" ref={sectionRef}>
                {shadowRootRef &&
                    createPortal(
                    <Entry />,
                    shadowRootRef
                )}
            </section>
            </Suspense>
        </BrowserRouter>
    )
}

export default App
