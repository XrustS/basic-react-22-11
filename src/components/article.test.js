import React from 'react'
import { shallow, render, mount } from 'enzyme'

import Article from './article'
import CommentList from './comments-list'
import Comment from './comment'
import articlesData from '../fixtures'

describe('Article', () => {
  it('should render close article', () => {
    const wrapper = shallow(<Article article={articlesData[0]} />)

    expect(wrapper.find(CommentList).length).toEqual(0)
  })
  it('should render close commentList when article open', () => {
    const wrapper = shallow(<Article article={articlesData[0]} isOpen />)

    expect(wrapper.find(CommentList).length).toEqual(1)
    expect(wrapper.find(Comment).length).toEqual(0)
  })
  it('should open commentList when click show comments', () => {
    const wrapper = mount(<Article article={articlesData[0]} isOpen />)

    expect(wrapper.find(Comment).length).toEqual(0)
    expect(wrapper.find('.test__comment--btn1').text()).toEqual('Show comments')
    wrapper
      .find('.test__comment--btn1')
      .at(0)
      .simulate('click')
    expect(wrapper.find(Comment).length).toEqual(articlesData[0].comments.length)
    expect(wrapper.find('.test__comment--btn1').text()).toEqual('Hide  comments')
  })
})
