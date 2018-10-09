import * as React from 'react';
import { ReactSelectMaterialUiProps } from '../index';

export default class ReactSelectMaterialUi extends React.Component<ReactSelectMaterialUiProps> {
    public render() {
        return (
            <div style={{ color: this.props.color }}>
                ReactSelectMaterialUi component v0.0.1!
            </div>
        );
    }
}
