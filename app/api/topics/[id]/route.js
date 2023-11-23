import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from 'next/server';

export async function PUT(request, {params}) {
    const {id} = params;
    const {newTitle: title, newDescription: description} = await request.json();
    await connectMongoDB;
    await Topic.findByIdAndUpdate(id, {title, description});
    return new Response({message: "Topic Updated Successfully"}, {status: 202});
}

export async function GET(request, {params}) {
    const {id} = params;
    await connectMongoDB;
    const singleTopic = await Topic.findOne({_id: id});
    return NextResponse.json(singleTopic);
}