import { createChatBotMessage } from 'react-chatbot-kit'
import LearningOptions from './components/LearningOptions'
import LinkList from './components/LinkList'

const config = { 
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: 'dataVisualizationLinks',
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Learning Python for Data Analysis & Visualization",
            url:
              "https://www.udemy.com/course/learning-python-for-data-analysis-and-visualization/",
            id: 4,
          },
          {
            text: "Data Science",
            url:
              "https://www.edx.org/professional-certificate/harvardx-data-science?index=product&queryID=e841774065fa2e62d301d9f9f4ddd768&position=3",
            id: 5,
          },
          {
            text: "Data Visualization",
            url: "https://www.udacity.com/course/data-visualization-nanodegree--nd197?irclickid=StZTYiWmuxyLUM9wUx0Mo3YfUkB0vQ10ETysXk0&irgwc=1&utm_source=affiliate&utm_medium=&aff=397676&utm_term=&utm_campaign=_dddatavisualization04_&utm_content=&adid=786224",
            id: 6,
          },
        ],
      },
    },
    {
      widgetName: "APILinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to Web APIs",
            url:
              "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction",
            id: 7,
          },
          {
            text: "APIs for Beginners",
            url:
              "https://www.freecodecamp.org/news/apis-for-beginners-full-course/",
            id: 8,
          },
          {
            text: "APIs: Crash Course",
            url: "https://www.udemy.com/course/learn-apis/",
            id: 9,
          },
        ],
      },
    }
  ],
}

export default config