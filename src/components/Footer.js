import React from "react";

export default () => {
    return (
        <div className="footer">
            <p style={{ textAlign: "center", color: "grey" }}>
                Copyright (c) {new Date().getFullYear()} Intermatter Technologies
            </p>
        </div>
    );
};
