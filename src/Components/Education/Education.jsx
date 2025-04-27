import SectionTitle from "../../Hooks/SectionTitle/SectionTitle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdCastForEducation } from "react-icons/md";

const Education = () => {
  return (
    <div id="education" className="mt-10 md:mt-0">
      <SectionTitle title={"Education & Experience"}></SectionTitle>

      <VerticalTimeline lineColor={"#70FF00"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid  #70FF00" }}
          date="2024 - present"
          dateClassName={"text-[#70FF00]"}
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#70FF00]">
            Frontend Developer
          </h3>

          <p>
            In 2024, I completed a web development course at Programming Hero.
            Over the last six months, I devoted significant time to research,
            enhancing my understanding of various technologies. This period has
            been particularly fruitful for my learning journey. Additionally,
            during this period I successfully completed my honors final year
            studies.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid  #70FF00" }}
          date="2023"
          dateClassName={"text-[#70FF00]"}
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#70FF00]">
            Self Learner
          </h3>

          <p>
            In 2023, I embarked on a challenging solo journey into web
            development. Progress was slow, but the experience proved
            invaluable. The turning point came when I started the Programming
            Hero course, where I found significant help and realized the
            effectiveness of structured learning.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid  #70FF00" }}
          date="2021 - 2022"
          dateClassName={"text-[#70FF00]"}
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#70FF00]">
            Story of my own business
          </h3>

          <p>
            From 2021 to 2022, I endeavored to build an online e-commerce
            business. However, while working on my own e-commerce site, I
            realized my experience was limited. Recognizing the need for more
            knowledge, I decided to pause the business. Despite the challenges,
            the experience provided valuable insights that contribute to my
            growth.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid  #70FF00" }}
          date="2018 - 2019 to present"
          dateClassName={"text-[#70FF00]"}
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#70FF00]">
            I studied at National University.
          </h3>

          <p>
            In 2018-2019 I got admitted in Government Bangla College and in 2024
            I took the final year exam of Honors. And now I am waiting for the
            result of Honors exam. I hope I will get a good result.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Education;
