/* eslint-disable react/no-unescaped-entities */
import Container from "../../Hooks/Container";
import SectionTitle from "../../Hooks/SectionTitle/SectionTitle";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Projects.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Projects = () => {
  return (
    <div id="projects">
      <SectionTitle title={"Projects"}></SectionTitle>
      <Container>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
            {/* Project 1 */}
            <SwiperSlide>
              <div className="card  shadow-md hover:shadow-xl text-center md:text-left cursor-grab">
                <div className="flex flex-col md:flex-row">
                  <figure>
                    <img src={project1} alt="Project" />
                  </figure>
                  <div className="card-body">
                    <h2 className=" font-bold text-2xl  text-[#70FF00]">
                      Education Management
                    </h2>
                    <p className="mt-3 text-[#828282]">
                      Mobile friendly education management system website. The
                      website allows for student admission, teacher recruitment
                      and admin access. After each successful action, sweet
                      alerts are provided to the user. The website can be
                      controlled by position.
                    </p>

                    <div className="flex gap-1 justify-center md:justify-start my-2">
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"
                          alt="HTML"
                          title="HTML"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
                          alt="CSS"
                          title="CSS"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png"
                          alt="Firebase"
                          title="Firebase"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
                          alt="JavaScript"
                          title="JavaScript"
                        />
                      </code>
                      <code>
                        <img
                          width="20"
                          src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
                          alt="React"
                          title="React"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"
                          alt="Node.js"
                          title="Node.js"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png"
                          alt="Express"
                          title="Express"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png"
                          alt="mongoDB"
                          title="mongoDB"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/189716630-fe6c084c-6c66-43af-aa49-64c8aea4a5c2.png"
                          alt="Material UI"
                          title="Material UI"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://www.vectorlogo.zone/logos/axios/axios-ar21.svg"
                          alt="HTML"
                          title="HTML"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png"
                          alt="Tailwind CSS"
                          title="Tailwind CSS"
                        />
                      </code>
                    </div>

                    <div className="card-actions justify-center md:justify-start mt-5">
                      <NavLink
                        to={"https://education-manegment.web.app/"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-sm  btn-outline text-[#70FF00] border-white">
                          Demo
                        </button>
                      </NavLink>

                      <NavLink
                        to={
                          "https://github.com/srshakil2/assignment-12-final-Education-managment-client-site?tab=readme-ov-file"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-sm  btn-outline text-[#70FF00] border-white">
                          Client Code
                        </button>
                      </NavLink>

                      <NavLink
                        to={
                          "https://github.com/srshakil2/assignment-12-final-Education-managment-server-site"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-sm  btn-outline text-[#70FF00] border-white">
                          Server Code
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Project 2 */}
            <SwiperSlide>
              {" "}
              <div className="card shadow-md hover:shadow-xl text-center md:text-left cursor-grab">
                <div className="flex flex-col md:flex-row">
                  <figure>
                    <img src={project2} alt="Project" />
                  </figure>
                  <div className="card-body">
                    <h2 className=" font-bold text-2xl text-[#70FF00]">
                      Marathon Play
                    </h2>
                    <p className="mt-3 text-[#828282]">
                      You can participate in marathon games from the website.
                      You can also create marathons from the website. After each
                      successful action, the user is given their own alert. The
                      website is beautifully designed and mobile friendly.
                    </p>

                    <div className="flex gap-1 justify-center md:justify-start my-2">
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"
                          alt="HTML"
                          title="HTML"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
                          alt="CSS"
                          title="CSS"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png"
                          alt="Firebase"
                          title="Firebase"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
                          alt="JavaScript"
                          title="JavaScript"
                        />
                      </code>
                      <code>
                        <img
                          width="20"
                          src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
                          alt="React"
                          title="React"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"
                          alt="Node.js"
                          title="Node.js"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png"
                          alt="Express"
                          title="Express"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png"
                          alt="mongoDB"
                          title="mongoDB"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://www.vectorlogo.zone/logos/axios/axios-ar21.svg"
                          alt="HTML"
                          title="HTML"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png"
                          alt="Tailwind CSS"
                          title="Tailwind CSS"
                        />
                      </code>
                    </div>

                    <div className="card-actions justify-center md:justify-start mt-5">
                      <NavLink
                        to={"https://merathon-client-side.web.app/"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-sm  btn-outline text-[#70FF00] border-white">
                          Demo
                        </button>
                      </NavLink>

                      <NavLink
                        to={
                          "https://github.com/srshakil2/assignment-11-merathon-client-site?tab=readme-ov-file"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-sm  btn-outline text-[#70FF00] border-white">
                          Client Code
                        </button>
                      </NavLink>

                      <NavLink
                        to={
                          "https://github.com/srshakil2/assignment-11-merathon-server-site"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-sm  btn-outline text-[#70FF00] border-white">
                          Server Code
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Project 3 */}
            <SwiperSlide>
              <div className="card  shadow-md hover:shadow-xl text-center md:text-left cursor-grab">
                <div className="flex flex-col md:flex-row">
                  <figure>
                    <img src={project3} alt="Project" />
                  </figure>
                  <div className="card-body">
                    <h2 className=" font-bold text-2xl  text-[#70FF00]">
                      Donation Campaign
                    </h2>
                    <p className="mt-3 text-[#828282]">
                      This website runs various types of donation campaigns
                      among the public. If the user wants, he can donate to any
                      helpless person from the website and can add any campaign.
                      Where others can donate. After every successful action,
                      the user is given a sweet alert and the website is mobile
                      friendly.
                    </p>

                    <div className="flex gap-1 justify-center md:justify-start my-2">
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"
                          alt="HTML"
                          title="HTML"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
                          alt="CSS"
                          title="CSS"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png"
                          alt="Firebase"
                          title="Firebase"
                        />
                      </code>
                      <code>
                        <img
                          width="20"
                          src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
                          alt="React"
                          title="React"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
                          alt="JavaScript"
                          title="JavaScript"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"
                          alt="Node.js"
                          title="Node.js"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png"
                          alt="Express"
                          title="Express"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png"
                          alt="mongoDB"
                          title="mongoDB"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://www.vectorlogo.zone/logos/axios/axios-ar21.svg"
                          alt="HTML"
                          title="HTML"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png"
                          alt="Tailwind CSS"
                          title="Tailwind CSS"
                        />
                      </code>
                    </div>

                    <div className="card-actions justify-center md:justify-start mt-5">
                      <NavLink
                        to={"https://crowdcube-assignment-10.web.app/"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-sm  btn-outline text-[#70FF00] border-white">
                          Demo
                        </button>
                      </NavLink>

                      <NavLink
                        to={
                          "https://github.com/srshakil2/assignment-10-crowdcube-client-site?tab=readme-ov-file"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-sm  btn-outline text-[#70FF00] border-white">
                          Client Code
                        </button>
                      </NavLink>

                      <NavLink
                        to={
                          "https://github.com/srshakil2/assignment-10-crowdcube-server-site"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-sm  btn-outline text-[#70FF00] border-white">
                          Server Code
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default Projects;
