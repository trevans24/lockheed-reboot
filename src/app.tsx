import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import "./theme/global.css";

const App = (props) => {
	return (
		<ThemeProvider theme={theme}>
			<Button>test</Button>
		</ThemeProvider>
	);
};

export default App;
