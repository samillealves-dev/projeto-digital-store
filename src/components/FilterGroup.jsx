
import "./FilterGroup.css";

const FilterGroup = ({ title, inputType, options }) => {
    return (
        <div className="filter-group">
            <h3>{title}</h3>

            <div className="filter-options">
                {options.map((option, index) => (
                    <label key={option.value ?? index} className="filter-option">
                        <input
                            type={inputType}
                            name={inputType === "radio" ? title : undefined}
                            value={option.value ?? option.text}
                        />
                        <span>{option.text}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default FilterGroup;
