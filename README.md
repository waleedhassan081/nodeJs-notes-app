Note is a node js application. It's used to store notes as a json object in a system file called notes.json.
Run this project use the following command
npm i

Notes will be added by command line and in this project we are using yargs npm package.

# Add Notes 

node app.js add --title="My Note Title" --body="Explain your notes in details here"

# Read Note

node app.js readNote --title="My Note Title"

# Edit Note

node app.js editNote --title="My Note Title" --body="Update Note body"

# List Note

node app.js listNotes

# Remove Note

node app.js remove --title="My Note Title"

In this project I am also using chalk package to display the messages and notes in a fency colored way.