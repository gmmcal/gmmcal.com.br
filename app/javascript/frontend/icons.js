import { config, library, dom } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faGitlab, faDev, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInbox, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

class Icons {
  _icons = []
  _config = config
  _library = library

  constructor() {
    this.mutateApproach = 'sync'
    this.icons = [
      faGithub,
      faGitlab,
      faDev,
      faTwitter,
      faLinkedinIn,
      faMapMarkerAlt,
      faMobileAlt,
      faInbox
    ]
  }

  set mutateApproach(type) {
    this._config.mutateApproach = type
  }

  set icons(icons) {
    this._icons = icons
    this._library.add(icons)
    dom.watch()
  }

  get mutateApproach() {
    return this._config.mutateApproach
  }

  get icons() {
    return this._icons.map(icon => icon.iconName)
  }
}

export default Icons
