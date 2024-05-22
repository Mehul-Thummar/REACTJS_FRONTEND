import React from 'react'

const Card3 = () => {
    return (
        <div>
            <containerer>
                {/* ----------card-1---------- */}
                <div class="flex justify-center rounded-sm mt-5 ">
                    <div class="bg-white shadow-2xl rounded-sm w-[280px] h-[420px] ml-6 ">
                        <div class="flex justify-center">
                            <img class="rounded-sm  " src="https://img.freepik.com/premium-photo/chess-king-chess-board-game-with-chess-figures-ai-generated_70626-13559.jpg" alt="" />
                        </div>
                        <div class="px-1 mt-4 ">
                            <h1 class="text-center font-medium text-lg mt-2 ">Console</h1>
                            <p class="text-center mt-2 text-sm px-2 text-gray-500" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem eos cupiditate perspiciatis voluptatem dolor possimus. Nemo consequatur aspernatur voluptatem dolor possimus.</p>
                            <div class="flex justify-center text-center ">
                                <div class="shadow-2xl border-2 border-green-500 rounded mt-3 w-24 h-8">
                                    <button class="text-xs text-center text-green-500">Go Anywhere</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ----------card-2---------- */}
                    <div class="bg-white shadow-2xl rounded-sm w-[280px] h-[420px] ml-6 ">
                        <div class="flex justify-center">
                            <img class="rounded-sm  h-[190px] " src="https://st4.depositphotos.com/16552764/22812/i/450/depositphotos_228125704-stock-photo-johannesburg-south-africa-october-2018.jpg" alt="" />
                        </div>
                        <div class="px-1 mt-4 ">
                            <h1 class="text-center font-medium text-lg mt-2 ">Playground</h1>
                            <p class="text-center mt-2 text-sm px-2 text-gray-500" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem eos cupiditate perspiciatis voluptatem dolor possimus. Nemo consequatur aspernatur voluptatem dolor possimus.</p>
                            <div class="flex justify-center text-center ">
                                <div class="shadow-2xl border-2 border-green-500 rounded mt-3 w-24 h-8">
                                    <button class="text-xs text-center text-green-500">Go Anywhere</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ----------card-3---------- */}
                    <div class="bg-white shadow-2xl rounded-sm w-[280px] h-[420px] ml-6 ">
                        <div class="flex justify-center">
                            <img class="rounded-sm  h-[190px] " src="https://www.technewsworld.com/wp-content/uploads/sites/3/2022/10/kid-video-game-player.jpg" alt="" />
                        </div>
                        <div class="px-1 mt-4 ">
                            <h1 class="text-center font-medium text-lg mt-2 ">Adventure</h1>
                            <p class="text-center mt-2 text-sm px-2 text-gray-500" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem eos cupiditate perspiciatis voluptatem dolor possimus. Nemo consequatur aspernatur voluptatem dolor possimus.</p>
                            <div class="flex justify-center text-center ">
                                <div class="shadow-2xl border-2 border-green-500 rounded mt-3 w-24 h-8">
                                    <button class="text-xs text-center text-green-500">Go Anywhere</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </containerer>
        </div>
    )
}

export default Card3
