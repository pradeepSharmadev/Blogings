import React from "react";
import photos from "../assets/images.jpeg";
import profilePhoto from "../assets/githubprofile.png";

function BlogsContent() {
  const blogs = {
    id: 1,
    title: "Blockchain Technologies Explorations",
    discription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis architecto dolorem cupiditate velit maxime consectetur maiores labore. Incidunt totam reprehenderit harum quae impedit dignissimos iure mollitia possimus similique animi. Saepe labore delectus veritatis quisquam alias ipsa autem similique voluptas quidem illum harum laboriosam reprehenderit voluptatem, sapiente iste iure doloribus quas.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis architecto dolorem cupiditate velit maxime consectetur maiores labore. Incidunt totam reprehenderit harum quae impedit dignissimos iure mollitia possimus similique animi. Saepe labore delectus veritatis quisquam alias ipsa autem similique voluptas quidem illum harum laboriosam reprehenderit voluptatem, sapiente iste iure doloribus quas.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis architecto dolorem cupiditate velit maxime consectetur maiores labore. Incidunt totam reprehenderit harum quae impedit dignissimos iure mollitia possimus similique animi. Saepe labore delectus veritatis quisquam alias ipsa autem similique voluptas quidem illum harum laboriosam reprehenderit voluptatem, sapiente iste iure doloribus quas. ",
    Data: "7th April, 2022",
    coverImg: photos,
    subTitle: "This blog content is test post blog",
    subDiscription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis architecto dolorem cupiditate velit maxime consectetur maiores labore. Incidunt totam reprehenderit harum quae impedit dignissimos iure mollitia possimus similique animi. Saepe labore delectus veritatis quisquam alias ipsa autem similique voluptas quidem illum harum laboriosam reprehenderit voluptatem, sapiente iste iure doloribus quas.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis architecto te velit maxime consectetur maiores labore. Incidunt totam reprehenderit harum quae impedit dignissimos iure mollitia possimus similique animi. Saepe labore delectus veritatis quisquam alias ipsa autem similique voluptas quidem illum harum laboriosam reprehenderit voluptatem, sapiente iste iure doloribus quas. ",

    autherName: "Pradeep Kumar",
    autherPhoto: profilePhoto,
    autherDesc: "Full-Stack Web Developer",
  };

  return (
    <div className="w-full pb-10 bg-[#f9f9f9] md:pt-[40px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1 gap-x-8 gap-y-8 px-4 sm:pt-20 md:gap-8 sm:gap-y-8 md:mt-0 ss:pt-20 text-black">
          <div className="col-span-2 gap-x-8 gap-y-8">
            <img src={photos} alt="" className="h-56 w-full object-cover" />
            <h1 className="font-bold text-2xl my-1 pt-5">{blogs.title}</h1>
            <div className="pt-5">{blogs.discription}</div>

            <h1 className="font-bold text-xl my-1 pt-5">{blogs.subTitle}</h1>
            <div className="pt-5">{blogs.subDiscription}</div>
          </div>
          <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]">
            <div>
              <img
                src={blogs.autherPhoto}
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
