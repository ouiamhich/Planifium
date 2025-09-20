import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    // password: { type: String, required: true },
    profilePicture: { type: String, required: false },
    // createdAt: { type: Date, default: Date.now },
    clerkUserId: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, required: true, default: false },
    isActive: { type: Boolean, required: true, default: true },
}, { timestamps: true });

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);

export default UserModel;
