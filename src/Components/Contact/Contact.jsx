import SectionTitle from "../../Hooks/SectionTitle/SectionTitle";
import Container from "../../Hooks/Container";
import Swal from "sweetalert2";
import LottieAnimation from "../LottieAnimation/LottieAnimation";

const ContactForm = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const formsData = e.target;
    const name = formsData.name.value;
    const email = formsData.email.value;
    const massage = formsData.message.value;

    const data = {
      name: name,
      email: email,
      massage: massage,
    };
    // Todo: send this data in server is ready
    console.log(data);
  };
  // if (state.succeeded && !state.submitting) {
  //   Swal.fire({
  //     title: "Thanks for your feedback!",
  //     text: "I will contact you in a little while, give me some time.",
  //     icon: "success",
  //   });
  //   // Wait for the resetForm Promise to resolve
  //   const form = document.getElementById("yourFormId");

  //   if (form) {
  //     form.reset();
  //   }
  // }

  return (
    <Container>
      <div id="contact" className="mb-20">
        <SectionTitle title={"Contact Me"}></SectionTitle>
        <div className="flex  flex-col-reverse md:flex-row-reverse  justify-between  text-[#F2F2F2] items-center gap-10 ">
          <div className="w-full md:w-1/2">
            <form onSubmit={(e) => handelSubmit(e)}>
              <div className="flex gap-5 justify-between items-center h-auto">
                <div className="w-1/2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="mt-1 p-2 bg-transparent border-b rounded-md w-full"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="mt-1 p-2 border-b bg-transparent rounded-md w-full"
                  />
                </div>
              </div>

              <div className="mt-10">
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  className="mt-1 pt-5 pl-2 border-b bg-transparent rounded-md w-full"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn hover:bg-transparent w-full mt-4 font-bold bg-transparent text-[#70FF00] flex items-center gap-3 border-2  px-3 rounded-md"
              >
                Send
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2">
            <LottieAnimation />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactForm;
