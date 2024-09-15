import React from "react";
import photos from "../assets/images.jpeg"

const Blogs = () => {

    const blogs = [
        {
            "id":1,
            "title":"Blockchain Technologies Explorations",
            "discription":"lorem inpute and ant all are good those days ara so cool and rainy",
            "Data":"7th April, 2022",
            "coverImg":photos
        },
        {
            "id":2,
            "title":"Blockchain Technologies Explorations",
            "discription":"lorem inpute and ant all are good those days ara so cool and rainy",
            "Data":"7th April, 2022",
            "coverImg":photos
        },
        {
            "id":3,
            "title":"Blockchain Technologies Explorations",
            "discription":"lorem inpute and ant all are good those days ara so cool and rainy",
            "Data":"7th April, 2022",
            "coverImg":photos
        },
        {
            "id":4,
            "title":"Blockchain Technologies Explorations",
            "discription":"lorem inpute and ant all are good those days ara so cool and rainy",
            "Data":"7th April, 2022",
            "coverImg":photos
        },
        {
            "id":5,
            "title":"Blockchain Technologies Explorations",
            "discription":"lorem inpute and ant all are good those days ara so cool and rainy",
            "Data":"7th April, 2022",
            "coverImg":photos
        },
    ];
// py-[50px] Navbar.js root div Relative current position fixed top 0 w-full
  return (
    <div className="w-full bg-[#f9f9f9] py-[120px] ">
        <div className="max-w-[1240px] mx-auto">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black">

                {blogs.map((eachBlog)=>
                        <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                          <img
                            className="h-56 w-full object-cover"
                            src={eachBlog.coverImg}
                            alt="profile"
                          />
                          <div className="p-8">
                            <h5 className="text-gray-950 font-light text-sm">{eachBlog.Data}</h5>
                            <h3 className="font-bold my-1 text-2xl">
                              {eachBlog.title}
                            </h3>
                            <p className="text-gray-700 text-xl">
                              {eachBlog.discription}
                            </p>
                          </div>
                        </div>
                    )}
                
            </div>
        </div>

    </div>
  )
};

export default Blogs;
