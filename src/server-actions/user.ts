import UserModel from "@/models/user-model";
import { currentUser } from "@clerk/nextjs/server";

export const saveCurrentUser = async () => {
    try {
        const clerkUser = await currentUser();

        if (!clerkUser) throw new Error("No Clerk user found");

        const existingUser = await UserModel.findOne({ clerkUserId: clerkUser.id });
        if (existingUser) {
            return {
                success: true,
                message: "User already exists",
                data: JSON.parse(JSON.stringify(existingUser))
            };
        }

        const userPayload = {
            name: clerkUser.fullName,
            email: clerkUser.emailAddresses[0]?.emailAddress,
            profilePicture: clerkUser.hasImage ? clerkUser.imageUrl : null,
            clerkUserId: clerkUser.id,
            isAdmin: false,
            isActive: true,
        };

        const user = new UserModel(userPayload);
        const savedUser = await user.save();

        return {
            success: true,
            message: "User saved successfully",
            data: JSON.parse(JSON.stringify(savedUser))
        };
    } catch (error: any) {
        return {
            success: false,
            message: error.message
        };
    }
}