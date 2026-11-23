import { Meteors } from "@/components/ui/meteors"

function page() {
    return (
        <div className="min-h-screen bg-black py-12 pt-36">
            <Meteors number={500} />
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">Contact Us</h1>
                <p className="text-neutral-400 text-center max-w-lg mx-auto mb-8">
                    We're here to help with any questions about our courses, programs or events. Reach out and let us know how we can assist you in your musical journey
                </p>
                <form className="space-y-4">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full p-4 rounded-lg border border-neutral-800 bg-neutral-950 text-neutral-300 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={5}
                        className="w-full p-4 rounded-lg border border-neutral-800 bg-neutral-950 text-neutral-300 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200 resize-none"
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-semibold transition duration-200"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default page
