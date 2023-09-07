import mongoose, { Schema } from "mongoose";

const ChatSchema = new Schema(
  {
    content: { type: String, required: true },
    sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
    room: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Chat || mongoose.model("Chat", ChatSchema);
