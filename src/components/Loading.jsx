import React from "react";

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="animate-spin border-4 border-t-transparent w-10 h-10 scale-200 rounded-full border-red-300"></div>
        </div>
    );
};

export default Loading;
