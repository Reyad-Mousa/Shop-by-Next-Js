import Image from "next/image";

const dataForm = [
  {
    id: "Name",
    Name: "Name",
    type: "text",
    placeholder: "Name",
  },

  {
    Name: "Email",
    type: "email",
    id: "Email",
    placeholder: "Email",
  },
  {
    Name: "Message",
    type: "text",
    id: "Message",
    placeholder: "Message",
  },
];
const dataContact = [
  {
    Image: "/images/icons/phone-call.png",
    title: "Technical support",
    email: "support@example.com",
    number: "+1 123 456 7890",
  },
  {
    Image: "/images/icons/money.png",
    title: "Sales questions",
    email: "sales@example.com",
    number: "+1 123 456 7890",
  },
  {
    Image: "/images/icons/press-release.png",
    title: "Press",
    email: "press@example.com",
    number: "+1 123 456 7890",
  },
  {
    Image: "/images/icons/bug.png",
    title: "Bug report",
    email: "bug@example.com",
    number: "+1 123 456 7890",
  },
];
function contact() {
  return (
    <div className="container my-12 mx-auto ">
      <section className="mb-32 ">
        <div className="flex justify-center ">
          <div className="text-center md:max-w-xl lg:max-w-3xl">
            <h2 className="mb-12 px-6 text-3xl font-bold">Contact us</h2>
          </div>
        </div>

        <div className="flex flex-wrap items-center">
          <form className="mb-12 w-full sm:w-1/2 shrink-0 grow-0 basis-auto md:px-3 lg:mb-0  p-6 lg:px-6">
            {dataForm.map((data) => (
              <div key={data.Name} className="mb-3 w-full">
                <label
                  className="block font-medium mb-[2px] text-purple-700"
                  htmlFor={data.id}
                >
                  {data.Name}
                </label>
                <input
                  type={data.type}
                  className="px-2 py-2 border w-full outline-none rounded-md"
                  id={data.id}
                  placeholder={data.placeholder}
                />
              </div>
            ))}
            <button
              type="button"
              className="mb-6 inline-block w-full rounded bg-purple-700 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500"
            >
              Send
            </button>
          </form>

          <div className="w-1/2 shrink-0 grow-0 basis-auto sm:flex justify-end hidden">
            <Image
              src="/images/contact.png"
              priority
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>

        <div className="flex flex-wrap">
          {dataContact.map((data) => (
            <div
              key={data.title}
              className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12  flex justify-center"
            >
              <div className="flex items-start w-full md:w-full p-6">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-teal-400-100 p-4 bg-purple-700">
                    <Image
                      src={data.Image}
                      width={50}
                      height={50}
                      alt="Picture of the author"
                    />
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold">{data.title}</p>
                  <p className="text-neutral-500 ">{data.email}</p>
                  <p className="text-neutral-500 ">{data.number}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default contact;
