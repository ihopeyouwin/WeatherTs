import React from 'react'
import { Svg, Path } from 'react-native-svg'

const Activity = ({ color = '#101417', size = '100%', ...props }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 6.00003C12.75 5.58582 12.4142 5.25003 12 5.25003C11.5858 5.25003 11.25 5.58582 11.25 6.00003V12C11.25 12.4142 11.5858 12.75 12 12.75H16C16.4142 12.75 16.75 12.4142 16.75 12C16.75 11.5858 16.4142 11.25 16 11.25H12.75V6.00003Z'
      fill={color}
    />
  </Svg>
)

export default Activity
