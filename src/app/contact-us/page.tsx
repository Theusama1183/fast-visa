import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactUs() {
  return (
    <>
      <section className="pt-10 md:pt-24 md:px-0 px-4 py-10 md:py-24 ">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center">
            Dejanos tu mensaje!
          </h2>
          <p className="text-2xl text-center mt-5">
            Podes rellenar el siguiente formulario o ver más formas de <br />{" "}
            contacto abajo. Te responderemos en 30 minutos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-5 md:gap-20 mt-10">
            <div className="flex flex-col justify-center items-start">
              <div className="form w-full ">
                <form>
                  <div className="input-group">
                    <div className="label mt-3">
                      <label htmlFor="name">Nombre</label>
                    </div>
                    <input
                      type="text"
                      title="name"
                      name="name"
                      className="form-input border px-1 py-2 mt-2 md:w-96 w-full rounded-md"
                    />
                  </div>
                  <div className="input-group">
                    <div className="label mt-3">
                      <label htmlFor="whatsapp_or_email">
                        WhatsApp o Email
                      </label>
                    </div>
                    <input
                      type="text"
                      title="name"
                      name="whatsapp_or_email"
                      className="form-input border px-1 py-2 mt-2 md:w-96 w-full rounded-md"
                    />
                  </div>
                  <div className="input-group">
                    <div className="label mt-3">
                      <label htmlFor="Mensaje">Mensaje</label>
                    </div>
                    <textarea
                      name="Mensaje"
                      id="Mensaje"
                      className="form-input border px-1 py-2 mt-2 w-full rounded-md"
                      cols={30}
                      rows={5}
                    ></textarea>
                  </div>
                  <div className="btn-container text-right">
                    <button className="py-2 px-16 bg-black text-white rounded-md">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="map">
              <Image
                src={"/Rectangle154.png"}
                alt=""
                width={400}
                height={400}
                className="w-full"
              ></Image>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-Group6498 py-24">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-4xl font-bold text-white">
            ¿Tenés dudas? Contactános
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-5 md:gap-20">
            <div className="flex flex-col justify-center items-start ">
              <div className="flex items-center py-5">
                <div className="ico">
                  <Image
                    src={"/Email.png"}
                    alt=""
                    width={100}
                    height={90}
                    className="w-10 md:w-24"
                  ></Image>
                </div>
                <div className="text-white ml-5 ">
                  <h4 className="text-2xl font-bold">Email</h4>
                  <p className="text-xl mt-2">contacto@myfastvisa.com</p>
                </div>
              </div>
              <div className="flex items-center py-5 border-y w-full">
                <div className="ico">
                  <Image
                    src={"/Call.png"}
                    alt=""
                    width={100}
                    height={90}
                    className="w-10 md:w-24"
                  ></Image>
                </div>
                <div className="text-white ml-5 ">
                  <h4 className="text-2xl font-bold">WhatsApp</h4>
                  <p className="text-xl mt-2">+54 2214477897</p>
                </div>
              </div>
              <div className="flex items-center py-5">
                <div className="ico">
                  <Image
                    src={"/Location.png"}
                    alt=""
                    width={100}
                    height={90}
                    className="w-10 md:w-24"
                  ></Image>
                </div>
                <div className="text-white ml-5 ">
                  <h4 className="text-2xl font-bold">Oficina</h4>
                  <p className="text-xl mt-2">
                    La Plata (oficina central) y Palermo.
                    <br />
                    La dirección se proporciona con cita previa.
                  </p>
                </div>
              </div>
            </div>
            <div className="map">
              <Image
                src={"/map-image.png"}
                alt=""
                width={723}
                height={604}
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
