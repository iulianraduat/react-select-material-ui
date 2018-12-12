import { colorClearHover, colorClearNormal, colorFocus, colorHover, colorNoFocus } from './ColorConstants';

const styleControl = (props: any) => (base: any) => ({
	...base,
	background: 'transparent',
	borderWidth: 0,
	borderBottom: getBorder(props.hasInputFocus),
	borderRadius: 0,
	boxShadow: 'none',
	marginRight: 25,
	'&:hover': {
		boxShadow: 'none',
		background: `linear-gradient(to bottom, ${colorHover} 0%, ${colorHover} 100%)`,
		backgroundPosition: '0 100%',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '100% 1px',
		transition: 'background-size .2s'
	}
});

// FIXME hasInputFocus should produce a 2px border, but such a border moves the content up so we use only 1px
const getBorder = (hasInputFocus: boolean) => (hasInputFocus ? `solid 1px ${colorFocus}` : `solid 1px ${colorNoFocus}`);

const styleValueContainer = (props: any) => (base: any) => ({
	...base,
	padding: 0,
	marginLeft: -2,
	marginRight: !!props.selectProps && props.selectProps.isClearable ? 25 : 0,
	overflow: 'hidden',
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis'
});

const styleIndicatorsContainer = (base: any) => ({
	...base,
	position: 'absolute',
	right: 0,
	marginLeft: 8,
	marginRight: -25,
	backgroundColor: 'transparent',
	height: '100%'
});

const styleClearIndicator = (base: any) => ({
	...base,
	color: colorClearNormal,
	margin: '0 4px 0 0',
	padding: 0,
	cursor: 'pointer',
	'&:hover': {
		color: colorClearHover
	}
});

const styleDropdownIndicator = (base: any) => ({
	...base,
	margin: '0 0 0 4px',
	padding: 0,
	cursor: 'pointer'
});

const styleMenuList = (base: any) => ({
	...base,
	padding: 0
});

// enable this to change the look of an option in the list of them
const styleOption = (base: any) => base;

// enable this to see the helperText
const styleContainer = (base: any) => base;

const styleNoOptionsMessage = (base: any) => ({
	...base,
	textAlign: 'left',
	color: '#ff8080'
});

const styleMultiValueRemove = (props: any) => (base: any) => ({
	...base,
	display: !!props.selectProps && props.selectProps.isDisabled ? 'none' : base.display
});

export const getStyles = (props: any) => ({
	container: styleContainer,
	control: styleControl(props),
	clearIndicator: styleClearIndicator,
	dropdownIndicator: styleDropdownIndicator,
	indicatorsContainer: styleIndicatorsContainer,
	menuList: styleMenuList,
	multiValueRemove: styleMultiValueRemove(props),
	noOptionsMessage: styleNoOptionsMessage,
	option: styleOption,
	valueContainer: styleValueContainer(props)
});
