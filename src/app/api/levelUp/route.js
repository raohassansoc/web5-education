import { NextResponse } from 'next/server';

import { UserProgress } from "../../../model/model";
import dbConnect from "../../../config/config";

export const GET = async (req, res) => {
    await dbConnect();
    const username = req.nextUrl.searchParams.get('username');
    const lessonNumber = req.nextUrl.searchParams.get('levelNumber');

    try {
        const userProgress = await UserProgress.findOneAndUpdate(
            { username },
            { $set: { lessons: lessonNumber } },
            { new: true }
        );

        if (!userProgress) {
            return NextResponse.json({
                message: 'Level Not found',
            },
                { status: 404 });
        }

        return NextResponse.json({ message: 'User level updated' },
            { status: 200 });
    } catch (error) {
        return NextResponse.json({
            error: error,
        },
            { status: 500 });
    }

};

