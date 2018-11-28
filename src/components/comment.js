import React from 'react'

const Comment = (props) => {
  const { user, text } = props
  return (
    <>
      <h6 style={{ fontSize: '.9rem', color: '#c2c2c2' }}>{user}</h6>
      <section>
        <p>{text}</p>
      </section>
    </>
  )
}
export default Comment
