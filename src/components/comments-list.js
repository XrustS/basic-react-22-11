import React, { PureComponent } from 'react'
import Comment from './comment'

class CommentList extends PureComponent {
  render() {
    const { comments } = this.props

    return Array.isArray(comments) ? this.getComments(comments) : 'Комментарии отсутвуют.'
  }
  getComment = (comment) => {
    const { id, ...props } = comment
    return (
      <li key={id}>
        <Comment {...props} />
      </li>
    )
  }
  getComments = (comments) => <ul>{comments.map(this.getComment)}</ul>
}
export default CommentList
