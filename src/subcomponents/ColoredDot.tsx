const getStyle = (color: string) => ({
  display: 'inline-block',
  backgroundColor: color,
  width: 11,
  height: 11,
  borderRadius: '100%',
  margin: '0 5px',
  boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.75)',
});

const ColoredDot = (props: ColoredDotProps) => (
  <div style={getStyle(props.color)} />
);

interface ColoredDotProps {
  color: string;
}

export default ColoredDot;
