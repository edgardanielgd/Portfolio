import { useState } from "react";

function TechnologiesContainer({
    title, description, items
}){
    const [collapsed, setCollapsed] = useState(false);
    return(
        <div className="row portfolio-technology-container">
            <p className="technology-container-title" onClick={() => {
                setCollapsed(!collapsed);
            }}>
                {(collapsed ? "+" : "-") +  "\t" + title}
            </p>
            <p className="portfolio-paragraph">
                {description}
            </p>
            { !collapsed &&
                items.map((item, index) => (
                    <div className = "col-12 col-md-2 col-sm-3 mb-3 d-flex flex-column text-center" key={index}>
                        
                        <div className="d-flex portfolio-framework-div">
                            <img
                                src={item.logo}
                                alt={item.alt}
                            />
                        </div>
                        <p>{item.title}</p>
                        <p className="portfolio-knowledge-score">
                            <p style={{
                                width: `${item.score || 100}%`  
                            }}></p>
                        </p>
                    </div>
                ))
            }
            
        </div>
    )
}

export default TechnologiesContainer;