import React from 'react'
import './Main.css'
import Header from '../header/Header'

const Main = () => {
    return (
        <main>
            <div className='layer'>
                <div className='container'>
                    <Header/>
                    <div className='content'>
                        <p>
                        Immersive<br/>experiences<br/>that deliver
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main