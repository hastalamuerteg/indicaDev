import Main from './Components/Main'
import Navbar from './Components/Navbar'
import MidSection from './Components/MidSection'
import InfoCard from './Components/InfoCard'
import Topic from './Components/Topic'
import Advertisement from './Components/Advertisement'
import AdvertisementCard from './Components/AdvertisementCard'
import Footer from './Components/Footer'

//IMAGES
import codeThinking from './images/codeThinking.svg'
import portfolio from './images/portfolio.svg'
import onlineResume from './images/onlineResume.svg'
import reviewCode from './images/codeReview.svg'
import peopleSelection from './images/selectPeople.svg'
import messages from './images/messages.svg'
import publish from './images/publish.svg'
import subscriptions from './images/subscriptions.svg'
import everywhere from './images/everywhere.svg'


//STYLES
import styles from './App.module.css'




function App() {
  return (
    <div>
        <Navbar/>
        <Main/>
        <MidSection
        title="A community of developers made by developers."
        content="Find friends, share relevant content and projects of you own and if you need you can also hire other developers to give you a hand in your projects."
        />
        <InfoCard
        title="Ask for a hand"
        content="If you are struggling with a project, try sharing it to get help."
        image={codeThinking}
        />
        <InfoCard
        title="Share your projects"
        content="Make sure to have a nice portfolio to share with others, it will increase your chances to find good job opportunities"
        image={portfolio}
        />
        <InfoCard
        title="Profile"
        content="Make sure you have a nice profile to tell others more about your skills"
        image={onlineResume}
        />
        <MidSection
        title="The community grow bigger everyday"
        content="New developers subscribe everyday, go ahead and give it a try."
        />

      <div className={styles.grid__box}>
      <Topic
      title="Code review"
      content="Ask for other developers to review your code and give you a hand with something."
      image={reviewCode}
      anchor="Subscribe now"
      />
      <Topic
      title="Find friends"
      content="Check out for people you may know already and connect."
      image={peopleSelection}
      anchor="Subscribe now"
      />
      <Topic
      title="Private messages"
      content="Send private messages to your connections."
      image={messages}
      anchor="Subscribe now"
      />
      <Topic
      title="Publish your project"
      content="Publish your project and see how people react to it."
      image={publish}
      anchor="Subscribe now"
      />
      <Topic
      title="Subscriptions"
      content="Subscribe to get the full potential of the platform."
      image={subscriptions}
      anchor="Subscribe now"
      />
      <Topic
      title="Connect everywhere"
      content="Connect while you are taking a walk at the park."
      image={everywhere}
      anchor="Subscribe now"
      />
      </div>
      <Advertisement
      title="Check out how you can get the most out of indicaDev Platform"
      content="Find more about the plans and what you pay for."
      >
        <AdvertisementCard
        title="Free"
        pricetag="USD 0"
        content="Monthly"
        anchor="Sign up now for free"
        />
        <AdvertisementCard
        title="A penny"
        pricetag="USD 9"
        content="Give it a try for 7 days"
        anchor="Subscribe now"
        />
        <AdvertisementCard
        title="Two pennies"
        pricetag="USD 18"
        content="Give it a try for 7 days"
        anchor="Subscribe now"
        />
      </Advertisement>
      <MidSection
        title="Let's code together."
        content="indicaDev."
        />
      <Footer/>
    </div>
  );
}

export default App;
