
import "./Gallery.css";
import { useState } from "react";

const Gallery = ({ images, showThumbs, width, height, radius }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const thumbColors = [
        "#E2E3FF",
        "#FFE8BC",
        "#FFC0BC",
        "#DEC699",
        "#E8DFCF"
    ];

    return (
        <div
            className="gallery"
            style={{ maxWidth: width }}
        >


            <div
                className="gallery-main"
                style={{
                height: height,
                borderRadius: radius,
                backgroundColor: thumbColors[activeIndex]
                }}
            >

                {activeIndex > 0 && (
                    <button
                        type="button"
                        className="gallery-arrow gallery-arrow-left"
                        onClick={() => setActiveIndex(activeIndex - 1)}
                        aria-label="Imagem anterior"
                    >
                        <img src="/arrow-left.svg" alt="" />
                    </button>
                )}

                <img
                    src={images[0].src}
                    alt="Imagem do Produto"
                />

                {activeIndex < thumbColors.length - 1 && (
                    <button
                        type="button"
                        className="gallery-arrow gallery-arrow-right"
                        onClick={() => setActiveIndex(activeIndex + 1)}
                        aria-label="Próxima imagem"
                    >
                        <img src="/arrow-right.svg" alt="" />
                    </button>
                )}

            </div>

            {showThumbs && (
                <div className="gallery-thumbs">
                    {thumbColors.map((color, index) => (
                        <div
                            className={`gallery-thumb ${activeIndex === index ? "active" : ""}`}
                            key={index}
                            style={{ backgroundColor: color }}
                            onClick={() => setActiveIndex(index)}
                        >
                            <img
                                src={images[0].src}
                                alt={`Miniatura ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
};

export default Gallery;
