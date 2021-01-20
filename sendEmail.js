const users = Array(100).fill(1,0,100)
const even = []
const odd = []

for (const user of users.keys()) {
    if (user % 2 == 0) {
        odd.push(user+1)
    } else {
        even.push(user+1)
    }
}

console.log(odd)
console.log(even)

const sendMail = (message_to_even, message_to_odd) => {
    const mail_object_even = {}
    const mail_object_odd = {}
    for (const user_even of even) {
        mail_object_even[user_even] = `${message_to_even} to even`
    }
    for (const user_odd of odd) {
        mail_object_odd[user_odd] = `${message_to_odd} to odd`
    }
    
    console.log(mail_object_even, mail_object_odd)
}

sendMail('hello world','yello world')