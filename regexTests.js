// test whether the str provided is a valid email
function testEmail (email) {
	return email.match(/\w+[\.]?\w+@\w+\.[A-z]{2,}/gmi)

}

console.assert(testEmail("stroman.azariah@yahoo.com"));
console.assert(testEmail("viola91@gmail.com"));
console.assert(testEmail("eathel.west@example.org"));
console.assert(testEmail("dwehner@harley.us"));
console.assert(testEmail("malcolm.haley@hotmail.com"));
console.assert(testEmail("ezzard90@hotmail.com"));
console.assert(testEmail("legros.curley@gmail.com"));
console.assert(testEmail("leatha75@mertz.net"));
console.assert(testEmail("bonita43@yahoo.com"));
console.assert(!testEmail(""));
console.assert(!testEmail("legros.curley"));
console.assert(!testEmail("mertz.net"));
console.assert(!testEmail("bonita43@"));


// test whether the str provided is a valid phone
function testPhone (phone) {

	return phone.match(/\(?(\d{3})?\)?[\.\-\ ]?(\d{3})[\.\-\s ]?(\d{4})/gmi)
}

console.assert(testPhone("919-555-1212"));
console.assert(testPhone("(919) 555-1212"));
console.assert(testPhone("9195551212"));
console.assert(testPhone("919.555.1212"));
console.assert(testPhone("919 555-1212"));
console.assert(!testPhone(""));
console.assert(!testPhone("555-121"));
console.assert(!testPhone("1212"));
console.assert(!testPhone("mobile"));


// test whether the number (as a string) sent to you is a binary number
function testBinary (number) {
	return number.match(/\b[0-1]+[0-1]?/gmi)
}

console.assert(testBinary("0"));
console.assert(testBinary("1"));
console.assert(testBinary("01"));
console.assert(testBinary("10"));
console.assert(testBinary("1110100010"));
console.assert(!testBinary(""));
console.assert(!testBinary("911"));


// test whether the number sent to you as a binary is an even number
function testBinaryEven (number) {
	return number.match(/[0-1]{1,}0\b/)

}

console.assert(testBinaryEven("10"));
console.assert(testBinaryEven("1110100010"));
console.assert(!testBinaryEven("1011"));


// test whether the number sent to yo is a valid hex string
function testHex (str) {
	return str.match(/\b[0-9 a-f]+[0-9 a-f]/gmi)

}

console.assert(testHex("CAFE"));
console.assert(testHex("9F9"));
console.assert(testHex("123"));
console.assert(testHex("6720EB3A9D1"));
console.assert(!testHex(""));
console.assert(!testHex("COFFEE"));

// test whether the str sent to you is valid for currency
function testMoney (str) {
	return str.match(/^\$\d+((,\d{3})*)?(\.\d{2})?$/)

}

console.assert(testMoney("$4"));
console.assert(testMoney("$19"));
console.assert(testMoney("$19.00"));
console.assert(testMoney("$3.58"));
console.assert(testMoney("$1000"));
console.assert(testMoney("$1000.00"));
console.assert(testMoney("$1,000"));
console.assert(testMoney("$1,000.00"));
console.assert(testMoney("$5,555,555"));
console.assert(testMoney("$5,555,555.55"));
console.assert(testMoney("$45,555,555.55"));
console.assert(testMoney("$456,555,555.55"));
console.assert(testMoney("$1234567.89"));
console.assert(!testMoney(""));
console.assert(!testMoney("$12,34"));
console.assert(!testMoney("$1234.9"));
console.assert(!testMoney("$1234.999"));
console.assert(!testMoney("$"));
console.assert(!testMoney("31"));
console.assert(!testMoney("$$31"));

// test whether the str sent to you is a valid zip code
function testZip (str) {
	return str.match(/(?:\b\d{5}\b-\b\d{4}\b)|(?:\b\d{5}\b$)/gmi)
}

