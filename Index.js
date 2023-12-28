//The data for our website
let data = [
    {
        id: 0, Name: "Umaid Bhawan Palace", place: "Jodhpur", type: "Regular Suite", features: ["Breakfirst", "lawn"], bedType: ["2", "1"], price: 1500, photos: ["https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/10/77/1077257490.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/12/04/120486738.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/12/04/120486746.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/12/04/120486734.jpeg"]
    },
    {
        id: 1, Name: "Panchavatti", place: "Goa", type: "Deluxe", features: ["Breakfirst", "lawn", "sweeming Pool", "Private Beach"], bedType: ["2", '1'], price: 3900, photos: ["https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/30/69/306951906.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/30/69/306951930.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/30/69/306951874.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/30/69/306951844.jpeg"]
    },
    {
        id: 2, Name: "Casa Susegad", place: "Goa", type: "Deluxe", features: ["Breakfirst", "lawn", "SweemingPool"], bedType: ["2", "0"], price: 6500, photos: ["https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/22/73/227365284.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/22/73/227365314.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/22/73/227365286.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/22/73/227365320.jpeg"]
    },
    {
        id: 3, Name: "Chapslee", place: "Himachal Pradesh", type: "Presidential Suite", features: ["Breakfirst", "SweemingPool"], bedType: ['2', '1'], price: 3300, photos: ["https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/83/25/832525256.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/12/56/1256492444.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/83/25/832525460.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/12/56/1256492416.jpeg"]
    },
    {
        id: 4, Name: "Centaur Hote", place: "Delhi", type: "Presidential Suite", features: ["Breakfirst", "SweemingPool"], bedType: ['2', '1'], price: 5000, photos: ["https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/37/25/372553664.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/37/25/372553668.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/33/61/336127408.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/43/10/431040360.jpeg"]
    },
    {
        id: 5, Name: "Hotel Airport International", place: "Mumbai", type: "Deluxe", features: ["Breakfirst", "lawn", "SweemingPool"], bedType: ["2", "1"], price: 7500, photos: ["https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/37/25/372548618.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/10/21/102169362.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/10/21/102169374.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/10/21/102169350.jpeg"]
    },
    {
        id: 6, Name: "Leela Palace Hotel", place: "Bangalore", type: "Luxury.", features: ["Breakfirst", "lawn", "SweemingPool"], bedType: ["2"], price: 11990, photos: ["https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/26/65/266592470.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/65/74/657405436.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/76/36/763606830.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/50/26/502648188.jpeg"]
    },
    {
        id: 7, Name: "Hotel Airport Ashok", place: "Kolkata", type: "Deluxe", features: ["Breakfirst", "lawn", "SweemingPool"], bedType: ['2', "1"], price: 4500, photos: ["https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/33/75/337543248.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/33/75/337543250.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/33/58/335894668.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/33/58/335894628.jpeg"]
    },
    {
        id: 8, Name: "Le Royal Meridien Hotel", place: "Chennai", type: "Regular Suite", features: ["Breakfirst", "lawn"], bedType: ["2", "1"], price: 2300, photos: ["https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/37/25/372539558.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/66/66/666633264.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/37/25/372539562.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/37/25/372539554.jpeg"]
    },
    {
        id: 9, Name: "The Residence Apartment", place: "Mumbai", type: "Penthouse Suite", features: ["Breakfirst"], bedType: ['2', "1"], price: 1800, photos: ["https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/10/03/1003183514.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/33/32/333227336.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/33/32/333227372.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/28/62/286218518.jpeg"]
    },
    {
        id: 10, Name: "Hotel Orchid Park Plaza", place: "Bangalore", type: "Deluxe", features: ["Breakfirst", "Park", "SweemingPool"], bedType: ['2'], price: 14999, photos: ["https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/35/73/357333140.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/35/73/357333166.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/10/30/1030885744.jpeg", "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/30/69/306923912.jpeg"]
    },
]


//functionality

