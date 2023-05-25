"use client"
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const StarRating = () => {
    const [currentValue, setCurrentValue] = useState(0)
    const [hoverValue, setHoverValue] = useState(undefined)

    const handleClick = (value) => {
        setCurrentValue(value)
    }
    const handleMouseOver = (value)=> {
        setHoverValue(value)
    }

    const handleMouseLeave = (value)=> {
        setHoverValue(undefined)
    }

    const colors = {
        orange: "#F5FF7F",
        grey:"grey"
    }
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        stars: {
            display: "flex"
        }
    }

    const stars = Array(5).fill(0);
    return (
        <div style={styles.container}>
            <div style={styles.stars}>
                {stars.map((_, index) => {
                    return (
                        <FaStar
                            key={index}
                            size={24}
                            style={{
                                marginRight: 10,
                                cursor: "pointer"
                            }}
                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                            onClick={() => handleClick(index+1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default StarRating;