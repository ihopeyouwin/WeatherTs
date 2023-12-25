import Activity from './Activity'
import Language from './Language'
import Main from './Main'

const icons = {
  activity: Activity,
  language: Language,
  main: Main,
}

export default ({ icon, ...props }) => (icons[icon] ? icons[icon](props) : icons.activity)
