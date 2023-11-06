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
                message: 'User already exists:',
            }, { status: 202 });

        } else {
            const newUserProgress = {
                username: usernameToCheck,
                lessons: 1,
                lessonprogress: {
                    module: 1,
                    lesson: 1,
                },
                levels: [
                    { name: 'Crypto', levelNumber: 1, percentage: 0, isLocked: false },
                    { name: 'Beginner', levelNumber: 2, percentage: 0, isLocked: true },
                    { name: 'Intermediate', levelNumber: 3, percentage: 0, isLocked: true },
                    { name: 'Advanced', levelNumber: 4, percentage: 0, isLocked: true },
                ]
            };

            const userProgress = await UserProgress.create(newUserProgress);
            return NextResponse.json({
                success: true, message: "User progress created",
                userProgress
            },
                { status: 200 });
        }
    } catch (error) {
        return NextResponse.json({
            message: error,
        },
            { status: 400 });
    }
};
// export const GET = async (req, res) => {
//     await dbConnect();
//     const usernameToCheck = req.nextUrl.searchParams.get('username');

//     UserProgress.findOne({ username: usernameToCheck })
//         .then(existingUser => {
//             if (existingUser) {
//               console.log('User already exists:')
//                 // if (!res.headersSent) {
//                 // return NextResponse.json({ message: 'User already exists:',
//                 // },{ status: 202 });
//                 // }
//             } else {
//                 const newUserProgress = {
//                     username: usernameToCheck,
//                     levels: [
//                         { name: 'Blockchain', levelNumber: 1, questionsCount: 12, percentage: 0, isLocked: false },
//                         { name: 'Crypto', levelNumber: 2, questionsCount: 10, percentage: 0, isLocked: true }
//                     ]
//                 };

//                 UserProgress.create(newUserProgress)
//                     .then(userProgress => {
//                        console.log('User progress created', userProgress)
//                         // if (!res.headersSent) {
//                         // return NextResponse.json({
//                         //     success: true, message: "User progress created",
//                         //     userProgress },
//                         //     { status: 200 });
//                         // }
//                     })
//                     .catch(error => {
//                        console.log(error)
//                         // if (!res.headersSent) {
//                         // return NextResponse.json({
//                         //    message: error, },
//                         //  { status: 400 });
//                         // }
//                     });
//             }
//         })
//         .catch(error => {
//           console.log(error)
//             // if (!res.headersSent) {
//             // return NextResponse.json({
//             // message: 'Error querying user progress:', error,},
//             // { status: 400 });
//             // }
//         });
// }


  // const password = req.nextUrl.searchParams.get('password');
    // // { $or: [{ from: req.query.keyword }, { to: req.query.keyword }] }
    // const validate = await signinUser.findOne({ email: email });

    // if (validate?._id) {
    //     if(validate?.password == password){
    //     return NextResponse.json({
    //         success: true, message: "Login Successfull",
    //         validate
    //     },
    //         {
    //             status: 200
    //     });
    // }else{
    //     return NextResponse.json({
    //         success: false, message: "Wrong Password",
    //     },
    //     {status: 405});
    // }
    // } else {
    //     return NextResponse.json({
    //         success: false, message: "User Not Found",
    //     },
    //         {
    //             status: 404
    //     });
// }
