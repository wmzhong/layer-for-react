import React from 'react'
import ReactDOM from 'react-dom'
import Layer from '../../src/Layer'
ReactDOM.render((
        <Layer type={0} time={5000} text={'abc'} />
    ),
    document.getElementById('app')
)