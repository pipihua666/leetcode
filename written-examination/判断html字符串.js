function isHtmlCode(code) {
  const startTagRegex = /<(\w+)([^>]*?)>/g;
  const endTagRegex = /<\/(\w+)[^>]*>/g;
  const startTags = code.match(startTagRegex);
  const endTags = code.match(endTagRegex);
  if (!startTags || !endTags || startTags.length !== endTags.length) {
    return false;
  }
  const tagStack = [];
  for (let i = 0; i < startTags.length; i++) {
    const startTag = startTags[i];
    const endTag = endTags[i];
    const tagName = startTag.match(/<(\w+)/)[1];
    const isSelfClosingTag = startTag.slice(-2) === '/>';
    if (!isSelfClosingTag) {
      tagStack.push(tagName);
    }
    if (endTag.slice(2, -1) !== tagName) {
      return false;
    }
  }
  return tagStack.length === 0;
}

// 示例用法
console.log(isHtmlCode('<div></div><img/>')); // true
console.log(isHtmlCode('<div><img/></div>')); // true
console.log(isHtmlCode('<div><img></div>')); // false
console.log(isHtmlCode('<div><img></div><p>text</p>')); // true
console.log(isHtmlCode('<div><img><p>text</p>')); // false
