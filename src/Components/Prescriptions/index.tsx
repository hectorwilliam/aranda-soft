import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import iconFavorite from "../../Assets/Img/icons/ic-favorite.svg"
import iconStart from "../../Assets/Img/icons/ic_star.svg"
import iconChef from "../../Assets/Img/icons/ic_chef.svg"
import iconTime from "../../Assets/Img/icons/ic_time.svg"
import iconPortion from "../../Assets/Img/icons/ic_portion.svg"
import useWindowDimensions, { DimensionsResize } from '../../Hooks/useWindowDimensions';
import { dataItems } from './items';

const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
};

const settingsTablet = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
};

const settingsMovilTwo = {
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
};

const settingsMovil = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

function Prescriptions() {
    const [dataApi, setDataApi]: any = useState([])

    const { height, width } = useWindowDimensions();

    useEffect(() => {
        
        axios.get('https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxCarbs=1000&maxProtein=10000&maxSugar=20000&number=5&apiKey=8abe8c1830854f08b7f8e3e02bc50561', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {

                console.log(JSON.stringify(response.data.results))
                setDataApi(response.data.results)
            }).catch(error=>{
                setDataApi(dataItems)
                
            })
    
    }, [])

    const returnSettings = () =>{
        if(width < 500) return settingsMovil
        if(width < 700) return settingsMovilTwo
        if(width < DimensionsResize.tablet.max) return settingsTablet
        return settings
    }
    return (
        <div className='containerMain'>
            <div className='styleCarosule'>
                <h1>Nuevas recetas</h1>
                <Slider {...returnSettings()}>
                    {dataApi.map((item: any, key: number) => {
                        const Protein = item.nutrition.nutrients.filter((item: any) => item.name == "Protein")
                        const Carbohydrates = item.nutrition.nutrients.filter((item: any) => item.name == "Carbohydrates")
                        const Sugar = item.nutrition.nutrients.filter((item: any) => item.name == "Sugar")
                        return (
                            <div className='itemMainCarousel' key={key}>
                                <div className='itemCarousel'>
                                    <div className="imagenMainSlider" style={{ backgroundImage: `url(${item.image})` }}></div>
                           
                                    <div className='titleCarousel'>
                                        <h3>{item.title}</h3>
                                        <div className='styleCalification'>
                                            <img src={iconFavorite} />
                                            <h6>5.0</h6>
                                            <img src={iconStart} className="imgStart" />
                                        </div>
                                    </div>
               
                                    <div className='descriptionContent'>
                                        <img src={iconPortion}/>
                                        <h5>Proteina</h5>
                                        <h4>{Protein?.[0]?.amount + " " + Protein?.[0]?.unit}</h4>

                                        <img src={iconPortion}/>
                                        <h5>Carbohidratos</h5>
                                        <h4>{Carbohydrates?.[0]?.amount + " " + Carbohydrates?.[0]?.unit}</h4>

                                        <img src={iconPortion}/>
                                        <h5>Calorias</h5>
                                        <h4>{Sugar?.[0]?.amount + " " + Sugar?.[0]?.unit}</h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </Slider>
            </div>
        </div>
    );
}

export default React.memo(Prescriptions);
