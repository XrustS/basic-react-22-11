import React from 'react'
import CommentList from './comments-list'

function Article(props) {
  const { article, isOpen, toggleOpen } = props
  return (
    <div>
      <h3>{article.title}</h3>
      <button onClick={toggleOpen}>{isOpen ? 'close' : 'open'}</button>
      {getBody(props)}
    </div>
  )
}

function getBody({ isOpen, article, comments }) {
  if (!isOpen) return null

  return (
    <>
      <section>{article.text}</section>
      <CommentList comments={comments} />
    </>
  )
}

export default Article
