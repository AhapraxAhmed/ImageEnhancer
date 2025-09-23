import Loading from "./Loading";
import { Download } from "lucide-react"; // icon library

const ImagePreview = (props) => {
    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {/* Original Image */}
            <div className="bg-gray-800 border shadow-lg rounded-xl overflow-hidden relative">
                <h2 className="text-xl font-semibold text-center bg-gray-700 text-white py-2">
                    Original Image
                </h2>

                {props.uploaded ? (
                    <img
                        src={props.uploaded}
                        alt="Original"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="flex items-center justify-center h-80 bg-gray-800">
                        No Image Selected
                    </div>
                )}
            </div>

            {/* Enhanced Image */}
            <div className="bg-gray-800 shadow-lg border-2 rounded-xl overflow-hidden relative">
                <h2 className="text-xl font-semibold text-center bg-gray-700 text-white py-2">
                    Enhanced Image
                </h2>

                {props.enhanced && !props.loading && (
                    <div className="relative">
                        <img
                            src={props.enhanced}
                            alt="Enhanced"
                            className="w-full h-full object-cover"
                        />
                        {/* Floating Icon Button */}
                        <a
                            href={props.enhanced}
                            download="enhanced-image.jpg"
                            className="absolute bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition transform duration-200 flex items-center justify-center"
                        >
                            <Download className="w-5 h-5" />
                        </a>
                    </div>
                )}

                {props.loading ? (
                    <Loading />
                ) : !props.enhanced ? (
                    <div className="flex items-center justify-center h-80 bg-gray-800">
                        No Enhanced Image
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default ImagePreview;
