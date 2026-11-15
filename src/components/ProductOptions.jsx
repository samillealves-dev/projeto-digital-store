
import { useState } from "react";
import "./ProductOptions.css";

const ProductOptions = ({ options, radius, shape, type }) => {

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="product-options">
            {options.map((option, index) => (
                <button
                    key={index}
                    type="button"
                    className={`product-option ${
                        shape === "circle" ? "circle" : "square"
                    } ${
                        selectedOption === index ? "selected" : ""
                    }`}
                    style={{
                        borderRadius: shape === "circle" ? "50%" : radius,
                        backgroundColor: type === "color" ? option : "#FFFFFF"
                    }}
                    onClick={() => setSelectedOption(index)}
                    aria-label={type === "color" ? `Cor ${index + 1}` : `Tamanho ${option}`}
                >
                    {type === "text" ? option : ""}
                </button>
            ))}
        </div>
    );
};

export default ProductOptions;
