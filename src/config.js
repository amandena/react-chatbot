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
    },
    {
      widgetName: "securityLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Cybersecurity Bootcamp",
            url:
              "https://digitalskills.njit.edu/lp/steph-v2/?sp=google&sp=google&utm_source=google&utm_medium=cpc&utm_campaign=NJIT-Cybersecurity-Generic-tcpa53&utm_adset=cybersecurity&utm_term=cyber%20security&adpos=&device=c&creative474648073886&placement=&cid=10733039018&asid=111290604612&kmt=p&net=g&device_model=&target=kwd-119746396&gclid=CjwKCAjw7J6EBhBDEiwA5UUM2t4x9Io8MBQjnuVekhD9UmE3pZneu7R3hnbYPaAL4TfY4CyWPTXwaxoCk6sQAvD_BwE",
            id: 10,
          },
          {
            text: "The Complete Cyber Security Course: Hackers Exposed!",
            url:
              "https://www.udemy.com/course/the-complete-internet-security-privacy-course-volume-1/",
            id: 11,
          },
          {
            text: "The Complete Cyber Security Course: Network Security!",
            url: "https://www.udemy.com/course/network-security-course/",
            id: 12,
          },
        ],
      },
    },
    {
      widgetName: "interviewPrepLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "The Coding Interview Bootcamp: Algorithms + Data Structures",
            url:
              "https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/?ranMID=39197&ranEAID=vedj0cWlu2Y&ranSiteID=vedj0cWlu2Y-2NKgiPp.7eIGyhcJfOBhPA&LSNPUBID=vedj0cWlu2Y&utm_source=aff-campaign&utm_medium=udemyads",
            id: 13,
          },
          {
            text: "Python for Data Structures, Algorithms and Interviews",
            url:
              "https://www.udemy.com/course/python-for-data-structures-algorithms-and-interviews/?ranMID=39197&ranEAID=vedj0cWlu2Y&ranSiteID=vedj0cWlu2Y-YqiB1wxQTXVb9A_BClomow&utm_source=aff-campaign&utm_medium=udemyads&LSNPUBID=vedj0cWlu2Y",
            id: 14,
          },
          {
            text: "Mastering Web Developer Interview Code",
            url: "https://www.linkedin.com/learning/mastering-web-developer-interview-code",
            id: 15,
          },
        ],
      },
    }
  ],
}

export default config