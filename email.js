let appData = {
    name: 'Gmail',
    mailboxes: {
        inbox: [],
        junk: [],
        sent: [], 
        drafts: [
            {
                email: 0,
                sender: 'Lauren Rydh',
                recipients: 'Mom',
                subject: 'Tax Documents',
                text: 'Hi mom, did you get the W-2 that I sent you? Let me know if you need anything else.',
    
              }
        ],
        trash: [],
    },
    contacts: [ 
        {
            name: 'Mom',
            email: 'mom@gmail.com',
        },
        {
            name: 'Dad',
            email: 'dad@gmail.com',
        }
    ],
    emails: [
        {
            email: 1,
            sender: 'Old Navy',
            recipients: 'Lauren Rydh',
            subject: '40 % Off All Dresses',
            text: 'This Friday only, take 40% off all dresses at Old Navy with discount code 40OFF.',

          },
          {
            email: 2,
            sender: 'Kohls',
            recipients: 'Lauren Rydh',
            subject: 'Get $10 Kohls cash',
            text: 'This summer at Kohls get $10 Kohls cash for every $50 you spend. Exclusions may apply.'
          } 
    ]
    
}

// log mailboxes
let mailboxNames = Object.keys(appData.mailboxes)
console.log(mailboxNames)

// Get a list of emails
console.log(appData.emails)

// Get the text of the second email
console.log(appData.emails[1].text)

// Mark an email as sent
appData.mailboxes.sent.push(appData.mailboxes.drafts[0])
appData.mailboxes.drafts.splice(0, 1)
console.log(appData.mailboxes.sent)
console.log(appData.mailboxes.drafts)


// Add a draft email to the drafts mailbox
let newDraft = {
    email: 4,
    sender: 'Lauren Rydh',
    recipients: 'Dad',
    subject: 'gift ideas',
    text: 'Hey Dad, I think for mothers day mom would like flowers, a new bathroom faucet, or a silk pillowcase.',
}
appData.mailboxes.drafts.push(newDraft)
console.log(appData.mailboxes.drafts)