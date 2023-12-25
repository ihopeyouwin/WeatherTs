import React from 'react'

import type { ComponentProps } from 'react'

export type ReactJsx = React.JSX.Element

export type IconProps = ComponentProps<{
  size?: number | string,
  color?: string,
  icon: string,
  isFill?: boolean,
}>
