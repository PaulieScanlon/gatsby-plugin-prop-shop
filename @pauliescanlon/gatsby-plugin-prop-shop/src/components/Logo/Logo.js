/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

export const Logo = ({ logoSize }) => (
  <svg x="0px" y="0px" width={logoSize} height={logoSize} viewBox="0 0 100 100">
    <g>
      <path
        sx={{ fill: 'psSecondary' }}
        d="M12,50c0-20.9,17.1-38,38-38l0,0V1.4c-12.3,0-22.6,4-31.9,11.8C-2.2,31-4.3,61.6,13.2,81.9l8-7
		C15.6,68.2,12,59.5,12,50z"
      />
      <path
        sx={{ fill: 'psTertiary' }}
        d="M50,88C38.6,88,28.3,83,21.3,74.9l-8,7c1.7,1.9,3.6,3.8,5.5,5.3c20.5,17.3,51.1,14.6,68.5-5.9l-8-6.8
		C72.2,82.8,61.6,88,50,88z"
      />
      <path
        sx={{ fill: 'psPrimary' }}
        d="M50,1.4V12c20.9,0,38,17.1,38,38c0,9.3-3.4,17.8-8.9,24.5l8,6.8C95,72,98.6,62.3,98.6,50
		C98.6,23.2,76.9,1.4,50,1.4z"
      />
    </g>
    <g>
      <path
        sx={{ fill: 'psMuted' }}
        d="M42.3,25.8c-3.9,6.1-2.7,11.7-0.8,15.1c2.2-1.9,5-3,8.1-3c2.9,0,5.5,1,7.6,2.7c3.6-3.2,8.9-3.1,10.9-8.5
					C70.8,24.5,50.6,12.9,42.3,25.8z"
      />
      <path
        sx={{ fill: 'psMuted' }}
        d="M74.2,56c-3.3-6.5-8.8-8.1-12.7-8.3c0.2,0.8,0.2,1.6,0.2,2.4c0,5.2-3.2,9.6-7.8,11.4
					c1,4.7-1.8,9.3,1.9,13.7C61.1,81.4,81.2,69.7,74.2,56z"
      />
      <path
        sx={{ fill: 'psMuted' }}
        d="M37.2,50.1c0-0.6,0-1.2,0.1-1.8c-4.6-1.5-7.2-6.2-12.8-5.2c-8,1.4-7.9,24.7,7.4,25.4
					c7.3,0.3,11.4-3.5,13.5-6.8C40.7,60.1,37.2,55.5,37.2,50.1z"
      />
    </g>
  </svg>
)

Logo.defaultProps = {
  /** The default px value for the width and height */
  logoSize: 58,
}

Logo.propTypes = {
  /** The size of the logo */
  logoSize: PropTypes.number,
}
