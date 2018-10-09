import * as React from 'react';

export interface ReactSelectMaterialUiProps extends React.Props<ReactSelectMaterialUi> {
    color: string;
}

declare class ReactSelectMaterialUi extends React.Component<ReactSelectMaterialUiProps, any> {
}

declare module 'react-select-material-ui' {
}

export default ReactSelectMaterialUi;
