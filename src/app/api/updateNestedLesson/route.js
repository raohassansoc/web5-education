import { NextResponse } from 'next/server';

import { UserProgress } from "../../../model/model";
import dbConnect from "../../../config/config";

export const GET = async (req, res) => {
    await dbConnect();
    let usernameToCheck = req.nextUrl.searchParams.get('username');
    let moduleValue = req.nextUrl.searchParams.get('module');
    let level = req.nextUrl.searchParams.get('level');

    try {
        const filter = { username: usernameToCheck};
        const update = {
            $set: {
                'lessonprogress.module': moduleValue,
                'lessonprogress.lesson': level,
            }
        };

        const existingUser = await UserProgress.findOneAndUpdate(filter, update, { new: true });
        if (existingUser) {
            return NextResponse.json({ message: 'User level updated', user: existingUser },
                { status: 200 });
        } else {
            return NextResponse.json({
                message: 'Data Not found',
            },{ status: 404 });
        }

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            error: error.message,
        },{ status: 400 });
    }
};

