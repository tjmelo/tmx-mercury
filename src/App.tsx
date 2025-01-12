import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Loading } from './Components/Feedback'
import Entry from './Components/Entry'

const App = () => {
    return (
        <BrowserRouter basename={'/'}>
            <Suspense fallback={<Loading />}>
                <Entry />
            </Suspense>
        </BrowserRouter>
    )
}

export default App