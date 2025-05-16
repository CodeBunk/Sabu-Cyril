import React from 'react'

const SpecialProps = () => {
    return (
        <div>
            <div className="py-20 px-6 pt-32 min-h-[80vh] bg-black text-center text-white">
                <h2 className="text-4xl font-bold font-gilroy mb-4 pt-20 ">Functional Props, Designed for Story</h2>
                <p className="mb-8 max-w-3xl mx-auto text-center pb-20 ">
                    Every custom prop—be it mythological, futuristic, or functional—is designed to interact seamlessly with the actor and the story. Engineered with precision and artistic flair, our special properties elevate realism and style.
                </p>
                <div className="flex flex-col gap-10">
                    <div className="bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center transition-colors">
                        <img src="https://fakeimg.pl/600x400" className="w-full max-w-3xl mx-auto rounded-xl" alt="" />
                        <div className="text-center">
                            <h3 className="font-semibold mb-1 text-xl">Design & Fabrication</h3>
                            <p className="text-sm text-gray-300">Prop design sketches and fabrication process</p>
                        </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center transition-colors">
                        <img src="https://fakeimg.pl/600x400" className="w-full max-w-3xl mx-auto rounded-xl" alt="" />
                        <div className="text-center">
                            <h3 className="font-semibold mb-1 text-xl">Functional Testing</h3>
                            <p className="text-sm text-gray-300">Testing clips of props in action</p>
                        </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center transition-colors">
                        <img src="https://fakeimg.pl/600x400" className="w-full max-w-3xl mx-auto rounded-xl" alt="" />
                        <div className="text-center">
                            <h3 className="font-semibold mb-1 text-xl">On-Set Integration</h3>
                            <p className="text-sm text-gray-300">Props interacting with actors on set</p>
                        </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center transition-colors">
                        <img src="https://fakeimg.pl/600x400" className="w-full max-w-3xl mx-auto rounded-xl" alt="" />
                        <div className="text-center">
                            <h3 className="font-semibold mb-1 text-xl">Craftsmanship Details</h3>
                            <p className="text-sm text-gray-300">Close-up shots of texture, finish, and mechanics</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialProps