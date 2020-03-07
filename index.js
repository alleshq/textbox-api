//Express
const express = require("express");
const app = express();

//Database
const db = require("./util/db");
db.sync({force: true}).then(() => {
    db.Document.create({
        id: "c0b22c8f-c91e-468e-97c2-eb194b4954ee",
        code: "69abwj",
        user: "00000000-0000-0000-0000-000000000000",
        name: "Hello World",
        content:
`hello world. this is the first document on textbox.
\`\`\`js
alert("hi");
window.location.href = "https://abaer.dev";
doThing(true, null);
\`\`\``,
        markdown: false,
        highlight: true
    });
    //Express Listen
    app.listen(8081, async () => {
        console.log("Listening on Express");
    });
});

//Body Parser
const bodyParser = require("body-parser");
app.use(bodyParser.json({extended: false}));

//Internal Error Handling
app.use((err, req, res, next) => {
    res.status(500).json({err: "internalError"});
});

//API
app.use("/api/v1", require("./api/v1/_"));

//404
app.use((req, res) => {
    res.status(404).json({err: "invalidRoute"});
});