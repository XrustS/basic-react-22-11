import React, { Component } from 'react'
import Article from './article'
import accordion from '../decorators/accordion'
import PropTypes from 'prop-types'

export class ArticleList extends Component {
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
    ),
    openItemId: PropTypes.string.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
  }
  setListRef = (ref) => {
    this.list = ref
  }

  state = {
    error: null
  }

  componentDidCatch(error) {
    this.setState({ error })
  }

  componentDidMount() {
    const { fetchAllArticles } = this.props

    fetchAllArticles && fetchAllArticles()
  }

  render() {
    if (this.state.error) return <h3>Error</h3>
    return <ul ref={this.setListRef}>{this.articleItems()}</ul>
  }

  articleItems() {
    const { articles, openItemId, toggleOpenItem } = this.props
    return articles.map((article) => (
      <li key={article.id} className="test__article-list--item">
        <Article
          article={article}
          isOpen={openItemId === article.id}
          toggleOpen={toggleOpenItem(article.id)}
          comments={article.comments}
        />
      </li>
    ))
  }
}

export default accordion(ArticleList)
