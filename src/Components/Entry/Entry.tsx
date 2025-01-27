import React, { lazy } from 'react';
import { Notify } from '../../service/NotifySystem';
const Router = lazy(() => import('../Router'));

class Entry extends React.Component {
    render() {
        Notify();

        return (
            <section className="container">
                <Router />
            </section>
        );
    }
}

export default Entry;
