import { createTheme } from "@mui/material/styles";

import components from "./components";
import palette from "./palette";

const theme = createTheme({
	components,
	// cssVariables: true,
	palette,
});

export default theme;
