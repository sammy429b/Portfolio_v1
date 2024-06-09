import { MessageModel, UserModel } from "../models/User.model";

export const createUser = async (name: string, email: string) => {
  try {
    const user = new UserModel({ name, email });
    await user.save();
    console.log('User created:', user);
    return user; // Return the created user
  } catch (error) {
    console.error('Error creating user:', error);
    throw error; // Throw the error to be handled by the caller
  }
};

export const createMessage = async (email: string, content: any) => {
  try {
    const message = new MessageModel({ content });
    await message.save();

    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    user.messages.push(message._id);
    await user.save();

    console.log('Message created and associated with user:', message);
  } catch (error) {
    console.error('Error creating message:', error);
    throw error; // Throw the error to be handled by the caller
  }
};
