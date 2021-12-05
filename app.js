const notes = require('./notes')
const yargs = require('yargs')

// create note
yargs.command({
    command:'add',
    describe:'add note',
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:"string"
        }
    },
    handler: argv => notes.addNotes(argv.title, argv.body)
    
})
 // read note
 yargs.command({
    command:"readNote",
    describe:"read note",
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv) => notes.readNote(argv.title)
    
})
//edit note
yargs.command({
    command:"editNote",
    describe:"edit note",
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:"string"
        }        
    },
    handler:(argv) => notes.editNote(argv.title, argv.body)
    
})

// list note
yargs.command({
    command:'listNotes',
    describe:'note list',
    handler: () => notes.listNotes()
    
})
 
// remove note
yargs.command({
    command:"remove",
    describe:"remove note",
    builder:{
        title:{
            describe:"remove note",
            demandOption:true,
            type:'string'
        }
    },
    handler: argv => notes.removeNotes(argv.title)
    
})

yargs.parse()