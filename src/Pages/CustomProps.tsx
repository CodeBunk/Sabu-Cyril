import React from 'react'

const CustomProps = () => {
    return (
        <div>
            <div className="py-20 px-6 pt-32 min-h-[80vh] bg-black text-center text-white">
                <h2 className="text-4xl font-bold font-gilroy mb-4 pt-20 ">Unique Visual Elements, Handcrafted for Storytelling</h2>
                <p className="mb-8 max-w-3xl mx-auto text-center pb-20 ">
                    Artistry meets narrative in our custom-made pieces—sculptures, murals, artifacts, and symbolic decor. Each piece is a one-of-a-kind creation that deepens the world-building, serving as a visual anchor within the set.        </p>
                <div className="flex flex-col gap-10">
                    <div className="bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center transition-colors">
                        <img src="https://fakeimg.pl/600x400" className="w-full max-w-3xl mx-auto rounded-xl" alt="Concept to creation process" />
                        <div className="text-center">
                            <h3 className="font-semibold mb-1 text-xl">Concept to Creation</h3>
                            <p className="text-sm text-gray-300">The journey from initial design to finished artwork</p>
                        </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center transition-colors">
                        <img src="https://fakeimg.pl/600x400" className="w-full max-w-3xl mx-auto rounded-xl" alt="Material exploration" />
                        <div className="text-center">
                            <h3 className="font-semibold mb-1 text-xl">Material Exploration</h3>
                            <p className="text-sm text-gray-300">Exploring textures, finishes, and artistic techniques</p>
                        </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center transition-colors">
                        <img src="https://fakeimg.pl/600x400" className="w-full max-w-3xl mx-auto rounded-xl" alt="Artists at work" />
                        <div className="text-center">
                            <h3 className="font-semibold mb-1 text-xl">Artists at Work</h3>
                            <p className="text-sm text-gray-300">Behind-the-scenes of painting, sculpting, and detailing</p>
                        </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center transition-colors">
                        <img src="https://fakeimg.pl/600x400" className="w-full max-w-3xl mx-auto rounded-xl" alt="Installation shots" />
                        <div className="text-center">
                            <h3 className="font-semibold mb-1 text-xl">Installation Shots</h3>
                            <p className="text-sm text-gray-300">Our custom pieces in their final set environments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomProps