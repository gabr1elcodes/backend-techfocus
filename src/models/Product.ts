import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price?: number;
  content?: any;
  user: mongoose.Schema.Types.ObjectId;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number },
  content: { type: Object }, 
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

export default mongoose.model<IProduct>("Product", ProductSchema);