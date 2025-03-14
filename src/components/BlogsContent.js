import React from "react";
import profilePhoto from "../assets/githubprofile.png";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import {
  blockchain,
  aiml,
  security,
  greentech,
  webtechs,
  cloudcomputation,
} from "./index.js";

function BlogsContent() {
  let { id } = useParams(); // read the url id value
  // const blogs = {
  //   id: 1,
  //   title: "Blockchain Technologies Explorations",
  //   discription:
  //     " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis architecto dolorem cupiditate velit maxime consectetur maiores labore. Incidunt totam reprehenderit harum quae impedit dignissimos iure mollitia possimus similique animi. Saepe labore delectus veritatis quisquam alias ipsa autem similique voluptas quidem illum harum laboriosam reprehenderit voluptatem, sapiente iste iure doloribus quas.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis architecto dolorem cupiditate velit maxime consectetur maiores labore. Incidunt totam reprehenderit harum quae impedit dignissimos iure mollitia possimus similique animi. Saepe labore delectus veritatis quisquam alias ipsa autem similique voluptas quidem illum harum laboriosam reprehenderit voluptatem, sapiente iste iure doloribus quas.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis architecto dolorem cupiditate velit maxime consectetur maiores labore. Incidunt totam reprehenderit harum quae impedit dignissimos iure mollitia possimus similique animi. Saepe labore delectus veritatis quisquam alias ipsa autem similique voluptas quidem illum harum laboriosam reprehenderit voluptatem, sapiente iste iure doloribus quas. ",
  //   Data: "7th April, 2022",
  //   coverImg: photos,
  //   subTitle: "This blog content is test post blog",
  //   subDiscription:
  //     " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis architecto dolorem cupiditate velit maxime consectetur maiores labore. Incidunt totam reprehenderit harum quae impedit dignissimos iure mollitia possimus similique animi. Saepe labore delectus veritatis quisquam alias ipsa autem similique voluptas quidem illum harum laboriosam reprehenderit voluptatem, sapiente iste iure doloribus quas.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis architecto te velit maxime consectetur maiores labore. Incidunt totam reprehenderit harum quae impedit dignissimos iure mollitia possimus similique animi. Saepe labore delectus veritatis quisquam alias ipsa autem similique voluptas quidem illum harum laboriosam reprehenderit voluptatem, sapiente iste iure doloribus quas. ",

  //   autherName: "Pradeep Kumar",
  //   autherPhoto: profilePhoto,
  //   autherDesc: "Full-Stack Web Developer",
  // };
  const blogs = [
    {
      id: 1,
      title: "Blockchain Technologies Explorations",
      discription:
        "The world of blockchain is continuously evolving, offering groundbreaking solutions for secure and transparent digital interactions. From smart contracts to decentralized finance, blockchain technologies are set to redefine various industries. Explore the fascinating world of blockchain with insights on its current state and future potential.",
      Data: "7th April, 2022",
      coverImg: blockchain,

      subTitle:
        "This blog explores blockchain technology and its applications in different industries.",
      subDiscription:
        "Blockchain technology is no longer confined to cryptocurrencies. It is spreading across industries, ensuring secure, decentralized, and efficient operations. This blog delves into how blockchain is transforming various sectors, providing transparency, reducing fraud, and enhancing trust in systems. We explore use cases and future trends that make blockchain a game-changing innovation.",

      autherName: "Pradeep Kumar",
      autherPhoto: profilePhoto,
      autherDesc: "Full-Stack Web Developer",
    },
    {
      id: 2,
      title: "AI and Machine Learning: The Future of Technology",
      discription:
        "Artificial Intelligence (AI) and Machine Learning (ML) are transforming industries by automating tasks, improving decision-making, and enabling innovation. From healthcare to finance, AI and ML are revolutionizing how we live and work.",
      Data: "7th April, 2022",
      coverImg: aiml,
      subTitle:
        "Discover how AI and Machine Learning are shaping the future across various industries.",
      subDiscription:
        "AI and ML have seen rapid advancements in recent years. This blog explores how these technologies are being applied in real-world scenarios such as predictive analytics, personalized medicine, autonomous vehicles, and smart assistants. Learn how they contribute to solving complex problems and the ethical implications of their widespread adoption.",

      autherName: "Pradeep Kumar",
      autherPhoto: profilePhoto,
      autherDesc: "Full-Stack Web Developer",
    },
    {
      id: 3,
      title: "Web Development Trends in 2024: What to Expect",
      discription:
        "As the web continues to evolve, so do the tools and techniques that developers use to build engaging, user-friendly websites. In 2024, web development is being shaped by innovations like progressive web apps, AI-driven design, and serverless architectures.",
      Data: "7th April, 2022",
      coverImg: webtechs,
      subTitle:
        "Stay ahead with the top web development trends to watch for in 2024.",
      subDiscription:
        "From JavaScript frameworks like React and Next.js to the rise of AI-powered tools, web development is entering an exciting new phase. This blog looks into the emerging technologies and methodologies that will define the next generation of web applications, ensuring better performance, accessibility, and user experience.",

      autherName: "Pradeep Kumar",
      autherPhoto: profilePhoto,
      autherDesc: "Full-Stack Web Developer",
    },
    {
      id: 4,
      title: "The Power of Cloud Computing in Modern Business",
      discription:
        "Cloud computing has become the backbone of modern business operations, enabling scalable, flexible, and cost-effective infrastructure for organizations of all sizes. With cloud services like AWS, Google Cloud, and Microsoft Azure, companies can streamline processes, reduce operational costs, and enhance productivity by leveraging the power of remote servers.",
      Data: "7th April, 2022",
      coverImg: cloudcomputation,
      subTitle:
        "Explore how cloud computing is revolutionizing business operations in the digital age.",
      subDiscription:
        "The cloud is no longer just a storage solution; it’s the engine that powers innovation. Businesses are using cloud platforms to scale applications, integrate AI and machine learning models, and deploy solutions with agility. This blog dives into the major types of cloud services—Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS)—and highlights how each can address different business needs. Discover how cloud computing can enhance data security, improve collaboration, and foster global connectivity in ways traditional IT infrastructure cannot. We also explore how small startups and large enterprises alike are leveraging multi-cloud and hybrid cloud strategies to stay competitive in the digital-first world.",

      autherName: "Pradeep Kumar",
      autherPhoto: profilePhoto,
      autherDesc: "Full-Stack Web Developer",
    },
    {
      id: 5,
      title: "Cybersecurity in a Digital World: Challenges and Solutions",
      discription:
        "As more organizations move online, the risks of cyberattacks have dramatically increased. The rise of sophisticated hacking techniques, data breaches, and ransomware attacks have made cybersecurity a top priority for businesses worldwide. Protecting sensitive data and maintaining trust with customers is essential in this digital era.",
      Data: "7th April, 2022",
      coverImg: security,
      subTitle:
        "A comprehensive guide to the latest cybersecurity challenges and how to safeguard your business.",
      subDiscription:
        "In the face of rising cyber threats, organizations must take proactive measures to protect their digital assets. This blog examines the current cybersecurity landscape, highlighting common attack vectors such as phishing, malware, and insider threats. It also offers practical advice on implementing effective cybersecurity strategies, including multi-factor authentication (MFA), zero-trust network architecture, encryption, and AI-powered threat detection. Learn how to build a robust security culture within your organization by educating employees, enforcing strong password policies, and adopting the latest in firewall and antivirus solutions. Explore real-world case studies of companies that faced severe cyberattacks and learn what lessons can be drawn from their experiences to avoid potential risks in your business.",

      autherName: "Pradeep Kumar",
      autherPhoto: profilePhoto,
      autherDesc: "Full-Stack Web Developer",
    },
    {
      id: 6,
      title: "The Rise of Green Technologies: Sustainable Innovation",
      discription:
        "In the wake of climate change and environmental concerns, businesses and governments alike are turning to green technologies to drive sustainable development. From renewable energy sources to eco-friendly materials, innovation in green tech is reshaping industries, reducing carbon footprints, and creating new opportunities for a greener future.",
      Data: "7th April, 2022",
      coverImg: greentech,
      subTitle:
        "How green technology is driving sustainability and reshaping industries for the future.",
      subDiscription:
        "Green technology is at the heart of the sustainability revolution. This blog explores how companies are adopting solar, wind, and geothermal energy to power operations while reducing reliance on fossil fuels. Additionally, advancements in battery storage, electric vehicles (EVs), and energy-efficient manufacturing are making it easier for businesses to reduce their environmental impact. We discuss the role of technologies like blockchain in creating transparent supply chains, ensuring sustainable sourcing, and promoting recycling initiatives. Moreover, we examine the role of governmental policies and public-private partnerships in fostering the adoption of green technologies across various sectors, including agriculture, transportation, and construction. With climate change accelerating, the demand for sustainable solutions has never been higher, and the world is increasingly looking to tech innovators to provide answers.",

      autherName: "Pradeep Kumar",
      autherPhoto: profilePhoto,
      autherDesc: "Full-Stack Web Developer",
    },
  ];

  let blog = blogs.filter((val) => val.id === id); //filtering the content on the page based on the url id
  blog = blogs[id - 1];
  return (
    <div className="w-full pb-10 bg-[#f9f9f9] mt-[60px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 gap-x-8 gap-y-8 px-4 sm:pt-20 md:gap-8 sm:gap-y-8 md:mt-0 ss:pt-20 text-black">
          <div className="col-span-2 gap-x-8 gap-y-8">
            <img
              src={blog.coverImg}
              alt=""
              className="h-72 rounded-sm w-full object-cover"
            />
            <Link to="/" className="flex gap-1 pt-2">
              <IoIosArrowRoundBack className="h-8 w-7 text-blue-900" />
              <div className="bg-transparent text-blue-900 underline text-[18px]">
                Back
              </div>
            </Link>
            {/* inset date of blog */}
            <div className="ml-2 text-gray-700">
              <span className="text-black mr-3">Published :-</span>
              {blog.Data}
            </div>
            <h1 className="font-bold text-2xl my-1 pt-5">{blog.title}</h1>
            <div className="pt-5">{blog.discription}</div>

            <h1 className="font-bold text-xl my-1 pt-5">{blog.subTitle}</h1>
            <div className="pt-5">{blog.subDiscription}</div>
          </div>
          <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]">
            <div>
              <img
                src={blog.autherPhoto}
                alt=""
                className="p-2 w-32 h-32 rounded-full mx-auto object-cover"
              />
              <h1 className="font-bold text-2xl text-center text-gray-900 pt-3">
                Pradeep Kumar
              </h1>
              <p className="text-center text-gray-900 font-medium">
                I am a Full-Stack Web Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsContent;