console.assert(testZip("63936"));
console.assert(testZip("50583"));
console.assert(testZip("48418"));
console.assert(testZip("06399"));
console.assert(testZip("26433-3235"));
console.assert(testZip("64100-6308"));
console.assert(!testZip(""));
console.assert(!testZip("7952"));
console.assert(!testZip("115761"));
console.assert(!testZip("60377-331"));
console.assert(!testZip("8029-3924"));

// This challenge is to parse MarkDown links - so [text](http://example.com)
// would simply be replaced with the following HTML: <a href="http://example.com">text</a>.
// Be careful with images. ![alt text](image location) should be left alone, as it isn't a link.
function markDownLink (text) {

}

console.assert(markDownLink('[Basic link](http://example.com)') === '<a href="http://example.com">Basic link</a>');
console.assert(markDownLink('[Another](http://example.com/)') === '<a href="http://example.com/">Another</a>');
console.assert(markDownLink('Link: [lynx.io](http://lynx.io/)') === 'Link: <a href="http://lynx.io/">lynx.io</a>');
console.assert(markDownLink('l [l](http://TESTdomain.com) l') === 'l <a href="http://TESTdomain.com">l</a> l');
console.assert(markDownLink('[Invalid](javascript:alert())') === '[Invalid](javascript:alert())');
console.assert(markDownLink('![Image](http://example.com/cats.jpg)') === '![Image](http://example.com/cats.jpg)');
console.assert(markDownLink('[Invalid](http://inval.id,com)')) === '[Invalid](http://inval.id,com)');


// Turn italic MarkDown (*this is italic*) into HTML italic: <em>this is italic</em>. It 
// should not, however, match bold text - text surrounded by multiple asterisks.
// This is a somewhat unrealistic challenge - in real life, you wouldn't have to
// make sure that it isn't bold, as you would have already parsed the bold text.
function markDownItalics (text) {
  return (text.replace(/\*/g, "<em>"))
}

console.assert(markDownItalics('This text is not italic.') === 'This text is not italic.');
console.assert(markDownItalics('*This text is italic.*') === '<em>This text is italic.</em>');
console.assert(markDownItalics('This text is *partially* italic') === 'This text is <em>partially</em> italic');
console.assert(markDownItalics('This text has *two* *italic* bits') === 'This text has <em>two</em> <em>italic</em> bits');
console.assert(markDownItalics('**bold text (not italic)**') === '**bold text (not italic)**');
console.assert(markDownItalics('**bold text with *italic* **') === '**bold text with <em>italic</em> **');
console.assert(markDownItalics('**part bold,** *part italic*') === '**part bold,** <em>part italic</em>');
console.assert(markDownItalics('*italic* **bold** *italic* **bold**') === '<em>italic</em> **bold** <em>italic</em> **bold**');
console.assert(markDownItalics('*invalid markdown (do not parse)**') === '*invalid markdown (do not parse)**');
console.assert(markDownItalics('random *asterisk') === 'random *asterisk');

/*** Extraction ***/

// Return an array of phone numbers from a given string
function extractPhoneNumber (text) {
	return text.match(/\(?(\d{3})?\)?[\.\-\ ]?(\d{3})[\.\-\s ]?(\d{4})/gmi)
}

console.assert("Dear Mr. Davis, I got to know of your company through our mutual friend Fiona Williams and the training you offer to graduate students in Advertising. I am a graduate student of Mass Communications with specialization in Advertising.  I am currently pursuing the last year of my course. I would very much like to see firsthand the work environment in an advertising agency. If you would like a reference, my advisor can be reached at (454) 999-1212. You can contact me at (919) 123-4569 at your convenience." === ["(454) 999-1212", "(919) 123-4569"])

// Return an array of all emails found inside of given string
function extractEmails (text) {
	return text.match(/\w+[\.]?\w+@\w+\.[A-z]{2,}/gmi)
}

console.assert(extractEmails("Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth@gmail.com tatsoi tomatillo azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea@sprouts.org fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber.earthnut@pea.net peanut soko zucchini.") === ["amaranth@gmail.com","pea@sprouts.org", "cucumber.earthnut@pea.net"]);