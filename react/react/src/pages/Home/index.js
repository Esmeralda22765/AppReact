import React from "react";
import YoutubeLogo from "resources/images/yt-logo.png";
import AppConfig from "App.config";
import Header from "components/Header";

const Home = () => {
    return (
        <>
        <Header title="App React" />
            <div className="row text-center">
                <div className="col">
                    <h3>Bienvenido@s</h3>
                  
                    <p className="d-inline">
                        <a
                           
                        >
                            <img
                                src={YoutubeLogo}
                                style={{ width: "180px" }}
                                className="img-fluid"
                                alt="Youtube Logo"
                            />
                        </a>
                    </p>
                </div>
            </div>
            <div className="row py-5">
                {AppConfig.youtubeVideos.map(video => {
                    return (
                        <div className="col-md-4 p-3 card-hover" key={video.id}>
                            <div class="card">
                                <a
                                    href={`https://www.youtube.com/watch?v=${video.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        class="card-img-top"
                                        src={`https://img.youtube.com/vi/${video.id}/sddefault.jpg`}
                                        alt="Card cap"
                                    />
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            {video.title}
                                        </h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Home;
