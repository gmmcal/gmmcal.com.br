import I18n from 'i18n-js'
import I18nEN from './en'
import I18nBR from './pt-BR'

I18n.defaultLocale = 'en';
// document.addEventListener('DOMContentLoaded', () => {
//   I18n.locale = document.getElementById('home').getAttribute('data-locale')
// })
I18n.fallbacks = true
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), I18nEN)
I18n.translations["pt-BR"] = I18n.extend((I18n.translations["pt-BR"] || {}), I18nBR)

export default I18n
