/**
 * Created by sinowinner on 17/6/30.
 */
import Mock from 'mockjs'
import * as lang from '../assets/lang/lang'

const langs = ['zh', 'en']

Mock.mock('/lang', lang[langConfig(langs)])
Mock.mock('/lang/zh', lang['zh'])
Mock.mock('/lang/en', lang['en'])

function langConfig (langs) {
  for (let i = 0; i < langs.length; i++) {
    if (~window.navigator.language.toLocaleLowerCase().indexOf(langs[i])) {
      return langs[i]
    }
  }
}
export default {}
