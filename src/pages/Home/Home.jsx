import React, {Suspense} from 'react'
const About = React.lazy(() => import('../About/About'))
const Content = React.lazy(() => import('../Content/Content'))

export default function Home() {
    return (
        <Suspense fallback={<div>chargement...</div>}>
            <About/>
            <Content/>
        </Suspense>
    )
}
