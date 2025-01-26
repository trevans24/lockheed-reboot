import { createTheme } from "@mui/material/styles";
import palette from "./palette";

const theme = createTheme({
	cssVariables: true,
	palette,
});

export default theme;
