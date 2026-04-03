import React from 'react';

type Data = {
    status: "loading" | "success" | "error"
}

const DataFetch = ({ status }: Data) => {
    if (status === "loading") {
        return <div>Loading...</div>;
    }
    else if (status === "error") {
        return <div>Error occurred!</div>;
    }
    return (
        <div>
            Data fetched successfully!
        </div>
    );
};

export default DataFetch;