import Typography from "typography"
import bootstrapTheme from "typography-theme-bootstrap"
import lawtonTheme from "typography-theme-lawton"
import stAnnesTheme from 'typography-theme-st-annes'
import twinPeaksTheme from 'typography-theme-twin-peaks'

twinPeaksTheme.overrideThemeStyles = (options) => ({
    'a': {
        color: '#2779bd',
        backgroundImage: 'none'
    },
    'blockquote': {
        borderColor: '#b2b7ff',
    }
})

const typography = new Typography(twinPeaksTheme)

export default typography