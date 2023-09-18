function HTMLElements(str) {
  const stack = [];
  const elements = ["b", "i", "em", "div", "p"];
  const regex = /<(\w+)>|<\/(\w+)>/g;
  const matches = str.match(regex);

  for (const match of matches) {
    if (match.startsWith("</")) {
      const closingTag = match.substring(2, match.length - 1);
      if (stack.length === 0 || stack.pop() !== closingTag) {
        return closingTag;
      }
    } else if (match.startsWith("<")) {
      const openingTag = match.substring(1, match.length - 1);
      if (!elements.includes(openingTag)) {
        return openingTag;
      }
      stack.push(openingTag);
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return stack.pop();
  }
}

// keep this function call here
console.log(HTMLElements("<div><b><p>hello </p> </b></div>"));
