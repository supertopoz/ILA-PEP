import React from "react";

export const About = (props) => {
    console.log(props)
    return (
        <div>
                <div className="col-xs-12">
                    <h1>The Main Page</h1>
                </div>
            <div>
                <div>
                    <button
                        onClick={() => props.changeUsername('Anna')}>Change the Username
                    </button>
                </div>
            </div>
        </div>
    );
};