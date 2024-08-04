import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(req) {
    const formData = await req.formData();

    const file = formData.get("file");
    if (!file) {
        return NextResponse.json(
            { error: "File blob is required." },
            { status: 400 }
        );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    try {
        const uniqueSuffix = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;
        const originalFilename = file.name.replace(/\.[^/.]+$/, "");
        const sanitizedFilename = originalFilename.replace(/[^a-zA-Z0-9_\u0600-\u06FF.]/g, "_");
        const filename = `${sanitizedFilename}_${uniqueSuffix}`;
        
        // Upload to Cloudinary
        const uploadResponse = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { public_id: filename },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            );
            uploadStream.end(buffer);
        });

        const finalFilePath = uploadResponse.secure_url;
        return NextResponse.json({ done: "ok", filename, url: finalFilePath }, { status: 200 });
    } catch (e) {
        console.error("Error while trying to upload a file\n", e);
        return NextResponse.json(
            { error: "Something went wrong." },
            { status: 500 }
        );
    }
}