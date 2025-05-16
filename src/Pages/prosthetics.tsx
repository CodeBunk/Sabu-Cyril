import React from 'react'

const Prosthetics = () => {
    return (
        <div>
            <div className="py-20 px-6 pt-32 min-h-[80vh] bg-black text-center text-white">
                <h2 className="text-4xl font-bold font-gilroy mb-4 pt-20 "> Transforming Human Form through Art</h2>
                <p className="mb-8 max-w-3xl mx-auto text-center pb-20 ">
                    Our prosthetics team specializes in realistic and fantastical transformations. Using advanced materials and sculpting techniques, we create facial prosthetics, creature makeups, injuries, and full-body effects that hold up under camera scrutiny and actor comfort
                </p>
                <div className="flex flex-col gap-10 ">
                    <div className="   bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center  transition-colors">
                        <img src="https://fakeimg.pl/600x400" className=' w-full max-w-3xl mx-auto   rounded-xl' alt="" />
                        <div className="text-center">
                            <h3 className="font-semibold mb-1 text-xl">Build Timelapse</h3>
                            <p className="text-sm text-gray-300">Sculpting, moulding, and casting process
                            </p>
                        </div>
                    </div>
                    <div className=" bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center  transition-colors">
                        <img src="https://fakeimg.pl/600x400" className=' w-full max-w-3xl mx-auto   rounded-xl' alt="" />
                        <div className="text-center">
                            <h3 className="font-semibold mb-1 text-xl">Sculpting & Casting</h3>
                            <p className="text-sm text-gray-300">Sculpting, moulding, and casting process</p>
                        </div>
                    </div>
                    <div className=" bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center  transition-colors">
                        <img src="https://fakeimg.pl/600x400" className=' w-full max-w-3xl mx-auto   rounded-xl' alt="" />
                        <div className="text-center">
                            <h3 className="font-semibold mb-1 text-xl">Application Process</h3>
                            <p className="text-sm text-gray-300">Actor application BTS</p>
                        </div>
                    </div>
                    <div className=" bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center  transition-colors">
                        <img src="https://fakeimg.pl/600x400" className=' w-full max-w-3xl mx-auto   rounded-xl' alt="" />
                        <div className="text-center">
                            <h3 className="font-semibold mb-1 text-xl">Real vs Prosthetic</h3>
                            <p className="text-sm text-gray-300">Real vs prosthetic side-by-sides</p>
                        </div>
                    </div>
                    <div className=" bg-gray-700 rounded-lg flex flex-col gap-3 items-center justify-center  transition-colors">
                        <img src="https://fakeimg.pl/600x400" className=' w-full max-w-3xl mx-auto   rounded-xl' alt="" />
                        <div className="text-center">
                            <h3 className="font-semibold mb-1 text-xl">Final Looks</h3>
                            <p className="text-sm text-gray-300">Final looks from camera-ready sets</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prosthetics