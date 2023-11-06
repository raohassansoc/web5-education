import { NextResponse } from 'next/server';
import { Courses } from '../../../model/model'; 
import dbConnect from '../../../config/config';

export const POST = async (req, res) => {
  await dbConnect();

  try {
    const data = await req.json();

    const title = data.title;
    const content = data.content;
    const lessons = data.lessons;

    const newCourse = new Courses({
      title,
      content,
      lessons,
    });

    await newCourse.save();

    return NextResponse.json({
      message: 'Course inserted successfully',
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: 'Error inserting course',
      error: error.message,
    }, { status: 500 });
  }
};
