import React from 'react'

const Animatronics = () => {
    return (
        <div>
            <div className="py-20 px-6 pt-32 min-h-[80vh] bg-black text-center text-white">
                <h2 className="text-4xl font-bold font-gilroy mb-4 pt-20 ">Engineering Emotion with Mechanics</h2>
                <p className="mb-8 max-w-3xl mx-auto text-center pb-20 ">
                    Our animatronics team blends mechanical engineering with artistry to create lifelike creatures, characters, and interactive props. Every movement is designed to enhance emotion and realism—perfectly synced with the director’s vision.
                </p>
                <div className="flex flex-col gap-10">
                    <div className="bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center transition-colors">
                        <img src="https://fakeimg.pl/600x400" className="w-full max-w-3xl mx-auto rounded-xl" alt="Design to deployment process" />
                        <div className="text-center">
                            <h3 className="font-semibold mb-1 text-xl">Design to Deployment</h3>
                            <p className="text-sm text-gray-300">The complete journey from concept to on-set integration</p>
                        </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center transition-colors">
                        <img src="https://fakeimg.pl/600x400" className="w-full max-w-3xl mx-auto rounded-xl" alt="Mechanical framework" />
                        <div className="text-center">
                            <h3 className="font-semibold mb-1 text-xl">Mechanical Framework</h3>
                            <p className="text-sm text-gray-300">Working stills of our mechanical systems</p>
                        </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center transition-colors">
                        <img src="https://fakeimg.pl/600x400" className="w-full max-w-3xl mx-auto rounded-xl" alt="Motion testing" />
                        <div className="text-center">
                            <h3 className="font-semibold mb-1 text-xl">Motion Testing</h3>
                            <p className="text-sm text-gray-300">Behind the scenes of puppeteering and movement tests</p>
                        </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center transition-colors">
                        <img src="https://fakeimg.pl/600x400" className="w-full max-w-3xl mx-auto rounded-xl" alt="On-set integration" />
                        <div className="text-center">
                            <h3 className="font-semibold mb-1 text-xl">On-Set Integration</h3>
                            <p className="text-sm text-gray-300">Seamless interaction with live actors and environments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Animatronics