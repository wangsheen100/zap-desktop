import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import Spinner from 'components/Icon/Spinner'
import system from '@rebass/components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Wrapper = system(
  {
    color: 'lightningOrange'
  },
  'space',
  'color'
)

/**
 * @render react
 * @name Spinner
 * @example
 * <Spinner />
 */
const renderSpinner = Element => {
  return styled(Element)`
    animation: ${rotate360} 1s linear infinite;
  `
}

const WrappedSpinner = ({ element, size, ...rest }) => {
  const sizeProps = {}
  if (size) {
    sizeProps.width = size
    sizeProps.height = size
  }

  const Icon = element

  const Element = renderSpinner(Icon)
  return (
    <Wrapper {...rest}>
      <Element {...sizeProps} />
    </Wrapper>
  )
}

WrappedSpinner.propTypes = {
  element: PropTypes.any,
  size: PropTypes.string
}

WrappedSpinner.defaultProps = {
  element: Spinner,
  size: '1em'
}

export default WrappedSpinner
