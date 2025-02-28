const mongoose = require("mongoose")

// Require the models
const User = require("../models/User.model")
const Post = require("../models/Post.model")
const Comment = require("../models/Comment.model")

const MONGO_URI = "mongodb://localhost:27017/project3"

//User seeds
const post = [
   {
      creator: {}, //we need user Ids first
      title: "How I improved my self-confidence through reading",
      description: "Lorem ipsum",
      categories: ['Self Confidence'],
      type: 'Knowledge',
      upvotes: 0,
      downvotes: 0,
      commentsId: []
   },
   {
      creator: {}, //we need user Ids first
      title: "Learn how to save money more efficiently",
      description: "Lorem ipsum",
      categories: ['Finances'],
      type: 'Knowledge',
      upvotes: 0,
      downvotes: 0,
      commentsId: []
   },
   {
      creator: {}, //we need user Ids first
      title: "Climbing and living in the present",
      description: "Lorem ipsum",
      categories: ['Health', 'Mindfulness'],
      type: 'Knowledge',
      upvotes: 0,
      downvotes: 0,
      commentsId: []
   },
   {
      creator: {}, //we need user Ids first
      title: "Coding Meeting at SandwicheZ",
      description: "Lorem ipsum",
      categories: ['Tech'],
      type: 'Meeting',
      upvotes: 0,
      downvotes: 0,
      commentsId: []
   },
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
