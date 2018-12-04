import React, { Component } from 'react'
import DateRange from './date-range'
import SelectFilter from './select'
import PropTypes from 'prop-types'

class Filters extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string,
            user: PropTypes.string,
            text: PropTypes.string
          })
        )
      })
    )
  }

  render() {
    return (
      <div>
        <SelectFilter articles={this.props.articles} />
        <DateRange />
      </div>
    )
  }
}

export default Filters
