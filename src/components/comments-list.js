import React, { PureComponent } from 'react'
import Comment from './comment'
import accordionCustom from '../decorators/accordion-custom'
import PropTypes from 'prop-types'

class CommentList extends PureComponent {
  render() {
    const { comments } = this.props

    return Array.isArray(comments) ? this.getComments(comments) : 'Комментарии отсутвуют.'
  }
  getComment = (comment) => {
    const { id, user, text } = comment

    const props = {
      user,
      text
    }

    return (
      <li key={id}>
        <Comment {...props} />
      </li>
    )
  }
  getComments = (comments) => {
    const { isOpen, toggleOpen } = this.props
    return (
      <>
        <h4>
          Комментарии
          <button
            id="comment-btn"
            className="test__comment--btn1"
            style={{ marginLeft: '40px' }}
            onClick={toggleOpen}
          >
            {isOpen ? 'Hide  comments' : 'Show comments'}
          </button>
        </h4>
        {isOpen && <ul className="test__comment--body">{comments.map(this.getComment)}</ul>}
      </>
    )
  }
}
CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      user: PropTypes.string,
      text: PropTypes.string
    })
  )
}
export default accordionCustom(CommentList)
