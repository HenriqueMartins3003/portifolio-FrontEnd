"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const formSchema = z.object({
  name: z
    .string()
    .min(3, "Nome para contato é obrigatório")
    .max(200)
    .transform((word) => {
      return word
        .trim() // metodo para deixar apenas a primeira letra do nome e sobrenome maiuscula.
        .split(" ")
        .map((name) => {
          return name[0].toLocaleUpperCase().concat(name.substring(1));
        })
        .join(" ");
    }),
  email: z
    .string()
    .min(1, "Email para contato é obrigatório")
    .max(200)
    .email("Formato de e-mail inválido!"),
  msgArea: z
    .string()
    .min(5, "Mensagem para contato com minimo de 10 caracteres é obrigatório")
    .max(500),
});

type contactFormData = z.infer<typeof formSchema>;

const Page = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<contactFormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: contactFormData) => {
    try {
      await axios.post("/Api/contact", data);

      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="flex flex-col max-w-xl bg-secondGray rounded-lg mx-auto">
      <div className="flex flex-col items-center justify-center my-10 mx-auto text-white max-w-lg">
        <h2 className="text-6xl font-lora max-w-lg">Entre em contato</h2>
        <p className="pt-3 px-3 max-w-md text-justify">
          Se você quiser saber mais sobre o meu trabalho ou tiver alguma dúvida,
          fique à vontade para me enviar um e-mail através do formulário abaixo.
          Estou aqui para ajudar! 📧
        </p>
      </div>

      <section className="flex flex-col items-center justify-center mx-auto gap-5 text-white">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mb-4 gap-4 max-w-lg"
        >
          <div className="flex flex-col">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              {...register("name")}
              className="rounded px-3 text-black h-8"
            />
            {errors.name && (
              <span className="text-errorRed text-sm  py-1">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              {...register("email")}
              className="rounded px-3 text-black h-8"
            />
            {errors.email && (
              <span className="text-errorRed text-sm py-1">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="msg">Mensagem:</label>
            <textarea
              id="msgArea"
              cols={50}
              rows={10}
              {...register("msgArea")}
              className="rounded px-3 text-black"
            />
            {errors.msgArea && (
              <span className="text-errorRed text-sm py-1">
                {errors.msgArea.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <input
              type="submit"
              value="Enviar"
              className="rounded px-3 py-2 font-lora bg-orange-600 opacity-80 text-white cursor-pointer hover:opacity-40"
            />
          </div>
        </form>
      </section>
    </section>
  );
};

export default Page;
