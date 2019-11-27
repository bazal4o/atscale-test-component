import * as React from 'react'
import { SharedColorHeadingProps } from '../../../index'

export default class SharedColorHeading extends React.PureComponent<SharedColorHeadingProps, any> {
    render() {
        return (
        <div>
            <h1>This is Not working heading with color: {this.props.color} </h1>
        </div>
        )
    }
}