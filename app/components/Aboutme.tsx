import { AboutMe } from "@/data"

const Aboutme = () => {
  return (
    <div id="about" className=" flex flex-col gap-3 w-full p-4 h-full">
        <div className=" font-Hind heading">
            About <span className="text-purple">Me</span>
        </div>
        <div id="photo" className=" flex items-center justify-center mt-2">
            <img src="/myPhoto.jpg" alt="" className=" lg:h-72 lg:w-72 md:h-52 md:w-52 h-40 w-40 flex items-center justify-center object-cover rounded-full bg-gray-200" />
        </div>
        <div className=" lg:text-5xl font-Hind md:text-3xl text-2xl flex items-center justify-center">
            Vishwas Chauhan
        </div>
        <div id="aboutMe" className=" text-center flex-1 items-center justify-center  lg:text-xl md:text-lg font-Hind">
        {/* Motivated and detail-oriented B.Tech Computer Science student with a strong foundation in coding languages, frameworks, and problem-solving. Possesses excellent communication skills and a keen interest in software development, ethical hacking, networking, and mobile application development. */}
        Hey there! I&apos;m Vishwas, a 3rd-year B.Tech Computer Science student at Parul University (Vadodara, India) on the hunt for a web development job. Coding is my jam, and I&apos;m especially stoked about React, Angular, Next.js, and Node.js. While I can whip up a sleek front-end, my true passion lies in tackling back-end challenges with Express.js -  give me a problem and I&apos;ll solve it in no time!
        </div>
    </div>
  )
}

export default Aboutme