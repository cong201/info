import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Home() {
    return (
        <div className="bg-gray-800 flex flex-col md:flex-row h-400">
            <div className="w-full md:w-1/2 text-white flex flex-col justify-center items-center text-5xl font-home px-4">
                <h1 className="mb-4 text-center text-3xl md:text-5xl">Lê Văn Công</h1>
                <h2 className="mb-4 text-center text-2xl md:text-4xl">Đại học khoa học Tự Nhiên-HUS</h2>
                <div className="flex items-center mb-4">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    <h2 className="text-center text-lg md:text-xl">conglevan21072001@gmail.com</h2>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faPhoneVolume} className="mr-2" />
                    <h2 className="text-center text-lg md:text-xl">0337782934</h2>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <img className="h-100 w-100 rounded-full p-48" src="../src/assets/img/congle.jpg" alt="" />
            </div>
        </div>
    );
}
export default Home;