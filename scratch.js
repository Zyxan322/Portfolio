const fs = require('fs');
const content = fs.readFileSync('lovable.js', 'utf8');
const emails = content.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
const links = content.match(/https?:\/\/[^\s\"'\`]+/g) || [];
console.log('Emails:', [...new Set(emails)]);
console.log('Links:', [...new Set(links)].filter(l => l.includes('linkedin') || l.includes('behance')));
