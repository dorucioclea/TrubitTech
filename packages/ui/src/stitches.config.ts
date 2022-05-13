import { createStitches } from '@stitches/react'
import type { ConfigType } from '@stitches/react/types/config'

import {
  gray,
  mauve,
  slate,
  sage,
  olive,
  sand,
  tomato,
  red,
  crimson,
  pink,
  plum,
  purple,
  violet,
  indigo,
  blue,
  sky,
  mint,
  cyan,
  teal,
  green,
  grass,
  lime,
  yellow,
  amber,
  orange,
  brown,
  bronze,
  gold,
  grayA,
  mauveA,
  slateA,
  sageA,
  oliveA,
  sandA,
  tomatoA,
  redA,
  crimsonA,
  pinkA,
  plumA,
  purpleA,
  violetA,
  indigoA,
  blueA,
  skyA,
  mintA,
  cyanA,
  tealA,
  greenA,
  grassA,
  limeA,
  yellowA,
  amberA,
  orangeA,
  brownA,
  bronzeA,
  goldA,
  whiteA,
  blackA,
  grayDark,
  mauveDark,
  slateDark,
  sageDark,
  oliveDark,
  sandDark,
  tomatoDark,
  redDark,
  crimsonDark,
  pinkDark,
  plumDark,
  purpleDark,
  violetDark,
  indigoDark,
  blueDark,
  skyDark,
  mintDark,
  cyanDark,
  tealDark,
  greenDark,
  grassDark,
  limeDark,
  yellowDark,
  amberDark,
  orangeDark,
  brownDark,
  bronzeDark,
  goldDark,
  grayDarkA,
  mauveDarkA,
  slateDarkA,
  sageDarkA,
  oliveDarkA,
  sandDarkA,
  tomatoDarkA,
  redDarkA,
  crimsonDarkA,
  pinkDarkA,
  plumDarkA,
  purpleDarkA,
  violetDarkA,
  indigoDarkA,
  blueDarkA,
  skyDarkA,
  mintDarkA,
  cyanDarkA,
  tealDarkA,
  greenDarkA,
  grassDarkA,
  limeDarkA,
  yellowDarkA,
  amberDarkA,
  orangeDarkA,
  brownDarkA,
  bronzeDarkA,
  goldDarkA,
} from '@radix-ui/colors'

import type * as Stitches from '@stitches/react'
export type {
  VariantProps,
  PropertyValue,
  ComponentProps,
  ScaleValue,
  DefaultThemeMap,
  CSSProperties,
} from '@stitches/react'
import type * as PrimitiveTypes from '@radix-ui/react-primitive'
export type { PrimitiveTypes }

export const baseColors = {
  ...gray,
  ...mauve,
  ...slate,
  ...sage,
  ...olive,
  ...sand,
  ...tomato,
  ...red,
  ...crimson,
  ...pink,
  ...plum,
  ...purple,
  ...violet,
  ...indigo,
  ...blue,
  ...sky,
  ...mint,
  ...cyan,
  ...teal,
  ...green,
  ...grass,
  ...lime,
  ...yellow,
  ...amber,
  ...orange,
  ...brown,
  ...bronze,
  ...gold,

  ...grayA,
  ...mauveA,
  ...slateA,
  ...sageA,
  ...oliveA,
  ...sandA,
  ...tomatoA,
  ...redA,
  ...crimsonA,
  ...pinkA,
  ...plumA,
  ...purpleA,
  ...violetA,
  ...indigoA,
  ...blueA,
  ...skyA,
  ...mintA,
  ...cyanA,
  ...tealA,
  ...greenA,
  ...grassA,
  ...limeA,
  ...yellowA,
  ...amberA,
  ...orangeA,
  ...brownA,
  ...bronzeA,
  ...goldA,

  ...whiteA,
  ...blackA,

  hiContrast: '$slate12',
  loContrast: 'white',
  // semantic
  warning: '$amber9',
  error: '$tomato9',
  success: '$teal9',
  info: '$indigo9',
  canvas: 'hsl(0 0% 93%)',
  primary: '$teal9',
  secondary: '$purple9',
  tertiary: '$amber9',
  // semantic compliments
  primaryDarkCompliment: '$teal8',
  secondaryDarkCompliment: '$purple8',
  tertiaryDarkCompliment: '$amber8',
  //
  panel: 'white',
  transparentPanel: 'hsl(0 0% 0% / 97%)',
  shadowLight: 'hsl(206 22% 7% / 35%)',
  shadowDark: 'hsl(206 22% 7% / 20%)',
}

