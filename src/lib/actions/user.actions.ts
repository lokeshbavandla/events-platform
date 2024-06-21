'use server'

import { CreateUserParams, UpdateUserParams } from "@/types";
import { handleError } from "../utils";
import dbConnect from "@/db";
import User from "@/models/user.model";
import Event from "@/models/event.model";
import Order from "@/models/order.model";
import { revalidatePath } from "next/cache";

export async function createUser(user: CreateUserParams){
    try {

        await dbConnect();

        const newUser = await User.create(user);
        if(!newUser) throw new Error('User Not Found')
        return JSON.parse(JSON.stringify(newUser));
        
    } catch (error) {
        handleError(error);
    }
}

export async function updateUser(clerkId:String, user:UpdateUserParams){
    try {

        await dbConnect();

        const updatedUser = await User.findOneAndUpdate({clerkId}, user, {new: true});
        if(!updatedUser) throw new Error('User update failed')
        return JSON.parse(JSON.stringify(updateUser));
        
    } catch (error) {
        handleError(error);
    }
}

export async function deleteUser(clerkId:String){
    try {

        await dbConnect();

        const userToDelete = await User.findOne({clerkId});

        if(!userToDelete) throw new Error('User Not Found');

        await Promise.all([
            Event.updateMany(
                {_id: {$in: userToDelete.events}},
                {$pull: {organizer: userToDelete._id}}
            ),

            Order.updateMany(
                {_id: {$in: userToDelete.orders}},
                {$unset: {buyer: 1}}
            )
        ])

        const deletedUser = await User.findByIdAndDelete(userToDelete._id);
        revalidatePath('/');

        return deletedUser ? JSON.parse(JSON.stringify(deleteUser)) : null;
        
    } catch (error) {
        handleError(error);
    }
} 