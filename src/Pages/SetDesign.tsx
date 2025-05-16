import React from 'react'

const SetDesign = () => {
    return (
        <div>
            <div className="py-20 px-6 pt-32 min-h-[80vh] bg-black text-center text-white">
                <h2 className="text-4xl font-bold font-gilroy mb-4 pt-20 ">Crafting Cinematic Worlds</h2>
                <p className="mb-8 max-w-3xl mx-auto text-center pb-20 ">
                    From large-scale kingdoms to intricate interiors, our set design department transforms vision into tangible environments. Each set is structurally sound, visually captivating, and narratively aligned—ready for storytelling on any scale.
                </p>
                <div className="flex flex-col gap-10">
                    <div className="bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center transition-colors">
                        <img src="https://fakeimg.pl/600x400" className="w-full max-w-3xl mx-auto rounded-xl" alt="" />
                        <div className="text-center">
                            <h3 className="font-semibold mb-1 text-xl">Concept to Reality</h3>
                            <p className="text-sm text-gray-300">From concept art to real set transition</p>
                        </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center transition-colors">
                        <img src="https://fakeimg.pl/600x400" className="w-full max-w-3xl mx-auto rounded-xl" alt="" />
                        <div className="text-center">
                            <h3 className="font-semibold mb-1 text-xl">Construction Process</h3>
                            <p className="text-sm text-gray-300">Construction phases and detailing</p>
                        </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center transition-colors">
                        <img src="https://fakeimg.pl/600x400" className="w-full max-w-3xl mx-auto rounded-xl" alt="" />
                        <div className="text-center">
                            <h3 className="font-semibold mb-1 text-xl">Behind the Scenes</h3>
                            <p className="text-sm text-gray-300">BTS footage of large builds and dress-ups</p>
                        </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center transition-colors">
                        <img src="https://fakeimg.pl/600x400" className="w-full max-w-3xl mx-auto rounded-xl" alt="" />
                        <div className="text-center">
                            <h3 className="font-semibold mb-1 text-xl">Craftsmanship</h3>
                            <p className="text-sm text-gray-300">Team at work: carpenters, painters, and sculptors in action</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SetDesign