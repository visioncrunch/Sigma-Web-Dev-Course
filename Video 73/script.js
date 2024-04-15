function createCard(title, cName, views, monthsOld, duration, thumbnail){
    if (views>1000000) {
        views = Math.floor((views/1000000)*10)/10+'M';
    } 
    else if(views==1000000)
    {
        views = 1 + 'M';
    }
    else if(views>1000 && views<1000000){
        views = Math.floor((views*10)/10000) + 'K';
    }
    else if(views==1000)
    {
        views = 1 + 'K';
    }
    
    let card = document.querySelector(".card").cloneNode(true);
    card.querySelector(".title").innerHTML=`${title}`;
    card.querySelector(".cName").innerHTML=`${cName}`;
    card.querySelector(".views").innerHTML=`${views}`;
    card.querySelector(".monthsOld").innerHTML=`${monthsOld}`;
    card.querySelector(".time").innerHTML=`${duration}`;
    card.querySelector(".img").src=`${thumbnail}`;
    
    document.querySelector(".container").insertAdjacentElement("beforeend",card);

}


createCard("Introduction to Backend | Sigma Web Dev video #2", "AnubhavG", 174246347, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Introduction to Backend | Sigma Web Dev video #2", "AnubhavG", 174246347, 7, "31:22", "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1280,h_720/https://blog.snappa.com/wp-content/uploads/2019/01/YouTube-Thumbnail-Dimensions.jpg")