import React, { Component } from 'react'
import Article from './article'
import accordion from '../decorators/accordion'
import CommentList from './comments-list'

class ArticleList extends Component {
  setListRef = (ref) => {
    this.list = ref
    console.log('---', 'list: ', ref)
  }

  render() {
    return <ul ref={this.setListRef}>{this.articleItems()}</ul>
  }

  articleItems() {
    const { articles, openItemId, toggleOpenItem } = this.props
    return articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={openItemId === article.id}
          toggleOpen={toggleOpenItem(article.id)}
        />
        <CommentList comments={article.comments} />
      </li>
    ))
  }
}

export default accordion(ArticleList)
