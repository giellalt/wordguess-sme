import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'á',
  'š',
  'e',
  'r',
  't',
  'ŧ',
  'y',
  'u',
  'i',
  'o',
  'p',
  'å',
  'ŋ',

  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'ø',
  'æ',
  'đ',

  'ž',
  'z',
  'č',
  'c',
  'v',
  'b',
  'n',
  'm',

//  'q',
//  'w',
//  'x',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
