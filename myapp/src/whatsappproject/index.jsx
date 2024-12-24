import React from "react"
import './index.css'

export default function Whatsapp(){
    return(
        <div class="container">
        <div class="leftside">
            <div class="header">
                <div class="logo">
                    <img src="./viswaksen.jpg" class="cover" alt=""/>
                </div>
                <ul class="icons">
                    <li class="icon1"><ion-icon name="scan-circle-outline"></ion-icon></li>
                    <li class="icon2"><ion-icon name="chatbox"></ion-icon></li>
                    <li class="icon3"><ion-icon name="ellipsis-vertical"></ion-icon></li>
                </ul>
            </div>
            <div class="search">
                <div>
                    <input type="text" placeholder="Search or search for chat"/>
                    <ion-icon name="search-outline" class="engine"></ion-icon>
                </div>
            </div>
            <div class="chatlist">
                <div class="side activate">
                    <div class="box">
                        <img src="./pandya.jpg" class="cover" alt=""/>
                    </div>
                    <div class="details">
                        <div class="listfirst">
                            <h4>Kathik Varma</h4>
                            <p class="time">11:30</p>
                        </div>
                        <div class="message_k">
                            <p>Good morning karthik</p>
                        </div>
                    </div>
                </div>
                <div class="side unread">
                    <div class="box">
                        <img src="./MLK_0247.JPG" class="cover" alt=""/>
                    </div>
                    <div class="details">
                        <div class="listfirst">
                            <h4>Surya</h4>
                            <p class="time">11:10</p>
                        </div>
                        <div class="message_k">
                            <p>I will call u later</p>
                            <b>1</b>
                        </div>
                    </div>
                </div>
                <div class="side unread">
                    <div class="box">
                        <img src="./download.jpeg" class="cover" alt=""/>
                    </div>
                    <div class="details">
                        <div class="listfirst">
                            <h4>Charan </h4>
                            <p class="time">11:00</p>
                        </div>
                        <div class="message_k">
                            <p>Hii</p>
                            <b>1</b>
                        </div>
                    </div>
                </div>
                <div class="side">
                    <div class="box">
                        <img src="./Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.webp" alt="" class="cover"/>
                    </div>
                    <div class="details">
                        <div class="listfirst">
                            <h4>Ramya</h4>
                            <p class="time">10:40</p>
                        </div>
                        <div class="message_k">
                            <p>How are you..?</p>
                        </div>
                    </div>
                </div>
                <div class="side unread">
                    <div class="box">
                        <img src="./james-person-1.jpg" class="cover" alt=""/>
                    </div>
                    <div class="details">
                        <div class="listfirst">
                            <h4>Professor</h4>
                            <p class="time">10:10</p>
                        </div>
                        <div class="message_k">
                            <p>What about the assignment...?</p>
                            <b>10</b>
                        </div>
                    </div>
                </div>



                <div class="side unread">
                    <div class="box">
                        <img src="./Kayla-Person.jpg" alt="" class="cover"/>
                    </div>
                    <div class="details">
                        <div class="listfirst">
                            <h4>Kajal</h4>
                            <p class="time">9:10</p>
                        </div>
                        <div class="message_k">
                            <p>How are you..?</p>
                            <b>5</b>
                        </div>
                    </div>
                </div>


                <div class="side">
                    <div class="box">
                        <img src="./download.webp" alt="" class="cover"/>
                    </div>
                    <div class="details">
                        <div class="listfirst">
                            <h4>Mahesh</h4>
                            <p class="time">8:10</p>
                        </div>
                        <div class="message_k">
                            <p>Code Pampi..</p>
                        </div>
                    </div>
                </div>


                <div class="side unread">
                    <div class="box">
                        <img src="./download (1).webp" alt="" class="cover"/>
                    </div>
                    <div class="details">
                        <div class="listfirst">
                            <h4>Mayaa</h4>
                            <p class="time">Yesterday</p>
                        </div>
                        <div class="message_k">
                            <p>Photos Pampi raa</p>
                            <b>5</b>
                        </div>
                    </div>
                </div>

                
                <div class="side">
                    <div class="box">
                        <img src="./download (2).webp" alt="" class="cover"/>
                    </div>
                    <div class="details">
                        <div class="listfirst">
                            <h4>Mrunal</h4>
                            <p class="time">Yesterday</p>
                        </div>
                        <div class="message_k">
                            <p>Cool....</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="rightside">
            <div class="header">
                <div class="imgtext">
                    <div class="logo">
                        <img src="./pandya.jpg" class="cover" alt=""/>
                    </div>
                    <h4>karthik Varma<br/></h4>
                </div>
                <ul class="icons">
                    <li><ion-icon name="videocam-outline"></ion-icon></li>
                    <li class="icon1"><ion-icon name="search-outline"></ion-icon></li>
                    <li class="icon3"><ion-icon name="ellipsis-vertical"></ion-icon></li>
                </ul>
            </div>
            <div class="chatbox">
                <div class="message my_meassage">
                    <p>Hi<br/><span>11:30</span></p>
                </div>
                <div class="message friend_meassage">
                    <p>Hello<br/><span>11:30</span></p>
                </div>
                <div class="message my_meassage">
                    <p>How are you..?<br/><span>11:30</span></p>
                </div>
                <div class="message friend_meassage">
                    <p>Fine. What about u..?<br/><span>11:30</span></p>
                </div>
                <div class="message my_meassage">
                    <p>Have u met any of our friends recently<br/><span>11:30</span></p>
                </div>
                <div class="message friend_meassage">
                    <p>Yeah.. i met only mahesh and mayaa<br/><span>11:30</span></p>
                </div>
                <div class="message my_meassage">
                    <p>Is all fine and are they doing there jobs?<br/><span>11:30</span></p>
                </div>
                <div class="message friend_meassage">
                    <p>Yeah.. man they about u also<br/><span>11:30</span></p>
                </div>
                <div class="message my_meassage">
                    <p>ohh..!! they still remeber me <br/><span>11:30</span></p>
                </div>
                <div class="message friend_meassage">
                    <p>Yeah of course. How will they forget u..? <br/><span>11:30</span></p>
                </div>
                <div class="message my_meassage">
                    <p>Just kidding man.. Chill<br/><span>11:30</span></p>
                </div>
            </div>
            <div class="chatbox_input">
                <ion-icon name="happy-outline"></ion-icon>
                <ion-icon name="attach-outline"></ion-icon>
                <input type="text" placeholder="Type a message"></input>
                <ion-icon name="mic-outline"></ion-icon>
            </div>
        </div>
    </div>
    )
}