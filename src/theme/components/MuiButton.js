import palette from "../palette";

const MuiButton = {
	defaultProps: {
		variant: "contained",
	},
	styleOverrides: {
		contained: {
			backgroundColor: palette.primary.dark,
			border: "none",
			borderRadius: 2,
			color: palette.white,
			fontSize: ".75rem",
			fontWeight: 600,
			height: 40,
			padding: "12px 20px",
			letterSpacing: 0.5,
			margin: 4,
			minWidth: 118,
			textTransform: "uppercase",
		},
	},
};

export default MuiButton;
