import React from "react";
import withExternalInfo from "hoc/withExternalInfo";
import useGAEventTracker from "hooks/useGAEventTracker";

const ExternalInfo = ({ code = "", tutorial = "" }) => {
    const GAEventsTracker = useGAEventTracker("External Links");

    return (
        <h6 className="text-center">
            {tutorial && (
                <a
                    href={tutorial}
                    target="_blank"
                    onClick={(e) =>
                        GAEventsTracker("Youtube Tutorials Page", tutorial)
                    }
                    rel="noopener noreferrer"
                >
                   
                </a>
            )}
            {code && (
                <a
                    
                >
                   
                </a>
            )}
        </h6>
    );
};

export default withExternalInfo(ExternalInfo);
