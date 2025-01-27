import React, { Suspense, useEffect, useRef, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Loading } from './Components/Feedback'
import Entry from './Components/Entry'
import { createPortal } from 'react-dom'
import { rootStyle } from './utils'
import { APP } from './contants'

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

            const styleElement = rootStyle();
            if (styleElement) {
                const styleElement = rootStyle();
                styleElement && shadowRoot.appendChild(styleElement);
            }
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
