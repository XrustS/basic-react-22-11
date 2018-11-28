import React from 'react'

export default (Component) =>
  class AccordionCustomComponent extends React.Component {
    state = {
      isOpenItem: false
    }

    toggleOpenItem = () => {
      const { isOpenItem } = this.state
      this.setState({
        isOpenItem: !isOpenItem
      })
    }

    render() {
      const { isOpenItem } = this.state
      return <Component {...this.props} toggleOpen={this.toggleOpenItem} isOpen={isOpenItem} />
    }
  }
