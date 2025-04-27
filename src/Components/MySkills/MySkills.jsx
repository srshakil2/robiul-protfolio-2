import Container from "../../Hooks/Container";
import SectionTitle from "../../Hooks/SectionTitle/SectionTitle";

const MySkills = () => {
  const linkArr = [
    { link: "https://skillicons.dev/icons?i=html", name: "HTML" },
    { link: "https://skillicons.dev/icons?i=css", name: "CSS" },
    { link: "https://skillicons.dev/icons?i=tailwind", name: "Tailwind" },
    { link: "https://skillicons.dev/icons?i=materialui", name: "MaterialUi" },
    { link: "https://skillicons.dev/icons?i=js", name: "JavaScript" },
    { link: "https://skillicons.dev/icons?i=typescript", name: "TypeScript" },
    { link: "https://skillicons.dev/icons?i=react", name: "React" },
    { link: "https://skillicons.dev/icons?i=redux", name: "Redux" },
    { link: "https://skillicons.dev/icons?i=next", name: "NextJs" },

    { link: "https://skillicons.dev/icons?i=mongo", name: "MongoDB" },
    { link: "https://skillicons.dev/icons?i=nodejs", name: "NodeJs" },
    { link: "https://skillicons.dev/icons?i=express", name: "express js" },
    { link: "https://skillicons.dev/icons?i=firebase", name: "Firebase" },
  ];

  return (
    <div id="skills" className=" pt-10 pb-10 md:pb-28 mt-10">
      <SectionTitle title={"My Skills"}></SectionTitle>
      <Container>
        <div className="flex gap-5 md:gap-14 flex-wrap justify-center text-center text-sm md:text-base">
          {linkArr?.map((item, index) => (
            <div
              key={index}
              className="bg-[#2b303236] inline-block px-3 py-3  md:px-5 md:py-3 rounded-md shadow-xl transition-transform duration-300 transform hover:scale-110"
            >
              <img
                className="mx-auto pb-2"
                width="20px md:50px"
                src={item?.link}
                alt={item?.name}
              />
              <p className="font-medium">{item?.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MySkills;
