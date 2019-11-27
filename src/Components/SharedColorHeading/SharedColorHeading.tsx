import * as React from 'react'
import { SharedColorHeadingProps } from '../../../index'

export default class SharedColorHeading extends React.PureComponent<SharedColorHeadingProps, any> {
    render() {
        return (
        <h1>This is shared heading with color: {this.props.color} </h1>
        )
    }
}