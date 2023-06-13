function Contact() {
    const textareaRows = 5;
    return (
        <div className="bg-gray-800 flex">
            <div className="w-1/2">
                <h1 className="text-5xl text-white ml-6">Contact me</h1>
                <p className="text-2xl text-white mt-10 ml-6">Because this is the public website so please send me an email and I will send you my CV back. Thank you.</p>
            </div>
            <div className="w-1/2 mt-24 bg-blue-200 rounded-xl mb-10">
                <form className="px-5 py-10 shadow-2xl rounded-1">
                    <input className="w-full p-2 rounded-lg mb-8 mt-10" type="text" placeholder="Your Name" required />
                    <input className="w-full p-2 rounded-lg mb-8" type="text" placeholder="Your Email" required />
                    <textarea className="w-full p-2 rounded-lg mb-12" rows={textareaRows} placeholder="Message"></textarea>
                    <button className="border border-blue-600 px-6 py-2 bg-red-400 rounded-lg float-right mb-6">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;