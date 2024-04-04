import React from "react";
import { ES, GB } from "country-flag-icons/react/1x1";



export const FlagLanguage: React.FC = () => {

    return (
                <div className="absolute z-20 right-4 top-4 bg-white border border-gray-200 shadow-lg rounded">
                    <div className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100">
                    <ES className="w-4 h-4" />
                        Español
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100">
                    <GB  className="w-4 h-4"/>
                        English
                    </div>
                </div>
    )
}