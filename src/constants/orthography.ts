import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'á',
  'b',
  'c',
  'č',
  'd',
  'đ',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'ŋ',
  'o',
  'p',
  'q',
  'r',
  's',
  'š',
  't',
  'ŧ',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'ž',
  'æ',
  'ø',
  'å',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
