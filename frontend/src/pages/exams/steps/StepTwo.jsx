import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules'

import exam1 from "../../../assets/images/exam/1.jpg";
import exam2 from "../../../assets/images/exam/2.jpg";
import exam3 from "../../../assets/images/exam/3.jpg";
import exam4 from "../../../assets/images/exam/4.jpg";
import exam5 from "../../../assets/images/exam/5.jpg";
import exam6 from "../../../assets/images/exam/6.jpg";

const StepTwo= () => {
  const sliderData = [
    {image: exam1, title:'Lecture compréhension', version:'1'},
    {image: exam2, title:'Lecture vocale', version:'1'},
    {image: exam3, title:'Production écrite', version:'1'},
    {image: exam4, title:'Conjugaison', version:'1'},
    {image: exam5, title:'Écriture', version:'1'},
    {image: exam6, title:'Dictée', version:'1'},
  ];
  return (
    <div>
            <h4 className="fs-20 font-w700 my-4">Choisir </h4>
        <div className="owl-carousel card-slider">
          <Swiper
              spaceBetween={20}              
              autoplay = {{
                delay: 2000
              }}
              breakpoints={{

                360: {
                  slidesPerView: 1,                
                },
                576: {
                  slidesPerView: 3,                
                },
                991: {
                  slidesPerView: 4,                
                },
                1200: {
                  slidesPerView: 5,                
                },
              }}
              modules={[Autoplay]}
          >
              {sliderData.map((data, index)=>(
                <SwiperSlide key={index}>
                    <div className="">
                      <div className="card">
                          <div className="card-body exam-grid-card">
                            <div className="new-arrival-exam">
                                <div className="new-arrivals-img-contnent">
                                  <img className="img-fluid rounded" src={data.image} alt="" />
                                </div>
                                <div className="new-arrival-content text-center mt-3">
                                  <h4>{data.title}</h4>
                                  <ul className="star-rating">
                                      <li><i className="fa fa-star" /></li>{" "}
                                      <li><i className="fa fa-star" /></li>{" "}
                                      <li><i className="fa fa-star" /></li>{" "}
                                      <li><i className="fa fa-star" /></li>{" "}
                                      <li><i className="fa fa-star" /></li>
                                  </ul>
                                  <span className="price">V-{data.version}</span>
                                </div>
                            </div>
                          </div>
                      </div>
                    </div>
                </SwiperSlide>
              ))}
              
          </Swiper>
      </div>
    </div>
  )
}

export default StepTwo
