import React from 'react'

const ProductionDesign = () => {
    return (
        <div>
            <div className="py-20 px-6 pt-32 min-h-[80vh] bg-black text-center text-white">
                <h2 className="text-4xl font-bold font-gilroy mb-4 pt-20 ">Small-Scale Mastery, Big-Screen Impact</h2>
                <p className="mb-8 max-w-3xl mx-auto text-center pb-20 ">
                    Miniatures allow for cinematic storytelling where realism and creativity meet. From
                    destructible models to detailed cityscapes, our miniatures are crafted for practical
                    shooting with optical precision and handcrafted beauty.
                </p>
                <div className="flex flex-col gap-10 ">
                    <div className="   bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center  transition-colors">
                        <img src="https://fakeimg.pl/600x400" className=' w-full max-w-3xl mx-auto   rounded-xl' alt="" />
                        <div className="text-center">
                            <h3 className="font-semibold mb-1 text-xl">Build Timelapse</h3>
                            <p className="text-sm text-gray-300">Time-lapses of miniature builds
                            </p>
                        </div>
                    </div>
                    <div className=" bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center  transition-colors">
                        <img src="https://fakeimg.pl/600x400" className=' w-full max-w-3xl mx-auto   rounded-xl' alt="" />
                        <div className="text-center">

                            <h3 className="font-semibold mb-1 text-xl">Scale & Details</h3>
                            <p className="text-sm text-gray-300">Intricate craftsmanship up close</p>
                        </div>
                    </div>
                    <div className=" bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center  transition-colors">
                        <img src="https://fakeimg.pl/600x400" className=' w-full max-w-3xl mx-auto   rounded-xl' alt="" />
                        <div className="text-center">

                            <h3 className="font-semibold mb-1 text-xl ">Behind the Scenes</h3>
                            <p className="text-sm text-gray-300">Lighting and camera techniques</p>
                        </div>
                    </div>
                    <div className=" bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center  transition-colors">
                        <img src="https://fakeimg.pl/600x400" className=' w-full max-w-3xl mx-auto   rounded-xl' alt="" />
                        <div className="text-center">

                            <h3 className="font-semibold mb-1 text-xl">Before & After</h3>
                            <p className="text-sm text-gray-300">Miniature to final film comparison</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductionDesign