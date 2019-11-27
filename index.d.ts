import * as React from 'react'

declare class SharedColorHeading extends React.PureComponent<SharedColorHeadingProps, any> {

}

export interface SharedColorHeadingProps extends React.Props<SharedColorHeading> {
    color: string
}

declare module 'atscale-test-component'

export default SharedColorHeading;