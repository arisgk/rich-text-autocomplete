import { findWithRegex } from '../';

const regex = /\#[\w\u0590-\u05ff]+/g;

export default function strategy(contentBlock, callback) {
  findWithRegex(regex, contentBlock, callback);
}
