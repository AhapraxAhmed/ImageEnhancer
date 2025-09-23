const ImageUpload = (props) => {
    const ShowImageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            props.UploadImageHandler(file);
        }
    };

    return (
        <div className="bg-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-2xl">
            <label
                htmlFor="fileInput"
                className="block w-full cursor-pointer border-2 border-dashed border-gray-500 rounded-lg p-6 text-center hover:border-gray-100 transition-all"
            >
                <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={ShowImageHandler}
                />
                <span className="text-lg font-medium text-gray-100">
                    Click and drag to upload your image
                </span>
            </label>
        </div>
    );
};

export default ImageUpload;
