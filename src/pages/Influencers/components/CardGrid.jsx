import React from "react";
import "./CardGrid.css";
const avatar1 =
  "https://salla-expert.s3.eu-central-1.amazonaws.com/uploads/JRosofMrWqbrCzxORnZg9SSsY01oedgZGNK38Xc1.jpg";
const avatar2 =
  "https://salla-expert.s3.eu-central-1.amazonaws.com/uploads/iybYj5AEzMMFRvK7mtrvviHSHlkLfr1kmLiBKwqa.jpg";
const avatar3 =
  "https://salla-expert.s3.eu-central-1.amazonaws.com/uploads/lHC9lrLItH9Tz5uBN7lrcZTmurk9W15lXUf86Sm9.jpg";
const avatar4 =
  "https://salla-expert.s3.eu-central-1.amazonaws.com/uploads/zQrz6Oe34Zi3l6ZM89IwaG92xpopVANtYHheWQXk.png";
const avatar5 =
  "https://salla-expert.s3.eu-central-1.amazonaws.com/uploads/3QTBvnNjKbnQcz4UuKUqaWb2HFQxoIuh9CVCSBDj.jpg";
const avatar6 =
  "https://salla-expert.s3.eu-central-1.amazonaws.com/uploads/OxrcWrjjbfcXm0vlzInjWlKo6BvKO7V5NkoLa8AJ.jpg";

const CardGrid = () => {
  const data = [
    {
      id: 1,
      name: "Nouf AlDossari",
      followers: "10K",
      likes: "29K",
      comments: "22K",
      categories: ["سفر وسياحة", "طبخ وطعام", "ديكور"],
      icon:<i className='sicon-tag'></i>,
      avatar: avatar1,
      rating:["+2"],
    },
    {
      id: 2,
      name: "شارمنق",
      followers: "17K",
      likes: "23K",
      comments: "10k",
      categories: ["جمال وعناية","ازياء واناقة","ديكور"],
      avatar: avatar2,
      icon:<i className='sicon-tag'></i>,
      rating:["+5"],
    },
    {
      id: 3,
      name: "خالد الذكير",
      followers: "17K",
      likes: "23K",
      comments: "10k",
      categories:["كتب وتعليم","تطوير الأعمال"],
      avatar: avatar3,
      icon:<i className='sicon-tag'></i>,
      rating:["+8"],
    },
    {
      id: 4,
      name: "شيماء قهوجي",
      followers: "10K",
      likes: "29K",
      comments: "22K",
      categories: ["طبخ ووصفات", "صحة وطب"],
      avatar: avatar4,
      icon:<i className='sicon-tag'></i>,
      rating:["+9"],
    },
    {
      id: 5,
      name: "نجلاء المري",
      followers: "17K",
      likes: "23K",
      comments: "10k",
      categories: ["اطفال","جمال وعناية","طبخ وطعام"],
      avatar: avatar5,
      rating:["+7"],
    },
    {
      id: 6,
      name: "سلطان سعد للاعلانات",
      followers: "17K",
      likes: "23K",
      comments: "10k",
      categories: ["تطوير الأعمال"],
      avatar: avatar6,
      rating:["+2"],
    },
    {
      id: 7,
      name:"Nouf AlDossari",
      followers: "10K",
      likes: "29K",
      comments: "22K",
      categories: ["طبخ ووصفات", "صحة وطب"],
      avatar: avatar1,
      rating:["+4"],
    },
    {
      id: 8,
      name: "شارمنق",
      followers: "17K",
      likes: "23K",
      comments: "10k",
      categories: ["تطوير الأعمال"],
      avatar: avatar2,
      rating:["+2"],
    },
    {
      id: 9,
      name: "خالد الذكير",
      followers: "17K",
      likes: "23K",
      comments: "10k",
      categories: ["تطوير الأعمال"],
      avatar: avatar3,
      rating:["+3"],
    },
    {
      id: 10,
      name:"Nouf AlDossari",
      followers: "10K",
      likes: "29K",
      comments: "22K",
      categories: ["طبخ ووصفات", "صحة وطب"],
      avatar: avatar1,
      rating:["+6"],
    },
    {
      id: 11,
      name: "شارمنق",
      followers: "17K",
      likes: "23K",
      comments: "10k",
      categories: ["تطوير الأعمال"],
      avatar: avatar2,
      rating:["+2"],
    },
    {
      id: 12,
      name: "خالد الذكير",
      followers: "17K",
      likes: "23K",
      comments: "10k",
      categories: ["تطوير الأعمال"],
      avatar: avatar3,
      rating:["+8"],
    },
  ];

  return (
    <div className="card-grid-influencers">
      {data.map((item) => (
        <div className="card-influencers" key={item.id}>
          <div className="card-header-influencers">
            <img src={item.avatar} alt={item.name} className="avatar-influencers" />
            <div className="info-influencers">
              <h4>{item.name}</h4>
              <div className="stats-influencers">
                <span>
                  {" "}
                  {item.comments}{" "}
                  <i className="sicon-instagram social-icon-influencers"></i>
                </span>
                <span>
                  {" "}
                  {item.likes} <i className="sicon-snapchat social-icon-influencers"></i>
                </span>
                <span>
                  {item.followers} <i className="sicon-tiktok social-icon-influencers"></i>
                </span>
              </div>
              <div style={{display:"flex"}}> 
                {item.categories.map((category, index) => (
                  <span className="category-influencers" key={index}>
                  {item.icon}  {category}
                  </span>
                  
                ))} 
                <span className="category-influencers">{item.rating}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
