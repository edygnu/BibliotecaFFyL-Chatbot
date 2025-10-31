import React from 'react';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className="novedades">
            <h3>{title}</h3>
            <h5>{subtitle}</h5>
            <br></br>
            <div className="novImg">
                <img src={imagen} alt="imagen" />
            </div>
            <br></br>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
}

export default NovedadItem;