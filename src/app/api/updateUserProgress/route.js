import { NextResponse } from 'next/server';

import { UserProgress } from "../../../model/model";
import dbConnect from "../../../config/config";

export const GET = async (req, res) => {
    await dbConnect();
    const usernameToCheck = req.nextUrl.searchParams.get('username');
    const levelNumberToUpdate = req.nextUrl.searchParams.get('levelNumber');
    const newPercentage = req.nextUrl.searchParams.get('percentage');
    
    try {
        const filter = { username: usernameToCheck, 'levels.levelNumber': levelNumberToUpdate };
        const update = {
            $set: {
                'levels.$.isLocked': false,
                'levels.$.percentage': newPercentage
            }
        };

        const existingUser = await UserProgress.findOneAndUpdate(filter, update, { new: true });

        if (existingUser) {
            console.log('User level updated:', existingUser);
            return NextResponse.json({ message: 'User level updated', user: existingUser },
                { status: 202 });
        } else {
            return NextResponse.json({
                message: 'Level Not found',
            },
                { status: 404 });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            error: error.message,
        },
        { status: 400 });
    }


};

