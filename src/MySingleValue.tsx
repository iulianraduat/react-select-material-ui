import { SingleValueProps } from 'react-select/dist/declarations/src/components/SingleValue';

export function MySingleValue(props: SingleValueProps<any>) {
  const { children, className } = props;
  const myClassName = className
    ? `${className} MuiFormLabel-root`
    : `MuiFormLabel-root`;
  return <div className={myClassName}>{children}</div>;
}
