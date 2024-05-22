import React from 'react'

const Card2 = () => {
    return (
        <div>
            <containerer>
                <div class="flex justify-center rounded-sm mt-5 ">
                    {/* ----------card-1---------- */}
                    <div class="bg-white shadow-2xl rounded-xl w-[300px] h-[350px]"  >
                        <div class=" rounded shadow-2xl h-44 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 hover:-translate-y-3 hover:scale-90">
                            <h1 class="text-center text-white text-2xl ">Anna Smith</h1>
                            <h1 class="flex justify-center text-white text-sm mt-12">Graphic designer</h1>
                            <div class="flex justify-center mt-8">
                                <img class="size-5 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="" />
                                <img class="size-5 ml-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" alt="" />
                                <img class="size-5 ml-8" src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" alt="" />
                            </div>
                        </div>
                        <div class="">
                            <p class="text-center mt-2 text-sm px-2 text-gray-500" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt soluta perspiciatis fuga facere sequi. Necessitatibus exercitationem asperiores dolore maxime fugit quisquam delectus molestiae, labore voluptatibus? Incidunt neque repellendus vero repellat.</p>
                        </div>
                    </div>





                    {/* ----------card-2---------- */}
                    <div class="bg-white shadow-2xl rounded-xl w-[300px] h-[350px] ml-6">
                        <div class="flex justify-center">
                            <img class="rounded shadow-2xl h-[175px] w-[300px] " src="https://cc-prod.scene7.com/is/image/CCProdAuthor/FF-SEO-text-to-image-marquee-mobile-2x?$pjpeg$&jpegSize=100&wid=600" alt="" />
                        </div>
                        <div class="">
                            <h1 class="flex justify-center font-bold text-lg mt-3">Peyton Hailey</h1>
                            <h1 class="flex justify-center font-semibold mt-2">Artificial</h1>
                            <p class="text-center mt-2 text-sm px-2 text-gray-500" >In this post, we'll share more than 20 different sources and tools for free images.</p>
                            <div class="flex justify-center mt-3">
                                <img class="size-7 m" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-1024.png" alt="" />
                                <img class="size-7 ml-8" src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="" />
                                <img class="size-7 ml-8" src="https://cdn-icons-png.freepik.com/512/12950/12950708.png" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* ----------card-3---------- */}
                    <div class="bg-white shadow-2xl rounded-xl w-[300px] h-[350px] ml-6 ">
                        <div class="flex justify-center">
                            <img class="rounded shadow-2xl w-[380px] h-[195px] " src="https://i.ytimg.com/vi/Jc61TTl3UNo/maxresdefault.jpg" alt="" />
                        </div>
                        <div class="px-6">
                            <h1 class="font-medium text-lg mt-2 ">Card Title</h1>
                            <p class="mt-2 text-sm text-gray-500" >In this post, we'll share more than 20 different sources and tools for free.</p>
                            <div class="flex justify-center shadow-2xl shadow-black rounded-sm bg-pink-900 mt-3 w-20 h-8">
                                <button class="text-xs  text-white">Button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </containerer>

        </div>
    )
}

export default Card2
