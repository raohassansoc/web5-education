import { NextResponse } from 'next/server';
import { Question } from '../../../model/model';
import dbConnect from "../../../config/config";

export const POST = async (req, res) => {
    await dbConnect();

    try {
        const data = await req.json();

        const subject = data.subject;
        const question = data.question;
        const options = data.options;
        const correctAnswer = data.correctAnswer;

        const newQuestion = new Question({
            subject,
            question,
            options,
            correctAnswer
        });

        await newQuestion.save();

        return NextResponse.json({
            message: 'Question inserted successfully'
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'Error inserting question', error: error.message
        }, { status: 500 });
    }
};