let citySection = document.getElementById("placeDropDown");
let checkin = document.getElementById("checkin");
let checkout = document.getElementById("checkout");
let btn = document.getElementById("btn");
let room = document.getElementById("room");
let adults = document.getElementById("adults");
let child = document.getElementById("child");
let header = document.getElementById("header");

let city; let checkinDate; let checkoutDate; let roomsNum; let adultsNum; let childrensNum; let price; let newData = [];

function addScrollEvent() {
    if (document.documentElement.scrollTop >= 50) {
        header.classList.add("active");
        document.getElementById("logo").style.color = "black";
        let list = document.getElementsByClassName("navbar-list");
        for (let ele of list) {
            ele.style.color = "black";
        }
    } else {
        header.classList.remove("active");
        document.getElementById("logo").style.color = "white";
        let list = document.getElementsByClassName("navbar-list");
        for (let ele of list) {
            ele.style.color = "white";
        }
    }
}

//setting the data
data.map((ele) => {
    let img = document.createElement("img");
    img.src = ele.photos[0];
    img.style.height = "30vh";
    img.style.width = "100%";
    img.setAttribute("id", ele.id);

    let h3 = document.createElement("h3");
    h3.innerText = ele.Name;
    h3.style.paddingLeft = "0.5rem";
    h3.setAttribute("id", ele.id);

    let p = document.createElement("p");
    p.innerText = ele.place;
    p.style.paddingLeft = "0.5rem";
    p.setAttribute("id", ele.id);

    let div = document.createElement("div");
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);
    div.style.height = "40vh";
    div.style.width = "20vw";
    div.style.overflow = "hidden";
    div.style.boxShadow = "5px 5px 5px rgb(209, 206, 206)";
    div.setAttribute("id", ele.id);

    document.getElementById("card-container").appendChild(div);
    document.getElementById("card-container").addEventListener("click", viewHotelDetails)
})


//onclicking search button
btn.addEventListener("click", () => {
    city = citySection.options[citySection.selectedIndex].value;
    roomsNum = room.value;
    adultsNum = adults.value;
    childrensNum = child.value;

    newData = data.filter((ele) => {
        console.log(ele.place.toLowerCase() === city);
        return ele.place.toLowerCase() === city.toLowerCase();
    })
    newData = newData.filter((ele) => {
        return ele.bedType[0] >= adultsNum;
    })
    newData = newData.filter((ele) => {
        if (ele.bedType.length === 1) {
            return ele;
        }
        else {
            console.log(ele.bedType[1] >= childrensNum);
            return ele.bedType[1] >= childrensNum;
        }
    })
    if (newData.length != 0) {
        document.getElementById("main-container").style.display = "none";
        document.getElementById("details-container").style.display = "block";
        document.getElementById("hotelDetails").style.display = "none";
        document.getElementById("header").style.background = "#0077b6";

        newData.map((ele) => {
            let img = document.createElement("img");
            img.src = ele.photos[0];
            img.style.width = "100%";

            let imgdiv = document.createElement("div");
            imgdiv.style.width = "25rem";
            imgdiv.style.height = "100%";
            imgdiv.style.overflow = "hidden";
            imgdiv.style.boxShadow = "2px 5px 10px rgb(195, 193, 193)";
            imgdiv.appendChild(img);

            let h3 = document.createElement("h3");
            h3.innerText = ele.Name;

            let placepara = document.createElement("p");
            placepara.innerText = ele.place;

            let featurespara = document.createElement("p");
            featurespara.innerText = ele.features.join(", ");

            let bedtypepara = document.createElement("p");
            let eleadult = ele.bedType[0];
            let elechild = ele.bedType[1];
            bedtypepara.innerText = `Adults: ${eleadult}    Child: ${elechild}`;

            let pricepara = document.createElement("p");
            pricepara.innerHTML = `RS: ${ele.price}`;

            let btn = document.createElement("button");
            btn.setAttribute("id", ele.id);
            btn.classList.add("viewbtn");
            btn.innerText = "Vew Details"
            btn.style.width = "7em";
            btn.style.padding = "3px 2px";
            btn.style.color = "white";
            btn.style.background = "#0077b6";

            btn.addEventListener("click", viewHotelDetails)

            let detailsdiv = document.createElement("div");
            detailsdiv.style.height = "100%";
            detailsdiv.style.width = "25rem";
            detailsdiv.style.lineHeight = "2.1rem";
            detailsdiv.appendChild(h3);
            detailsdiv.appendChild(placepara)
            detailsdiv.appendChild(featurespara)
            detailsdiv.appendChild(bedtypepara)
            detailsdiv.appendChild(pricepara)
            detailsdiv.appendChild(btn);

            let parentdiv = document.createElement("div");
            parentdiv.style.width = "80%";
            parentdiv.style.height = "30vh";
            parentdiv.style.margin = "1rem auto";
            parentdiv.style.display = "flex";
            parentdiv.style.justifyContent = "space-between";

            parentdiv.appendChild(imgdiv)
            parentdiv.appendChild(detailsdiv)
            document.getElementById("details-container").appendChild(parentdiv);

        })
    }

})

