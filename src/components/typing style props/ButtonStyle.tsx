import React from 'react';

type ButtonStyleProps = {
    btnStyle: React.CSSProperties;
};

const ButtonStyle = (props: ButtonStyleProps) => {
    return (
        <div>
            <button style={props.btnStyle}>Styled Button</button>
        </div>
    );
};

export default ButtonStyle;