import { certifications } from "@/data";
import { PinContainer } from "./ui/3d-pin";

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">Certifications</span>
      </h1>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-48 gap-y-48 p-48">
        {certifications.map(({ id, title, org, credential_ID, link }) => (
          <div
            key={id}
           className="flex h-[10rem] w-[10vw] items-center justify-center sm:w-[400px]shadow-[0_0_50px_rgba(139,92,246,0.2)]
  hover:shadow-[0_0_80px_rgba(139,92,246,0.35)]
  transition duration-300"
          >
            <PinContainer title="Verify" href={link}>
              <div className="flex flex-col justify-between p-5 text-left h-full 
bg-[#13162d] rounded-2xl border border-white/[0.08]
           ">

                <div>
                  <h1 className="text-lg font-bold md:text-xl">
                    {title}
                  </h1>

                  <p className="mt-1 text-sm text-gray-400">
                    {org}
                  </p>

                  <p className="mt-2 text-xs text-gray-500 break-all">
                    Credential ID: {credential_ID}
                  </p>
                </div>

                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm text-purple hover:underline"
                >
                  View Certificate →
                </a>

              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};