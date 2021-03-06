class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage
    this.setState = setStateFunc
  }
  
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.")
    this.updateChatbotState(greetingMessage)
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Javascript:",
      {
        widget: "javascriptLinks",
      }
    )
    this.updateChatbotState(message)
  }

  handleDataVisualizationList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Data Visualization:",
      {
        widget: "dataVisualizationLinks",
      }
    )
    this.updateChatbotState(message)
  }

  handleApiList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on APIs:",
      {
        widget: "APILinks",
      }
    )
    this.updateChatbotState(message)
  }

  handleSecurityList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Security:",
      {
        widget: "securityLinks",
      }
    )
    this.updateChatbotState(message)
  }

  handleInterviewPrepList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Interview Prep:",
      {
        widget: "interviewPrepLinks",
      }
    )
    this.updateChatbotState(message)
  }
  
  updateChatbotState(message) {   
   this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider