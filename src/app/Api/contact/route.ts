import axios from "axios";
import { NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  msgArea: z.string(),
});

const WEBHOOK_URL = process.env.WEBHOOK_URL!;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, msgArea } = bodySchema.parse(body);
    const messageData = {
      embeds: [
        {
          title: `Mensagem de contato`,
          description: "Mensagem de contato do meu site de portifolio.",
          color: 0xdb4306,
          fields: [
            {
              name: `Name`,
              value: name,
              inline: true,
            },
            {
              name: `email`,
              value: email,
              inline: true,
            },
            {
              name: `msgArea`,
              value: msgArea,
            },
          ],
        },
      ],
    };

    await axios.post(WEBHOOK_URL, messageData);

    return NextResponse.json({ message: "Mensagem enviada com sucesso!" });
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
