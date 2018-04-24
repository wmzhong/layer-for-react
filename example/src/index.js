import React from 'react'
import ReactDOM from 'react-dom'
import Layer from '../../src/Layer'

const test = () => {
    console.log('on cancel')
}

const confirm = () => {
    console.log('on confirm')
}

const close = () => {
    console.log('on close')
}

const btns = [
    {
        title: '1',
        action: test
    }, {
        title: '2',
        action: confirm
    }, {
        title: '3',
        action: close
    }
]

ReactDOM.render((
        <Layer type={1}
            title={'标题'}
            content={'我是内容'}
            time={5000}
            text={'abc'}
            btns={btns}
        />
    ),
    document.getElementById('app')
)