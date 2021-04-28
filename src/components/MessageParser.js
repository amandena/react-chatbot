class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()
    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet()
    }
    if (lowerCaseMessage.includes("javascript")) {
      this.actionProvider.handleJavascriptList()
    } else if (lowerCaseMessage.includes('data visualization')) {
      this.actionProvider.handleDataVisualizationList()
    } else if (lowerCaseMessage.icludes('apis')) {
      this.actionProvider.handleApiList()
    } else if (lowerCaseMessage.includes('security')) {
      this.actionProvider.handleSecurityList()
    }
  }
}

export default MessageParser