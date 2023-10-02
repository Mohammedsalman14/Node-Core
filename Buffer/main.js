
const buffer=Buffer.alloc(8);

buffer.write("st",'utf-8');

console.log(buffer.toJSON());
console.log(`length: `,buffer.length);

const buffer2=Buffer.from("string",'utf-8');
console.log(buffer2.toJSON());

const buffer3=Buffer.from([97,66,67],"dec");
console.log(buffer3.toString('utf-8'));

const buffer4=Buffer.from("E0AEAEE0AF81",'hex');
console.log(buffer4.toString('utf-8'));