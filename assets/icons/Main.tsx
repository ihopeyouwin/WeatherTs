import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from '../../src/core/types'

const Main = ({ size = '100%', color = '#040517', ...props }: IconProps): Svg => {
  return (
    <Svg viewBox='0 0 64 64' width={size} height={size} {...props}>
      <Path
        d='M55 20.19L36.68 5a7.34 7.34 0 00-9.36 0L9 20.19a7.31 7.31 0 00-2.65 5.65v27.53a7.34 7.34 0 007.33 7.33h36.65a7.34 7.34 0 007.33-7.33V25.83A7.31 7.31 0 0055 20.19zm-1.33 33.18a3.34 3.34 0 01-3.33 3.33H13.67a3.34 3.34 0 01-3.33-3.33V25.83a3.32 3.32 0 011.21-2.57L29.87 8.07a3.34 3.34 0 014.26 0l18.33 15.2a3.32 3.32 0 011.21 2.57z'
        data-name='Layer 86'
        fill={color}
      />
    </Svg>
  )
}

export default Main
