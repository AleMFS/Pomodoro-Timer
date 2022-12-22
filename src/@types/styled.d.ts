import 'styled-components'
import { defaultTheme } from '../styles/themes/default' 

type Themetype = typeof defaultTheme;

declare module 'styled-components'{
    export interface DefaultTheme extends Themetype {}
}