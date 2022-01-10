const{MongoClient} = require("mongodb");
const connectionStr = "mongodb://localhost:27017/comp3006.projects"

async function start() {
    const client = new MongoClient(connectionStr);
    await client.connect();
    const projects = await (client.db("comp3006").collection("projects").find()).toArray();
    console.log(projects);
}

start()