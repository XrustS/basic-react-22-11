import React, { PureComponent } from 'react'
import Comment from './comment'
import accordionCustom from '../decorators/accordion-custom'

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
          <button style={{ marginLeft: '40px' }} onClick={toggleOpen}>
            {isOpen ? 'Open' : 'Close'}
          </button>
        </h4>
        {isOpen && <ul>{comments.map(this.getComment)}</ul>}
      </>
    )
  }
}
export default accordionCustom(CommentList)