// function openTab(e) {
//     console.log(e.target.id);
//     document.getElementById("details-container").remove("div");
//     document.getElementById("main-container").style.display = "block";
//     document.getElementById("details-container").style.display = "none";
// }


function viewHotelDetails(event) {
    let hotelid = event.target.id;
    let element = {};
    element = data.filter((eachdata) => {
        if (eachdata.id == hotelid) {
            return eachdata;
        }
        return;
    })

    document.getElementById("main-container").style.display = "none";
    document.getElementById("details-container").style.display = "none";
    document.getElementById("hotelDetails").style.display = "block";

    element.map((ele) => {

        let imageContainer = document.createElement("div");

        ele.photos.map((photo) => {
            let img = document.createElement("img")
            console.log(photo);
            img.src = photo;

            let imgdiv = document.createElement("div")
            imgdiv.appendChild(img);
            imgdiv.style.height = "20vh";
            imgdiv.style.width = "13rem";
            imgdiv.style.overflow = "hidden";

            imageContainer.appendChild(imgdiv)
            imageContainer.style.display = "grid";
            imageContainer.style.gridTemplateColumns = "1fr 1fr";
            imageContainer.style.gap = "0.5rem";
            imageContainer.style.width = "50%";
        })

        let h3 = document.createElement("h3");
        h3.innerText = ele.Name;

        let placepara = document.createElement("p");
        placepara.innerText = ele.place;

        let featurespara = document.createElement("p");
        featurespara.innerText = ele.features.join(", ");

        let bedtypepara = document.createElement("p");
        let eleadult = ele.bedType[0];
        let elechild = ele.bedType[1];
        bedtypepara.innerText = `Adults: ${eleadult}  Child: ${elechild}`;

        let pricepara = document.createElement("p");
        pricepara.innerHTML = ele.price;

        let btn = document.createElement("button");
        btn.classList.add("BookHotel");
        btn.innerText = "Book Hotel"
        btn.style.width = "7em";
        btn.style.padding = "3px 2px";
        btn.style.color = "white";
        btn.style.background = "#0077b6";

        let righthoteldiv = document.createElement("div");
        righthoteldiv.style.width = "50%";
        righthoteldiv.style.lineHeight = "2rem";
        righthoteldiv.appendChild(h3);
        righthoteldiv.appendChild(placepara);
        righthoteldiv.appendChild(featurespara);
        righthoteldiv.appendChild(bedtypepara);
        righthoteldiv.appendChild(pricepara);
        righthoteldiv.appendChild(btn);

        let parenthoteldiv = document.createElement("div");
        parenthoteldiv.style.display = "grid";
        parenthoteldiv.style.gridTemplateColumns = "1fr 2fr";
        parenthoteldiv.style.gap = "2rem";
        parenthoteldiv.appendChild(imageContainer);
        parenthoteldiv.appendChild(righthoteldiv);

        document.getElementById("hotelDetails").appendChild(parenthoteldiv);
    });

}