const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    creator: { type: Schema.Types.ObjectId, ref: 'User' 
    },
    title: {
      type: String,
      required: [true, "A title is required"],
    },
    description: {
      type: String,
      required: [true, "You can't send an empty post"],
    },
    category: {
      type: String,
      required: [true, "You must select a category."],
      enum: ['Mindfulness', 'Finances', 'Health', 'Tech', 'Self Confidence']
    },
    type: {
        type: String,
        required: [true, "You must select a type of post"],
        enum: ['Meeting', 'Knowledge']
    },
    created: {
        type: Date,
        default: Date.now
    },
    upvotes: {
        type: Number
    },
    downvotes: {
        type: Number
    },
    commentsId: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;