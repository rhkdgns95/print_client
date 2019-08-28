import * as StyleThings from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

interface IProps {
    blueColor: string;
    grayColor: string;
}

const {
    default: styled,
    ThemeProvider,
    createGlobalStyle
} = StyleThings as ThemedStyledComponentsModule<IProps>;


export { ThemeProvider, createGlobalStyle };
export default styled;