import { ConnectToDB } from "../../../../utils/database";
import { Contact } from "../../../../models/Contact";

export async function POST (req){
    const body = await req.json()
    try {
        await ConnectToDB();
        const contact = await Contact.create(body)
        console.log('Posted Successfully')
        return Response.json(contact)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

