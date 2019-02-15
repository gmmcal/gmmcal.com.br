import I18n from 'i18n-js'
import i18n_data from './i18n.json'

I18n.defaultLocale = 'en'
I18n.fallbacks = true
I18n.translations = I18n.extend(I18n.translations || {}, i18n_data)

export default I18n
