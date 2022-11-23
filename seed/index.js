const mongoose = require("mongoose")

// Require the models
const User = require("../models/User.model")
const Post = require("../models/Post.model")
const Comment = require("../models/Comment.model")

const MONGO_URI = "mongodb://localhost:27017/project3"

//User seeds
const post = [
   {
      creator: {},
      title: "How I improved my self-confidence through reading",
      description: "Lorem ipsum",
      category: ['Self Confidence'],
      type: ['Knowledge'],
      created: Date.now,
      upvotes: 0,
      downvotes: 0,
      commentsId: []
   }
]


const createSeeds = async function () {
   try {
      const connect = await mongoose.connect(MONGO_URI)
      console.log(`Connected to database: ${connect.connections[0].name}`)

      // Clear DB,  Example: (-- const deleteAll = await Book.deleteMany() --)
      // console.log("Db clean")

      const dbClose = await mongoose.connection.close()
      console.log("Seeds created")
   } catch (err) {
      console.log(`Error creating the seeds: ${err}`)
   }
}

createSeeds()
