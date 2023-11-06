// api/questions.js
import { NextResponse } from 'next/server';
import { Question } from '../../../model/model';
import dbConnect from "../../../config/config";

export const GET = async (req, res) => {
    await dbConnect();
    const subject = req.nextUrl.searchParams.get('subject');
    try {
        const questions = await Question.find({ subject });
        return NextResponse.json({
            questions
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'Error fetching questions', error: error.message
        }, { status: 500 });
    }
};
