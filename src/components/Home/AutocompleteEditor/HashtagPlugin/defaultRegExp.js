// export default /\#[\w\u0590-\u05ff]+/g;

export default '[' +
  '\\w-' +
  '\u0590-\u05ff' +
']*';
