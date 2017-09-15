import { findWithRegex } from '../';

const regex = /\@[\w]+/g;

export default function strategy(contentBlock, callback) {
  findWithRegex(regex, contentBlock, callback);
}
