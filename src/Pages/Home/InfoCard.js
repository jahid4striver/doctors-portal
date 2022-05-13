import React from 'react';

const InfoCard = ({img, cardTitle, bgClass}) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl p-2 ${bgClass}`}>
            <figure>
                <img src={img} alt="Album" />
            </figure>
            <div class="card-body text-white">
                <h2 class="text-center">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;