export const darkColors = {
  ...grayDark,
  ...mauveDark,
  ...slateDark,
  ...sageDark,
  ...oliveDark,
  ...sandDark,
  ...tomatoDark,
  ...redDark,
  ...crimsonDark,
  ...pinkDark,
  ...plumDark,
  ...purpleDark,
  ...violetDark,
  ...indigoDark,
  ...blueDark,
  ...skyDark,
  ...mintDark,
  ...cyanDark,
  ...tealDark,
  ...greenDark,
  ...grassDark,
  ...limeDark,
  ...yellowDark,
  ...amberDark,
  ...orangeDark,
  ...brownDark,
  ...bronzeDark,
  ...goldDark,

  ...grayDarkA,
  ...mauveDarkA,
  ...slateDarkA,
  ...sageDarkA,
  ...oliveDarkA,
  ...sandDarkA,
  ...tomatoDarkA,
  ...redDarkA,
  ...crimsonDarkA,
  ...pinkDarkA,
  ...plumDarkA,
  ...purpleDarkA,
  ...violetDarkA,
  ...indigoDarkA,
  ...blueDarkA,
  ...skyDarkA,
  ...mintDarkA,
  ...cyanDarkA,
  ...tealDarkA,
  ...greenDarkA,
  ...grassDarkA,
  ...limeDarkA,
  ...yellowDarkA,
  ...amberDarkA,
  ...orangeDarkA,
  ...brownDarkA,
  ...bronzeDarkA,
  ...goldDarkA,

  // Semantic colors
  hiContrast: '$slate12',
  loContrast: '$slate1',
  canvas: 'hsl(0 0% 15%)',
  panel: '$slate3',
  transparentPanel: 'hsl(0 100% 100% / 97%)',
  shadowLight: 'hsl(206 22% 7% / 35%)',
  shadowDark: 'hsl(206 22% 7% / 20%)',
}

/**
 * @name AvailableColors
 * @description all available colors provided
 * @see https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale#use-cases
 *
 * 1: App background
 *
 * 2: Subtle background
 *
 * 3: UI element background
 *
 * 4: Hovered UI element background
 *
 * 5: Active/Selected UI element background
 *
 * 6: Subtle borders and separators
 *
 * 7: UI element border and focus rings
 *
 * 8: Hovered UI element border
 *
 * 9: Solid backgrounds
 *
 * 10: Hovered solid backgrounds
 *
 * 11: Low-contrast text
 *
 * 12: High-contrast text
 */
export type AvailableColors = keyof typeof baseColors

/**
 * @name AvailableDarkColors
 * @description all available dark colors provided
 * @see https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale#use-cases
 *
 * 1: App background
 *
 * 2: Subtle background
 *
 * 3: UI element background
 *
 * 4: Hovered UI element background
 *
 * 5: Active/Selected UI element background
 *
 * 6: Subtle borders and separators
 *
 * 7: UI element border and focus rings
 *
 * 8: Hovered UI element border
 *
 * 9: Solid backgrounds
 *
 * 10: Hovered solid backgrounds
 *
 * 11: Low-contrast text
 *
 * 12: High-contrast text
 */
export type AvailableDarkColors = keyof typeof darkColors

export const {
  styled,
  css,
  theme: defaultTheme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset,
} = createStitches({
  theme: {
    colors: baseColors,
    fonts: {
      untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
      7: '27px',
      8: '35px',
      9: '59px',
    },
    radii: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      round: '50%',
      pill: '9999px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
  },
  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
    bp3: '(min-width: 1200px)',
    bp4: '(min-width: 1800px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
      alignItems: value,
    }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
      alignContent: value,
    }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
      justifyContent: value,
    }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
      flexShrink: value,
    }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
      lineHeight: value,
    }),

    ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
      pointerEvents: value,
    }),
    us: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
})

export type Theme = ConfigType.Theme

export type CSS = Stitches.CSS<typeof config>

export const darkTheme = createTheme('dark-theme', {
  colors: darkColors,
})
