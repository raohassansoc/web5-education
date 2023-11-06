import { NextResponse } from 'next/server';

import { signinUser } from "../../../model/model";
import dbConnect from "../../../config/config";


export const GET = async (req, res) => {
    await dbConnect();
    const email = req.nextUrl.searchParams.get('email');
    const password = req.nextUrl.searchParams.get('password');

    const validate = await signinUser.findOne({ email: email });
    if (validate?._id){
            return NextResponse.json({ success: false, message: "Email already exists" },
                {
                    status: 400
                });
        } else {
            try {
                let data = {
                    email: email,
                    password: password
                }
                const signin = new signinUser(data);
                await signin.save();
                return NextResponse.json({
                    success: true, message: "Registration Successful",
                    email, password
                }, {
                    status: 200
                });
            } catch (error) {
                console.log({ "error": error });
                return NextResponse.json({ "error": error },
                    {
                        status: 400
                    });
            }
        }

}