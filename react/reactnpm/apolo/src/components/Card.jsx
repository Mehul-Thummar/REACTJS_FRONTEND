import React from 'react'

const Card = () => {
  return (
    <div>
      <containerer>
        {/* ----------card-1---------- */}
        <div class="flex justify-center rounded-sm mt-5 ">
          <div class="bg-white shadow-2xl rounded-xl w-[300px] h-[400px]" >
            <div class="flex justify-center">
              <img class="rounded shadow-2xl w-[380px] hover:scale-105 " src="https://buffer.com/library/content/images/2023/10/free-images.jpg" alt="" />
            </div>
            <div class="">
              <h1 class="flex justify-center font-bold text-lg mt-3">Greer Haley</h1>
              <h1 class="flex justify-center font-semibold mt-2 text-blue-800">Photographer</h1>
              <p class="text-center mt-2 font-medium  text-sm px-2 text-gray-500" >In this post, we'll share more than 20 different sources and tools for free images, covering .</p>
              <div class="flex justify-center mt-3">
                <img class="size-5 m" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="" />
                <img class="size-5 ml-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" alt="" />
                <img class="size-5 ml-8" src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" alt="" />
              </div>
            </div>
          </div>

          {/* ----------card-2---------- */}
          <div class="bg-white shadow-2xl rounded-xl w-[300px] h-[400px] ml-6 ">
            <div class="flex justify-center">
              <img class="rounded shadow-2xl w-[380px] hover:-translate-y-4 hover:scale-90 " src="https://media.istockphoto.com/id/941858854/photo/herbs-and-spices-for-cooking-on-dark-background.jpg?s=612x612&w=0&k=20&c=-quRLbD1Hkd2-i_I-uqJltiA516alqGNojlobB6nZ7A=" alt="" />
            </div>
            <div class="px-6">
              <div class="flex items-center mt-3">
                <img class="size-4" src="https://w7.pngwing.com/pngs/554/203/png-transparent-restaurant-computer-icons-food-menu-menu-text-eating-plate-lunch-thumbnail.png" alt="" />
                <h1 class="font-medium ml-2 text-pink-500">Culinary</h1>
              </div>
              <h1 class="font-medium text-lg mt-2 ">Herbs and spices</h1>
              <p class="mt-2 font-medium text-sm text-gray-500" >In this post, we'll share more than 20 different sources and tools for free images, covering .</p>
              <div class="flex justify-center shadow-2xl shadow-black rounded-sm bg-pink-900 mt-3 w-20 h-8">
                <button class="text-xs  text-white">Button</button>
              </div>
            </div>
          </div>

          {/* ----------card-3---------- */}
          <div class="bg-white shadow-2xl rounded-xl w-[300px] h-[400px] ml-6">
            <div class="flex justify-center">
              <img class="rounded shadow-2xl h-[200px] w-[300px] " src="https://cc-prod.scene7.com/is/image/CCProdAuthor/FF-SEO-text-to-image-marquee-mobile-2x?$pjpeg$&jpegSize=100&wid=600" alt="" />
            </div>
            <div class="">
              <h1 class="flex justify-center font-bold text-lg mt-3">Peyton Hailey</h1>
              <h1 class="flex justify-center font-semibold mt-2">Artificial</h1>
              <p class="text-center mt-2 font-medium text-sm px-2 text-gray-500" >In this post, we'll share more than 20 different sources and tools for free images, covering.</p>
              <div class="flex justify-center mt-3">
                <img class="size-7 m" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-1024.png" alt="" />
                <img class="size-7 ml-8" src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="" />
                <img class="size-7 ml-8" src="https://cdn-icons-png.freepik.com/512/12950/12950708.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </containerer>
    </div>
  )
}

export default Card
