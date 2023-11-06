import { NextResponse } from 'next/server';

import { UserProgress } from "../../../model/model";
import dbConnect from "../../../config/config";

export const GET = async (req, res) => {
    await dbConnect();
    const usernameToCheck = req.nextUrl.searchParams.get('username');
    try {
        const existingUser = await UserProgress.findOne({ username: usernameToCheck });

        if (existingUser) {
            return NextResponse.json({
                existingUser
            },
            { status: 200 });

        } else {
            return NextResponse.json({
                message: 'User Not found',
                },
                { status: 404 });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({
        message: error,
        },
        { status: 400 });
    }
};

